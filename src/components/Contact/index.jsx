import { Container, Box, Button } from "@mui/material";
import Form from "./Form";

const index = () => {
  return (
    <Container
      sx={{
        minHeight: "20vh",
        my: "50px",
      }}
    >
      <Box sx={{ px: "13%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: "10px",
          }}
        >
          <Form label={"Name"} placeholder={"Your Name"} />
          <Form label={"Telegram Username"} placeholder={"Your Username"} />
        </Box>
        <Box>
          <textarea
            placeholder="Your Message"
            style={{
              resize: "none",
              background: "#ffffff30",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              padding: "15px",
              fontSize: "1.1rem",
              color: "#fff",
              marginTop: 20,
              width: "100%",
              height: 150,
            }}
          />
        </Box>
        <Box sx={{ width: "100%", display: "grid", placeItems: "center", mt: "10px" }}>
          <Button
            sx={{
              color: "#fff",
              p: "6px",
              borderRadius: "20px",
              width: "30%"
            }}
            variant="outlined"
          >
            SEND
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default index;
