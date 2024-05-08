import { Box, Link } from "@mui/material";
import React from "react";

const index = () => {
  return <Box sx={{p: "15px"}}>Coded and Designed by <Link href="http://t.me/developer_bola" target="_blank" sx={{color: "white", textDecoration: "underline"}}>developer_bola</Link> {new Date().getFullYear()}</Box>;
};

export default index;