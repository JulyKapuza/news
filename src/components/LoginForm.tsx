import { useForm } from "react-hook-form";
import { ICredentials } from "../types/credential";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/auth/authSlice";
import { adminCredential } from "../data/adminCredential";
import { TextField, Typography, Button, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ICredentials>({
    mode: "onBlur",
  });

  const onSubmit = (data: ICredentials) => {
    const { username, password } = data;
    const validUser = username.trim();

    if (validUser !== adminCredential.username || password !== adminCredential.password) {
      toast.error("Something wrong, try again");
      reset();
      return;
    }
    dispatch(signIn());
    navigate("/profile", { replace: true });
    reset();
  };

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography variant="h3" component='h2' mb={7} sx={{ fontFamily: "Gloock", color: blueGrey[900] }}>
        The Breaking News
      </Typography>
      <Typography variant="h5" component='p' color='primary'>Sign In</Typography>
      <Box
        sx={{
          width: 900,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          sx={{ width: "500px" }}
          label="Username"
          variant="standard"
          type={"text"}
          {...register("username", { required: "Please enter your username" })}
        />

        <Box mt={1} style={{ height: 40 }}>
          {errors?.username && (
            <Typography
              color="error"
              variant="body2"
              component="span"
              gutterBottom
            >
              {errors?.username?.message || "Empty field"}{" "}
            </Typography>
          )}
        </Box>

        <TextField
          sx={{ width: "500px" }}
          label="Password"
          variant="standard"
          type={"password"}
          {...register("password", {
            required: "Please enter your password",
            minLength: { value: 5, message: "Minimum 5 symbol" },
          })}
        />

        <Box mt={1} style={{ height: 10 }}>
          {errors?.password && (
            <Typography
              color="error"
              variant="body2"
              component="span"
              gutterBottom
            >
              {errors?.password?.message || "Empty field"}
            </Typography>
          )}
        </Box>
        <Button
          sx={{ mt: 5 }}
          variant="outlined"
          disabled={!isValid}
          type="submit"
        >
          Continue
        </Button>
        <ToastContainer />
      </Box>
    </Box>
  );
};
