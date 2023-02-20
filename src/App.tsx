import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NewsPage from "./pages/NewsPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LoginPage";
// import { RegisterForm } from "./components/RegisterForm";
// import {LoginForm} from './components/LoginForm'
import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProviser";

function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={
          <RequireAuth>
            <Profile/>
          </RequireAuth>
        } />
        <Route path="/login" element={<LoginPage />} />
          {/* <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route> */}
      </Route>
    </Routes>
    </AuthProvider>
  );
}

export default App;
