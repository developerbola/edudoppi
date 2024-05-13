import { Box, Typography } from "@mui/material";
import Card from "./Card";
import SchoolIcon from "@mui/icons-material/School";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const index = () => {
  return (
    <Box id="about" sx={{ minHeight: "60vh", px: "50px" }}>
      <Typography
        sx={{
          fontSize: { xs: "2.3rem", md: "3.5rem" },
          fontFamily: "Inter",
          mb: "30px",
        }}
      >
        "edudoppi" bu -
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Card
          icon={<SchoolIcon sx={{ fontSize: 50 }} />}
          txt="Zamonaviy kasblarni o'rgatuvchi yangicha uslubdagi online platforma"
          color={"#00ffff30"}
        />
        <Card
          icon={<MonetizationOnIcon sx={{ fontSize: 50 }} />}
          txt="Dasturlashning birinchi bosqichlarini mutlaqo tekinga o'rganasiz"
          color={"#ffff0040"}
        />
        <Card
          icon={<PersonAddIcon sx={{ fontSize: 50 }} />}
          txt="Biz kursni tugatib jamoaga qo'shilish imkoniyatini ham taqdim etamiz"
          color={"#6dff0040"}
        />
      </Box>
    </Box>
  );
};

export default index;
