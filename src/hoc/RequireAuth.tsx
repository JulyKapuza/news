import { useLocation, Navigate } from "react-router-dom";




const RequireAuth = ({ children }: any) => {
  const location = useLocation();

const getAuthUser =(keyValue:string)=> {
        const user = localStorage.getItem(keyValue);
        return user !== null ? JSON.parse(user) : {};
    };
  const user=  getAuthUser("LOGIN"); 

  if (Object.keys(user).length === 0) {
    
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export { RequireAuth };
