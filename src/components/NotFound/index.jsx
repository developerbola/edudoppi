import { Box, Typography } from "@mui/material";

const index = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontSize: "3rem", fontFamily: "Inter" }}>
        404 | Page Not Found
      </Typography>
    </Box>
  );
};

export default index;
