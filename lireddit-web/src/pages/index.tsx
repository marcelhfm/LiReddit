import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => (
  <>
    <NavBar />
  </>
);

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
