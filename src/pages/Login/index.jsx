import { Link } from "react-router-dom";

import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material/";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

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
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
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
          <Grid container>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
