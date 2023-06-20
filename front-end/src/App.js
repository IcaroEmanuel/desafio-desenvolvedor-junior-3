import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedLayout from "./components/ProtectedLayout";
import LoginPage from "./pages/Login";

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
                <h2>Posts</h2>
              </ProtectedLayout>
            }
          ></Route>
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
