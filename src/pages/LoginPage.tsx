
import { LoginForm } from "../components/LoginForm/LoginForm";
const LoginPage = () => {
  
    return (
      <div>
        
        <LoginForm/>
        
      </div>
    );}

export default LoginPage;

// import React, { useState, useEffect } from 'react';

// type AuthState = {
//   isAuthenticated: boolean;
//   username: string;
//   password: string;
// };

// const LoginPage: React.FC = () => {
//   const [authState, setAuthState] = useState<AuthState>({
//     isAuthenticated: false,
//     username: '',
//     password: '',
//   });

//   useEffect(() => {
//     const auth = JSON.parse(localStorage.getItem('authState') || '{}');
//     setAuthState(auth);
//   }, []);

//   const handleLogin = () => {
//     // Перевірка логіну та пароля
//     const username = 'admin';
//     const password = '12345';

//     if (authState.username === username && authState.password === password) {
//       const auth = {
//         isAuthenticated: true,
//         username,
//         password,
//       };
//       localStorage.setItem('authState', JSON.stringify(auth));
//       setAuthState(auth);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('authState');
//     setAuthState({ isAuthenticated: false, username: '', password: '' });
//   };

//   return authState.isAuthenticated ? (
//     <div>
//       <p>Вітаємо, {authState.username}!</p>
//       <button onClick={handleLogout}>Вийти</button>
//     </div>
//   ) : (
//     <div>
//       <input
//         type="text"
//         placeholder="Ім'я користувача"
//         value={authState.username}
//         onChange={(e) =>
//           setAuthState((prevState) => ({ ...prevState, username: e.target.value }))
//         }
//       />
//       <input
//         type="password"
//         placeholder="Пароль"
//         value={authState.password}
//         onChange={(e) =>
//           setAuthState((prevState) => ({ ...prevState, password: e.target.value }))
//         }
//       />
//       <button onClick={handleLogin}>Увійти</button>
//     </div>
//   );
// };

// export default LoginPage;



// import { useLocation, useNavigate } from "react-router-dom";
// // import React, { useState, useEffect } from "react";
// import { useAuth } from "../hook/useAuth";


// export default function LoginPage(){
  
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { login} = useAuth()
//   const fromPage = location.state?.from?.pathname || '/';

//   const handleSubmit=(e: { preventDefault: () => void; target: any; })=>{
//         e.preventDefault();
//         const form = e.target;
//         const username = form.username.value
//         const password = form.password.value
        
//         if(username === "admin" &&  password ==='12345'){
//           const user ={
//             name: 'admin',
//             password: '12345',
//           }

//           login(user, ()=>navigate(fromPage))
//         }
//       }

//    return (
//           <div>
//             <h1>LoginPage</h1>
//             <form onSubmit={handleSubmit}>
//             <label >
//               UserName
//               <input name="username" type="text"/>
//             </label>
//             <label >
//               Password
//               <input type="password" name="password" />
//             </label>
//             <button type="submit">Log In</button>
//           </form>
//           </div>
//         );
   

  
// }

// import React, { useState, useEffect } from "react";
// import Profile from "./Profile";
// import { useLocation, useNavigate } from "react-router-dom";
// type AuthState = {
//   isAuthenticated: boolean;
//   username: string;
// };

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [authState, setAuthState] = useState<AuthState>({
//     isAuthenticated: false,
//     username: "",
//   });
//   const navigate = useNavigate();
//   const location = useLocation();

//   const fromPage = location.state?.from?.pathname || '/profile';

//   useEffect(() => {
//     const storedAuthState = localStorage.getItem("authState");
//     if (storedAuthState) {
//       setAuthState(JSON.parse(storedAuthState));
//     }
//   }, []);

//   const handleLogin = () => {
//     if (username === "admin" && password === "12345") {
//       const newAuthState: AuthState = { isAuthenticated: true, username };
//       setAuthState(newAuthState);
//       localStorage.setItem("authState", JSON.stringify(newAuthState));
//       navigate(fromPage)
//     }
//   };

//   // const handleLogout = ():void => {
//   //   setAuthState({ isAuthenticated: false, username: "" });
//   //   localStorage.removeItem("authState");
//   // };

//   return (
//     <div>
//       {authState.isAuthenticated ? <Profile/>
//       // (
//       //   <div>
//       //     <p>Logged in as {authState.username}</p>
//       //     <button onClick={handleLogout}>Logout</button>
//       //   </div> )
//          : (
//         <div>
//           <input
//             type="text"
//             value={username}
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <br />
//           <input
//             type="password"
//             value={password}
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <br />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;




// import { useContext } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { UserContext } from "../hoc/AuthProviser";
// // import UserContext from '../hoc/AuthProviser'
// import Profile from "./Profile";

// export default function LoginPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { user } = useContext(UserContext);
//   console.log(user)

//   const fromPage = location.state?.from?.pathname || '/profile';
//   const currentUser = localStorage.getItem('userName')
//   const currentPassword = localStorage.getItem('password')

//  console.log(fromPage)
 
// //  const handleSubmit=(e: { preventDefault: () => void; target: any; })=>{
// //     e.preventDefault();
// //     const form = e.target;
// //     const username = form.username.value
// //     const password = form.password.value

// //     if(username === "admin" &&  password ==='12345'){
// //       localStorage.setItem('userName', 'admin' )
// //       localStorage.setItem('password', '12345' )
// //       localStorage.setItem('isLogin', "true" )
// //     }
// //   }
 
//   const handleSubmit = (e: { target: any; }) => {
//     const form = e.target;
//     const username = form.username.value
//     const password = form.password.value

//     if (username === "admin" && password === "12345") {
//       localStorage.setItem('userName', 'admin' )
//       localStorage.setItem('password', '12345' )
//       // const newAuthState: AuthState = { isAuthenticated: true, username };
//       // setAuthState(newAuthState);
//       // localStorage.setItem("authState", JSON.stringify(newAuthState));
//     }
//     navigate(fromPage)
//   };
  
//   return (
//     currentUser && currentPassword ? <Profile/> :
//     <div>
//       <h1>LoginPage</h1>
//       <form onSubmit={handleSubmit}>
//       <label >
//         UserName
//         <input name="username" type="text"/>
//       </label>
//       <label >
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//     </div>
//   );
// }
