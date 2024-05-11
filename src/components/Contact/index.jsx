import { Container, Box } from "@mui/material";
import Form from "./Form";

const index = () => {
  return (
    <Container sx={{ minHeight: "20vh", mt: "50px" }}>
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
      </Box>
    </Container>
  );
};

export default index;
