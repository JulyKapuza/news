import { useFetchMainNews } from "../hooks/useFetchMainNews";
import {
  Box,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Skeleton,
} from "@mui/material";
import { SelectedDataOfNews } from "../types";

export const NewsListTrend = () => {
  const { data, isLoading, error, isError } = useFetchMainNews();
  if (isLoading) {
    return (
      <Box sx={{ pt: 0.5 }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={300}
          height={138}
        />
        <Skeleton animation="wave" width={300} />
        <Skeleton animation="wave" width={300} height={70} />
      </Box>
    );
  }

  if (isError) {
    return <p>{(error as Error).message}</p>;
  }

  return (
    <Grid container spacing={{ xs: 2, md: 2 }} mb={3}>
      {data?.map(({ id, abstract, title, img }: SelectedDataOfNews) => {
        return (
          <Grid item xs={10} md={3} key={id} sx={{ display: "flex" }}>
            <Card>
              <CardActionArea
                sx={{
                  height: " 100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  alt={title}
                  image={img}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {abstract}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
