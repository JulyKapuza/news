import { NewsListTrend } from "./NewsListTrend";
import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";


export const MainInfo = () => {
  const date = new Date();
  const currentDate = date.toDateString();

  return (
    <>
      <Box
        mt={2}
        mb={6}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle2">Today’s Paper</Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "Gloock", color: blueGrey[900] }}
        >
          The Breaking News
        </Typography>
        <Typography variant="subtitle2">{currentDate}</Typography>
      </Box>
      <NewsListTrend />
    </>
  );
};
