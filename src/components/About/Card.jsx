import { Box, Typography } from "@mui/material";

const Card = ({ icon, txt, color }) => {
  return (
    <Box
      sx={{
        height: "250px",
        width: "30%",
        border: "1px solid #ffffff40",
        bgcolor: "#ffffff10",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        p: "15px",
      }}
    >
      <Box
        sx={{
          p: "15px",
          bgcolor: color,
          borderRadius: "20px",
          width: 80,
          height: 80,
          display: "grid",
          placeItems: "center",
          mb: "15px",
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontSize: "1.5rem" }}>{txt}</Typography>
    </Box>
  );
};

export default Card;
