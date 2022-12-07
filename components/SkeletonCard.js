import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Skeleton, styled } from "@mui/material";

const StyledSkeletonCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
  "&:hover": {
    elevation: 40,
    boxShadow: "rgba(0,0,0,0.3) 0px 15px 15px",
  },
});

const SkeletonCard = () => {
  return (
    <StyledSkeletonCard>
      <Skeleton
        variant="rectangular"
        animation="wave"
        width={400}
        height={200}
      ></Skeleton>
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{ width: "75%" }}
        >
          <Skeleton />
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "55%" }}
        >
          <Skeleton />
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: "30%" }}
        >
          <Skeleton />
        </Typography>
      </CardActions>
    </StyledSkeletonCard>
  );
};

export default SkeletonCard;
