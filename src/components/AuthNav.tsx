import { NavLink } from "react-router-dom";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { selectIsAuth } from "../redux/auth/selectors";
import { useAppSelector } from "../hooks";
import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const AuthNav = () => {
  const isAuth = useAppSelector(selectIsAuth);

  return (
    <div>
      <NavLink to="/profile">
        <IconButton color="secondary" size="large">
          <AccountCircle />
        </IconButton>
      </NavLink>
      {!isAuth ? <Login /> : <Logout />}
    </div>
  );
};
