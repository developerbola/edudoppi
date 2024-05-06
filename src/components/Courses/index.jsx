import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Box sx={{ minHeight: "100vh" }} id="courses">
      Courses
      <Link to={"/courses"}>
        <Button variant="outlined">AllCourses</Button>
      </Link>
    </Box>
  );
};

export default index;
