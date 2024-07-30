import { Box } from "@mui/material";
import React, { useState } from "react";

const Form = ({ label, placeholder }) => {
  const [value, setValue] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "100%",
        my: "10px"
      }}
    >
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={label.includes("Telegram") && !value.includes("t.me/") ? (`t.me/${value}`) : value}
        style={{
          background: "#ffffff30",
          borderRadius: "10px",
          border: "none",
          outline: "none",
          padding: "15px",
          fontSize: "1.1rem",
          color: "#fff",
          minWidth: "100%",
        }}
      />
    </Box>
  );
};

export default Form;
