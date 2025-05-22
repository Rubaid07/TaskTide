import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import MyTask from "../pages/MyTask";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import PrivateRoute from "../provider/PrivateRoute";
import Browse from "../pages/Browse";
import TaskDetails from "../pages/TaskDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: MainLayouts,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/browse-task',
        element: <Browse></Browse>
      },
      {
        path: '/add-task',
        element: <PrivateRoute>
          <AddTask></AddTask>
        </PrivateRoute>
      },
      {
        path: '/my-task',
        element: <PrivateRoute>
          <MyTask></MyTask>
        </PrivateRoute>
      },
      {
        path: '/task/:id',
        element: <PrivateRoute>
          <TaskDetails></TaskDetails>
        </PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);