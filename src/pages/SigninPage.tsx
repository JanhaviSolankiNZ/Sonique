import { Typography } from "@mui/material";
import {
  Container,
  Form,
  Heading,
  OrDivider,
  PrimaryButton,
  SocialButton,
  StyledInput,
  Wrapper,
} from "../layout/AuthLayout";

const SigninPage = () => {
  return (
    <Container>
      <Wrapper>
        <img
          src="/spotify-logo.png" // add this in public folder
          alt="logo"
          width={40}
          height={40}
        />
        <Heading>Welcome back</Heading>
        <Form>
          <Typography>Email</Typography>
          <StyledInput placeholder="" value="" />
          <PrimaryButton>Continue</PrimaryButton>
          <OrDivider>
            Or</OrDivider>
          <SocialButton>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              width="20"
            />
            Continue with Google
          </SocialButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SigninPage;
