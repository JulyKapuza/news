import { Logout } from "./Logout";
import { Avatar } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";


export const Profile = () => {
  return (
    <Box
      mt={6}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center",  }}
    >
      <Box 
        mb={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          padding:'0 90px'
        }}
      >
        <Avatar
          sx={{
            bgcolor: indigo[500],
            width: 80,
            height: 80,
            marginBottom: "15px"
          }}
        >
          A
        </Avatar>
        <Typography variant="h3" component="h2" gutterBottom>
          Lorem ipsum
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Soluta, consectetur?
          Soluta dolores officiis ullam, dolorem voluptates maiores sunt itaque
          impedit libero totam officia laboriosam consequatur perspiciatis
          exercitationem. Deleniti, molestiae at.Soluta dolores officiis ullam,
          dolorem voluptates maiores sunt itaque impedit libero totam officia
          laboriosam consequatur perspiciatis exercitationem. Deleniti,
          molestiae at.
        </Typography>
      </Box>
      <Logout />
    </Box>
  );
};
