import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTouristSpot from "../pages/AddTouristSpot";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch('http://localhost:5000/tourist-spots')
        },
        // {
        //   path:"/:id",
        //   element:<PrivetRoute><Details></Details></PrivetRoute>,
        //   loader: ()=> fetch('/fakeData.json'),
        // },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>,
        },

        {
          path:"/add-tourists-spot",
          element:<PrivetRoute><AddTouristSpot></AddTouristSpot></PrivetRoute>
        },
        
      ]
    },
  ])

  export default router;