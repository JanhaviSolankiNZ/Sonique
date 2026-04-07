import { Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("div")({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#000",
  color: "#fff",
});

export const Wrapper = styled("div")({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

export const Heading = styled(Typography)({
  fontSize: "40px",
  fontWeight: "700",
  textAlign: "center",
});

export const Form = styled("div")({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
})

export const StyledInput = styled(TextField)({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    background: "#121212",
    color: "#fff",
    "& fieldset": {
      borderColor: "#555",
    },
    "&:hover fieldset": {
      borderColor: "#888",
    },
  },
});

export const PrimaryButton = styled(Button)({
  width: "100%",
  height: "48px",
  borderRadius: "30px",
  background: "#1DB954",
  color: "#000",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    background: "#1ed760",
  },
});

export const SocialButton = styled(Button)({
  width: "100%",
  height: "48px",
  borderRadius: "30px",
  border: "1px solid #555",
  color: "#fff",
  textTransform: "none",
  justifyContent: "center",
  gap: "10px",
});

export const OrDivider = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  color: "#aaa",
  justifyContent: "center"
});