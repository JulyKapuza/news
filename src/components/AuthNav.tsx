import { NavLink } from "react-router-dom";

import { selectIsAuth } from "../redux/auth/selectors";

import {useAppSelector} from '../hooks'
export const AuthNav = () => {
  const isAuth = useAppSelector(selectIsAuth);
  // const dispatch = useDispatch();

  //якщо перезавантажили сторінку
  // useEffect(()=>{
  //   const getAuthUser =(keyValue:string)=> {
  //     const user = localStorage.getItem(keyValue);
  //     return user !== null ? JSON.parse(user) : {};
  // };
  //   const authUser=  getAuthUser("LOGIN"); 
  //   if (Object.keys(authUser).length !== 0){
  //     dispatch(signIn())
  //   }
  // })


 
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
    // navigate('/', {replace: true})
  };

  return (
    <div>
      <NavLink to="/profile">Profile</NavLink>
      {!isAuth ? (
        <button>
          <NavLink to="/login">Log in</NavLink>
        </button>
      ) : (
        <button onClick={handleClick}>
          <NavLink to="/">Log out</NavLink>
        </button>
      )}
    </div>
  );
};
