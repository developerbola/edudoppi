import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LeftImage from "./LeftImage";
import { Link } from "react-scroll";

const index = () => {
  return (
    <Box
      id="hero"
      sx={{
        display: { md: "column", lg: "flex" },
        minHeight: "calc(100vh - 70px)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { md: "100%", lg: "50%" },
          display: "flex",
          flexDirection: "column",
          alignItems: { md: "center", lg: "end" },
          pt: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", lg: "start" },
            flexDirection: "column",
            textAlign: { xs: "center", lg: "start" },
          }}
        >
          <Typography
            sx={{
              display: { xs: "none", md: "block" },
              width: "50%",
              fontSize: "1.2rem",
              bgcolor: "#ffffff30",
              p: "10px",
              borderRadius: "30px",
              border: "1px solid #ffffff40",
              textAlign: "center",
              mb: "10px",
            }}
          >
           Kelajakni Biz Bilan O'rgan!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", lg: "3rem" },
              fontFamily: "Inter",
              fontWeight: "bold",
              ml: "10px",
              lineHeight: "1.4",
              mb: "10px",
            }}
          >
            Yangi Avlod Innovatsional <br /> texnalogiyalari kurslari
          </Typography>
          <Typography sx={{ ml: "15px" }}>
            Kelajakni o'rganishga Hush Kelibsiz! 
            Bizning o'rganishga oson <br /> bo'lgan kurslarimiz bilan kelajagingizni quring va kashf etish!
           
          </Typography>
          <Link to="courses" smooth={true} duration={500}>
            <Button
              variant="outlined"
              sx={{
                width: "250px",
                bgcolor: "#00000030",
                p: "10px 15px",
                borderRadius: "30px",
                border: "1px solid #ffffff40",
                color: "#fff",
                fontSize: "1rem",
                mt: "50px",
              }}
            >
              Kurslarni ko'rish
              <KeyboardArrowRightIcon fontSize="large" sx={{ ml: "10px" }} />
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ width: "40%" }}>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            height: "100%",
            justifyContent: "end",
          }}
        >
          <LeftImage mt="70px" />
          <LeftImage mt="20px" />
          <LeftImage mt="70px" />
          <LeftImage mt="20px" />
        </Box>
      </Box>
    </Box>
  );
};

export default index;
