import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { NewsPage } from "./pages/NewsPage";
import { Home } from "./pages/Home";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { RequireAuth } from "./hoc/RequireAuth";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
