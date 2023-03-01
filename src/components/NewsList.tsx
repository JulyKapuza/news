import { INews } from "../types";
import { useFetchNews } from "../hooks";
import { ButtonDelete } from "./ButtonDelete";
import {
  List,
  ListItem,
  Typography,
  Box,
  ListItemButton,
  Skeleton,
  Button,
} from "@mui/material";

export const NewsList = () => {
  const { data, isLoading, error, isError, isFetching, refetch } =
    useFetchNews();

  const handleClick = () => {
    refetch();
  };

  if (isLoading) {
    return (
      <Box mt={20}>
        <Skeleton animation="wave" width={400} />
        <Skeleton animation="wave" width={400} height={60} />
      </Box>
    );
  }
  if (isError) {
    return <p>{(error as Error).message}</p>;
  }
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 1200,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        All news
      </Typography>
      <List>
        {data?.map((item: INews) => {
          return (
            <ListItem key={item.id}>
              <ListItemButton divider sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="p"
                    align="center"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ width: "100%" }}
                    variant="body2"
                    gutterBottom
                  >
                    {item.body}
                  </Typography>
                </Box>
                <Box>
                  <ButtonDelete id={item.id} />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Button sx={{ mb: "15px" }} variant="outlined" onClick={handleClick}>
        {isFetching ? "Loading more..." : "Load More"}
      </Button>
    </Box>
  );
};
