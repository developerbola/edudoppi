import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const index = () => {
  const slug = useParams();

  return (
    <Typography sx={{
      fontSize: "2rem", textAlign: "center", textTransform: "capitalize"
    }} width={"100%"}>
      {slug.slug.split("-").join(" ")}
    </Typography>
  );
};

export default index;
