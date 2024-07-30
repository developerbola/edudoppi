import { Link } from "react-router-dom";
import Form from "../../components/UI/Form";
import {
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  Container,
} from "@mui/material/";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import GoogleIcon from "@mui/icons-material/Google";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "grid",
        placeItems: "center",
        height: "500px",
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            position: "absolute",
            left: "3%",
            top: "5%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            opacity: 0.7,
            cursor: "pointer",
          }}
        >
          <ChevronLeftIcon />
          <Typography>Back to Home</Typography>
        </Box>
      </Link>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, height: "62%", width: "100%" }}
        >
          <Form label={"Email"} placeholder={"Your Email"} />
          <Form label={"Password"} placeholder={"Your Password"} />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            sx={{
              color: "#fff",
              p: "6px",
              borderRadius: "20px",
              my: "15px",
            }}
            fullWidth
            variant="outlined"
          >
            Sign In
          </Button>
        </Box>
        <Typography sx={{ textAlign: "center", mb: "12px" }}>or</Typography>
        <Box width={"100%"}>
          <Button
            sx={{
              color: "#fff",
              p: "6px",
              borderRadius: "10px",
              mb: "10px",
              border: "1px solid #ffffff40",
            }}
            fullWidth
            variant="outlined"
          >
            <GoogleIcon fontSize="small" sx={{ mr: "5px", pb: "2px" }} /> Sign
            in with Google
          </Button>
        </Box>
        <Typography>
          Don't have an account? <Link to="/signup">{"Sign Up"}</Link>
        </Typography>
      </Box>
    </Container>
  );
}
