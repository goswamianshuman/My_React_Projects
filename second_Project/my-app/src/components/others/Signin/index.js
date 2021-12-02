import React from "react";
import {
  Container,
  FormWrap,
  Icon,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  Text,
} from "./Signinelements";
const signin = () => {
  return (
    <Container>
      <FormWrap>
          <Icon to="/">AGP</Icon>
          <FormContent>
              <Form action="#">
                  <FormH1> Sign in to your account</FormH1>
                  <FormLabel htmlFor="for">Email</FormLabel>
                  <FormInput type="email" required/>
                  <FormLabel htmlFor="for">Password</FormLabel>
                  <FormInput type="password" required/>
                  <FormButton type="submit">continue</FormButton> 
                  <Text>Forgot Password</Text>
              </Form>
          </FormContent>
      </FormWrap>
    </Container>
  );
};

export default signin;
