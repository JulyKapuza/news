// import{useContext} from 'react'
// import { AuthContext } from '../hoc/AuthProviser'

import { useEffect, useState } from "react";

// export function useAuth(){
//     console.log('useContext',useContext(AuthContext))
//     return useContext(AuthContext)
// }

// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from 'redux/auth/selectors';



export const useAuth = () => {
    const[login, setLogin] =useState(true);
    console.log(login)
    useEffect(() => {
        const storedUser = localStorage.getItem('username');
        if (storedUser) {
            setLogin(true)
        }
      }, []);
      console.log("login", login)
  return (
    {login}
    
    // ?<h1>Login</h1>:
    // <h2>no</h2>
  )
    
  
};
