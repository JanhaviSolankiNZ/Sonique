import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    element: <Dashboard/>,
    path: "/dashboard",
  },
  {
    element: <LandingPage/>,
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
