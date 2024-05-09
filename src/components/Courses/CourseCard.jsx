import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function ImgMediaCard({ img, name }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "auto",
        bgcolor: "#ffffff03",
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        component="img"
        height="240"
        width="300"
        image={img}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ pb: "7px!important" }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
