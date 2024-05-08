import { Box } from "@mui/material";

const Card = ({ icon, txt }) => {
  return (
    <Box
      sx={{
        height: "300px",
        width: "30%",
        border: "1px solid #ffffff40",
        bgcolor: "#ffffff10",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        p: "15px"
      }}
    >
      {txt}
    </Box>
  );
};

export default Card;
