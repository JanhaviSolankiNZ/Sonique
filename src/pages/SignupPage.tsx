import {
  Container,
  Wrapper,
  Heading,
  Form,
  StyledInput,
  PrimaryButton,
  SocialButton,
  OrDivider,
} from "../layout/AuthLayout";
import { Typography } from "@mui/material";

const SignupPage = () => {
  return (
    <Container>
      <Wrapper>
        <img
          src="/spotify-logo.png" // add this in public folder
          alt="logo"
          width={40}
          height={40}
        />
        <Heading>
          Sign up to <br /> start listening
        </Heading>

        <Form>
          <Typography variant="body2" mb={1}>
            Email address
          </Typography>
          <StyledInput
            placeholder="name@domain.com"
            value=""
            onChange={() => {}}
            fullWidth
          />

          <PrimaryButton>Next</PrimaryButton>
          <OrDivider>
            or
          </OrDivider>
          <SocialButton>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              width="20"
            />
            Sign up with Google
          </SocialButton>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default SignupPage;
