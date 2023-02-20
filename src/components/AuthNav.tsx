import { NavLink } from 'react-router-dom';



export const AuthNav = () => {
  return (
    <div>
      <NavLink  to="/profile">
        Profile
      </NavLink>
      <button>
      <NavLink  to="/login">
        Log In
      </NavLink>
      </button>
    </div>
  );
};