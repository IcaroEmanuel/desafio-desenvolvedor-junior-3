import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedLayout from "./components/ProtectedLayout";
import LoginPage from "./pages/Login";
import Posts from "./pages/Posts";
import RegisterPage from "./pages/Register";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import EditPost from "./pages/EditPost";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
          <Route
            path="/create-post"
            element={
              <ProtectedLayout>
                <CreatePost />
              </ProtectedLayout>
            }
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/posts/:id"
            element={
              <ProtectedLayout>
                <PostDetails />
              </ProtectedLayout>
            }
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/edit-post/:id"
            element={
              <ProtectedLayout>
                <EditPost />
              </ProtectedLayout>
            }
          ></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
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
