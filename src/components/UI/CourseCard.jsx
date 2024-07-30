import { Card, CardContent, CardMedia, Typography, Chip } from "@mui/material";
import { Link } from "react-router-dom";

export default function ImgMediaCard({ img, name, cost }) {
  return (
    <Link
      to={`/courses/${name.split(" ").join("-").toLowerCase()}`}
      style={{ textDecoration: "none" }}
    >
      <Card
        sx={{
          maxWidth: 345,
          height: "auto",
          bgcolor: "#ffffff03",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
          transition: "background .3s ease-in",
          ":hover": { cursor: "pointer", bgcolor: "#ffffff10" },
        }}
      >
        <CardMedia
          component="img"
          height="240"
          width="300"
          image={img}
          sx={{ objectFit: "cover" }}
        />
        <CardContent
          sx={{
            pb: "7px!important",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Chip
            label={cost}
            sx={{
              fontSize: "18px",
              bgcolor: "#ffffff10",
              border: "1px solid #ffffff20",
            }}
          />
        </CardContent>
      </Card>
    </Link>
  );
}
