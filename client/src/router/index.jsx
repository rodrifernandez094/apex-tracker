import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFound error={{ message: "Not Found" }} />,
  },
  {
    path: "/profile/:query",
    element: <Profile />,
  },
]);
