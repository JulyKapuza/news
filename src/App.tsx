import { Routes, Route } from "react-router-dom";
import {ReactQueryDevtools} from 'react-query/devtools'
import {QueryClient, QueryClientProvider} from 'react-query'
import Layout from "./components/Layout";
import NewsPage from "./pages/NewsPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LoginPage from "./pages/LoginPage";
import { RequireAuth } from "./hoc/RequireAuth";

const queryClient = new QueryClient()

function App() {
  return (
    //краще тут чи index
    <QueryClientProvider client={queryClient}>
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/> 
    </QueryClientProvider>
  );
}

export default App;
