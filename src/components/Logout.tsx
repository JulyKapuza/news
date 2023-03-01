import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { signOut } from "../redux/auth/authSlice";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { indigo } from "@mui/material/colors";

export const Logout= () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    
    dispatch(signOut());
    navigate("/", { replace: true });
  };

  return (
    <Button
      variant="outlined"
      sx={{ bgcolor: indigo[900] }}
      color="secondary"
      onClick={handleLogout}
    >
      {t("logout")}
    </Button>
  );
};
