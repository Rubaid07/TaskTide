import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import PrivateRoute from "../provider/PrivateRoute";
import Browse from "../pages/Browse";
import TaskDetails from "../pages/TaskDetails";
import DashboardOverView from "../pages/Dashboard/DashboardOverView";
import DashboardLayout from "../layouts/DashboardLayout";
import MyTasks from "../pages/Dashboard/MyTask";
import AddTask from "../pages/Dashboard/AddTask";
import UpdateTask from "../pages/Dashboard/UpdateTask";
import Profile from "../pages/Dashboard/Profile";
import UpdateProfile from "../pages/Dashboard/UpdateProfile";
import AboutPage from "../pages/About";
import SupportPage from "../pages/Support";
import TermsOfService from "../component/TermsOfService";
import PrivacyPolicy from "../component/PrivacyPolicy";
import CookiePolicy from "../component/CookiePolicy";

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
        path: '/about',
        element: <AboutPage></AboutPage>
      },
      {
        path: '/support',
        element: <SupportPage></SupportPage>
      },
      {
        path: '/terms',
        element: <TermsOfService></TermsOfService>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: '/cookie',
        element: <CookiePolicy></CookiePolicy>
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
  {
    path: '/',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'dashboard',
        Component: DashboardOverView
      },
      {
        path: 'my-tasks',
        Component: MyTasks
      },
      {
        path: 'add-task',
        Component: AddTask
      },
      {
        path: '/update-task/:id',
        Component: UpdateTask
      },
      {
        path: 'profile',
        Component: Profile
      },
      {
        path: 'update-profile',
        Component: UpdateProfile
      }
    ]
  }
]);