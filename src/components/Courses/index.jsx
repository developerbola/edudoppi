import { Box, Typography, Container } from "@mui/material";
import CourseCard from "./CourseCard";

const index = () => {
  return (
    <Box sx={{ minHeight: "100vh", px: "50px", mt: "30px" }} id="courses">
      <Container>
        <Box
          sx={{
            width: "100%",
            pl: "20px",
            mb: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: { xs: "1.5rem", md: "2.5rem" } }}>
            Bizning Kurslar
          </Typography>
        </Box>
        <Box
          sx={{
            p: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "35px",
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
            name="Node JS"
          />
          <CourseCard
            img={
              "https://i.pinimg.com/736x/69/b8/41/69b841b99e0c45554e061725970ffef5.jpg"
            }
            name="Node JS"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default index;
