import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
        {
            index: true,
            // Component: 
        }
    ]
  },
]);