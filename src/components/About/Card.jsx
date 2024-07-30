import { Box, Typography } from "@mui/material";

const Card = ({ icon, txt, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // flexDirection: { xs: "column", sm: "row", md: "column" },
        minHeight: { xs: "170px", sm: "200px", md: "250px" },
        width: {
          xs: "100%",
          sm: "calc(80% - 20px)",
          md: "calc(33.33% - 20px)",
        },
        margin: "10px",
        gap: "10px",
        border: "1px solid #ffffff40",
        bgcolor: "#ffffff10",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        p: "15px",
      }}
    >
      <Box
        sx={{
          bgcolor: { xs: "transparent", md: color },
          borderRadius: "20px",
          width: 80,
          height: 80,
          display: "grid",
          placeItems: "center",
          alignSelf: { sm: "center", md: "start" },
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem", lg: "1.5rem" },
          textAlign: { sm: "center", md: "start" },
        }}
      >
        {txt}
      </Typography>
    </Box>
  );
};

export default Card;
