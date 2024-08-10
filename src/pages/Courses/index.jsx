import { Box, Container, Typography, Button } from "@mui/material";
import CourseCard from "../../components/UI/CourseCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Data } from "../../context";


const index = () => {
  const { courses } = useContext(Data);

  return (
    <>
      <Container sx={{ mb: "20px", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            width: "100%",
            mb: "15px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              textAlign: "center",
            }}
          >
            Bizning Kurslar
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: "20px", md: "20px 0" },
            display: "flex",
            flexWrap: "wrap",
            gap: "35px",
            justifyContent: "center",
            "@media screen and (max-width: 768px)": {
              gap: "20px",
            },
          }}
        >
          {courses.map((course, idx) => {
            return (
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.1 * idx + 0.5,
                }}
                key={idx}
              >
                <CourseCard
                  img={course.img}
                  name={course.name}
                  cost={course.cost}
                />
              </motion.div>
            );
          })}
        </Box>
        <Link to="https://t.me/developer_bola" style={{ margin: "15px auto" }}>
          <Button
            sx={{
              color: "#fff",
              p: "6px 20px",
              borderRadius: "20px",
              width: "100%",
              fontSize: "1rem",
            }}
            variant="outlined"
          >
            Kurs sotib olish
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default index;
