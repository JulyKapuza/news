import { Grid, Skeleton, Box } from "@mui/material";

export const SkeletonGrid = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 2 }} mb={3}>
      <Grid item xs={10} md={3}  sx={{ display: "flex", flexDirection:'column' }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={300}
          height={138}
        />
        <Skeleton animation="wave" width={300} />
        <Skeleton animation="wave" width={300} height={70} />
      </Grid>
      <Grid item xs={10} md={3}  sx={{ display: "flex", flexDirection:'column' }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={300}
          height={138}
        />
        <Skeleton animation="wave" width={300} />
        <Skeleton animation="wave" width={300} height={70} />
      </Grid>
      <Grid item xs={10} md={3}  sx={{ display: "flex", flexDirection:'column' }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={300}
          height={138}
        />
        <Skeleton animation="wave" width={300} />
        <Skeleton animation="wave" width={300} height={70} />
          </Grid>
          <Grid item xs={10} md={3}  sx={{ display: "flex", flexDirection:'column' }}>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={300}
          height={138}
        />
        <Skeleton animation="wave" width={300} />
        <Skeleton animation="wave" width={300} height={70} />
      </Grid>
    </Grid>
  );
};
