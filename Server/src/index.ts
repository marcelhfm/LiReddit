import "reflect-metadata";
import express from "express";
import { COOKIE_NAME, __prod__ } from "./constants";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";
import { UserResolver } from "./resolvers/user";
import { MyContext } from "./types";
import session from "express-session";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import cors from "cors";
import Redis from "ioredis";
import { createConnection } from "typeorm";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from "path";

declare module "express-session" {
  interface Session {
    userId: number;
  }
}

const main = async () => {
  //Database Connection
  const conn = await createConnection({
    type: "postgres",
    database: "lireddit",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Post, User],
  });

  await conn.runMigrations();

  //Server
  const app = express();

  const RedisStore = require("connect-redis")(session);
  const redis = new Redis();
  app.use(cors({ origin: "http://localhost:3000", credentials: true }));
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        host: "localhost",
        port: 6379,
        client: redis,
        disableTouch: true,
      }),
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, //10 Years
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
      },
      secret: "keyboard cat",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res, redis }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.get("/", (_, res) => {
    res.send("Hello");
  });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
