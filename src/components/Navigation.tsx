import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { List, ListItem,  } from "@mui/material";

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <List component="nav" sx={{ display: "flex" }}>
      <ListItem disablePadding sx={{ marginRight: "24px" }}>
        <NavLink className={"link"} to="/">
          {t("home")}
        </NavLink>
      </ListItem>
      <ListItem disablePadding>
        <NavLink className={"link"} to="/news">
          {t("news")}
        </NavLink>
      </ListItem>
    </List>
  );
};
