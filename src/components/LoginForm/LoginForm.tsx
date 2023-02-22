import { useForm } from "react-hook-form";
import { ICredentials } from "../../interfaces/credential";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../redux/auth/authSlice";
import { fakeData } from "../../data/fakeData";
import style from "./LoginForm.module.css";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ICredentials>({
    mode: "onBlur",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data: ICredentials) => {
    const {username, password} = data;
    const validUser = username.trim()// залишати чи ні?
    if (
      validUser !== fakeData.username ||
      password !== fakeData.password
    ) {
      alert("Wrong data");
      reset();
      return;
    }
    localStorage.setItem("LOGIN", JSON.stringify(data));
    dispatch(signIn());
    navigate("/profile", { replace: true });
    reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username
        <input
          type={"text"}
          {...register("username", { required: "Please enter your username" })}
        />
      </label>
      <div style={{ height: 40 }}>
        {errors?.username && (
          <span className={style.error}>
            {errors?.username?.message || "Empty field"}{" "}
          </span>
        )}
      </div>
      <label>
        Password
        <input
          type={"password"}
          {...register("password", {
            required: "Please enter your password",
            minLength: { value: 5, message: "Minimum 5 symbol" },
          })}
        />
      </label>

      <div style={{ height: 10 }}>
        {errors?.password && (
          <span className={style.error}>
            {errors?.password?.message || "Empty field"}
          </span>
        )}
      </div>
      <input type="submit" disabled={!isValid} />
    </form>
  );
};
