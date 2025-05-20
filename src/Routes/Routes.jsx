import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Browse from "../pages/Browse";
import AddTask from "../pages/AddTask";
import MyTask from "../pages/MyTask";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/browse-task',
        Component: Browse
      },
      {
        path: '/add-task',
        Component: AddTask
      },
      {
        path: '/my-task',
        Component: MyTask
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
]);