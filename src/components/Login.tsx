import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

export const Login = () => {
  const { t } = useTranslation();

  return (
    <NavLink to="/login">
      <Button variant="outlined" color="secondary">
        {t("login")}
      </Button>
    </NavLink>
  );
};
