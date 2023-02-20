// import { Link, Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const {signin} = useAuth();
 
  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit=(e: { preventDefault: () => void; target: any; })=>{
    e.preventDefault();
    const form = e.target;
    const user = form.username.value

    signin(user, ()=>navigate(fromPage))
    
  }
  
  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit}>
      <label >
        Name
        <input name="username" />
      </label>
      {/* <label >
        Password
        <input type="password" name="password" />
      </label> */}
      <button type="submit">Log In</button>
    </form>
    </div>
  );
}
