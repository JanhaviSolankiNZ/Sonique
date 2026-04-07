import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";

const router = createBrowserRouter([
  {
    element: <Home/>,
    path: "/",
  },
  {
    element: <SigninPage/>,
    path: "signin"
  },
  {
    element: <SignupPage/>,
    path: "signup"
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
