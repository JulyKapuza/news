// import { Navigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth'

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//     const { login} = useAuth();
//     const shouldRedirect = !login
//     return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
//   };


import React from 'react';
import { Navigate} from 'react-router-dom';
// import { useAuth } from 'path/to/auth/context';

interface PrivateRouteProps {
  component: any;
  redirectTo?: any;
//   login: true| false
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, redirectTo = '/' }) => {
  const {login} = useAuth();
  const shouldRedirect = !login;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};