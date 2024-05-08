import { Box } from "@mui/material";

import { Hero, About, Courses, Contact } from "../../components/components";

const index = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Courses />
      <Contact />
    </Box>
  );
};

export default index;
