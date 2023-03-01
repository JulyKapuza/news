import { Outlet } from "react-router-dom";
import {Header} from "./Header";
import { Footer } from "./Footer";
import { Container, Box } from "@mui/material";


export const Layout= ()=> {
  return (
    <Box sx={{minHeight: "100vh", display:'flex', flexDirection:" column"}}>
      <Header />
      <Box component="main" style={{flex:" 1 1 auto"}}>
      <Container>
          <Outlet />
      </Container>
      </Box>
     <Footer/>
    </Box>
  );
}
