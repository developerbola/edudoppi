import { Box } from "@mui/material";
import { useState } from "react";

const Form = ({ label, placeholder, type, l }) => {
  const [value, setValue] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "400px",
        mt: "15px",
      }}
    >
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "#ffffff30",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          padding: "15px",
          fontSize: "1.1rem",
          color: "#fff",
          minWidth: "100%",
          letterSpacing: l ,
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export default Form;
