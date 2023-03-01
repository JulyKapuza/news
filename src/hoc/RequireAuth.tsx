import {PropsWithChildren } from 'react'
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
import { selectIsAuth } from "../redux/auth/selectors";

export const RequireAuth = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return  <>{children}</>;
};


