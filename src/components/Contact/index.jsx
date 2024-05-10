import { Container, Box } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Container sx={{ minHeight: "20vh" }}>
      <Box>
        <Box>
          <label>Name</label>
          <input type="text" placeholder="YourName" />
        </Box>
        <Box>
          <label>Telegram Username</label>
          <input type="text" placeholder="YourUsername" />
        </Box>
      </Box>
      <Box>
        <textarea placeholder="Your Message" style={{ resize: "none" }} />
      </Box>
    </Container>
  );
};

export default index;
