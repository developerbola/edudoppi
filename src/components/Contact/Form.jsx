import { Box } from "@mui/material";
import React from "react";

const Form = ({ label, placeholder }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
      }}
    >
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        style={{
          background: "#ffffff30",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          padding: "15px",
          // width: "400px",
          fontSize: "1.1rem",
          color: "#fff",
          minWidth: "100%",
        }}
      />
    </Box>
  );
};

export default Form;
