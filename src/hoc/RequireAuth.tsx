import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/selectors";


const RequireAuth = ({ children }: any) => {
  const location = useLocation();
  const isAuth = useSelector(selectIsAuth);
  
// const getAuthUser =(keyValue:string)=> {
//         const user = localStorage.getItem(keyValue);
//         return user !== null ? JSON.parse(user) : {};
//     };
//   const user=  getAuthUser("LOGIN"); 

  if (!isAuth) {
    
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // if (Object.keys(user).length === 0) {
    
  //   return <Navigate to="/login" state={{ from: location }} />;
  // }
  return children;
};

export { RequireAuth };
