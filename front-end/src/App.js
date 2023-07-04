import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedLayout from "./components/ProtectedLayout";
import LoginPage from "./pages/Login";
import Posts from "./pages/Posts";
import RegisterPage from "./pages/Register";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        </Routes>
        <Routes>
          <Route
            path="/posts"
            element={
              <ProtectedLayout>
                <Posts />
              </ProtectedLayout>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
