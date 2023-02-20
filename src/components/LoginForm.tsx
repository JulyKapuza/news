// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
// import css from './LoginForm.module.css';


export const LoginForm = () => {

  return (
    
    <form autoComplete="off">
      <label >
        Email
        <input type="email" name="email" />
      </label>
      <label >
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>


  );
};
