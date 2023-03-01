import { Navigation } from "./Navigation";
import { NavLink } from "react-router-dom";
import { AuthNav } from "./AuthNav";
import i18n from "i18next";
import {
  AppBar,
  Toolbar,
  Typography,
  ButtonGroup,
  Button,
} from "@mui/material";

export const Header = () => {
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  return (
    <AppBar position="static" sx={{ marginBottom: "15px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <NavLink to="/">
          <Typography
            color="secondary"
            variant="h4"
            component="span"
            sx={{ fontFamily: "Gloock" }}
          >
            TheBN
          </Typography>
        </NavLink>
        <Navigation />
        <ButtonGroup
          color="secondary"
          variant="text"
          aria-label="text button group"
        >
          <Button onClick={() => changeLanguage("ua")}>UA</Button>
          <Button onClick={() => changeLanguage("en")}>EN</Button>
        </ButtonGroup>
        <AuthNav />
      </Toolbar>
    </AppBar>
  );
};
