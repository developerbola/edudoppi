import { Box, Typography, Container } from "@mui/material";
import CourseCard from "./CourseCard";

const index = () => {
  return (
    <Box
      sx={{ minHeight: "100vh", px: { xs: "0", sm: "50px" }, mt: "30px" }}
      id="courses"
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            mb: "15px",
          }}
        >
          <Typography sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" }, textAlign: "center" }}>
            Bizning Kurslar
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: "20px", md: "20px 0" },
            display: "flex",
            flexWrap: "wrap",
            gap: "35px",
            justifyContent: "center", // Center the items horizontally
            "@media screen and (max-width: 768px)": {
              gap: "20px", // Reduce the gap between items on smaller screens
            },
          }}
        >
          <CourseCard
            img={
              "https://i.pinimg.com/736x/69/b8/41/69b841b99e0c45554e061725970ffef5.jpg"
            }
            name="React JS"
          />
          <CourseCard
            img={
              "https://i.pinimg.com/736x/69/b8/41/69b841b99e0c45554e061725970ffef5.jpg"
            }
            name="Angular JS"
          />
          <CourseCard
            img={
              "https://i.pinimg.com/736x/69/b8/41/69b841b99e0c45554e061725970ffef5.jpg"
            }
            name="Vue JS"
          />
          <CourseCard
            img={
              "https://i.pinimg.com/736x/69/b8/41/69b841b99e0c45554e061725970ffef5.jpg"
            }
            name="Node JS"
          />
          <CourseCard
            img={
              "https://i.pinimg.com/736x/69/b8/41/69b841b99e0c45554e061725970ffef5.jpg"
            }
            name="React Native"
          />
          <CourseCard
            img={
              "https://i.pinimg.com/736x/69/b8/41/69b841b99e0c45554e061725970ffef5.jpg"
            }
            name="SMM"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default index;
