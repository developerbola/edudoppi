import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import React from "react";
const index = () => {
  const slug = useParams();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", margin: "-40px 60px" }}>
      <Typography
        sx={{
          fontSize: "2rem",
          textAlign: "center",
          textTransform: "capitalize",
        }}
        width={"100%"}
      >
        {slug.slug.split("-").join(" ")}
      </Typography>
      <Box >
        <video
          src="https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4"
          width="900"
          height="auto"
          controls
        />
        <Box>

        </Box>
      </Box>
    </Box>
  );
};

export default index;
