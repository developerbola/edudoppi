<<<<<<< HEAD
import { Box, Typography } from "@mui/material";
import Card from "./Card";
const index = () => {
  return (
    <Box id="about" sx={{ minHeight: "60vh", px: "50px" }}>
      <Typography sx={{ fontSize: "3.5rem", fontFamily: "Inter", mb: "30px" }}>
        "edudoppi" bu -
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Card icon="" txt="First" />
        <Card icon="" txt="Second" />
        <Card icon="" txt="Third" />
      </Box>
=======
import { Box } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <Box id="about" sx={{ minHeight: "140vh" }}>
      About
>>>>>>> 2f00df46562d428979e5bc132cc32196ce9f2831
    </Box>
  );
};

export default index;
