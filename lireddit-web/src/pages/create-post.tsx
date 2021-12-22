import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { useCreatePostMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useIsAuth } from "../utils/useIsAuth";

const CreatePost: React.FC<{}> = ({}) => {
  const [, createPost] = useCreatePostMutation();
  const router = useRouter();
  useIsAuth();
  return (
    <Layout variant="small">
      <Wrapper variant="small">
        <Formik
          initialValues={{ title: "", text: "" }}
          onSubmit={async (values) => {
            const { error } = await createPost({ input: values });
            if (!error) {
              router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="title" placeholder="title" label="Title" />
              <Box mt={4}>
                <InputField
                  textarea
                  name="text"
                  placeholder="text..."
                  label="Body"
                />
              </Box>
              <Button
                mt={4}
                type="submit"
                variantColor="teal"
                isLoading={isSubmitting}
              >
                create post
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
