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
              width: "40%",
              fontSize: "1.2rem",
              bgcolor: "#ffffff30",
              p: "10px",
              borderRadius: "30px",
              border: "1px solid #ffffff40",
              textAlign: "center",
              mb: "10px",
            }}
          >
            Learn Techs with US
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
            Next Gen Innovational <br /> technologies courses
          </Typography>
          <Typography sx={{ ml: "15px" }}>
            Welcome to the Future of Learning! Make and Explore your future with
            our <br /> comprehensive and easy learning courses!
          </Typography>
          <Link to="courses" smooth={true} duration={500}>
            <Button
              variant="outlined"
              sx={{
                width: "230px",
                bgcolor: "#00000030",
                p: "10px 15px",
                borderRadius: "30px",
                border: "1px solid #ffffff40",
                color: "#fff",
                fontSize: "1rem",
                mt: "50px",
              }}
            >
              View courses
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
