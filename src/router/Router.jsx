import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddTouristSpot from "../pages/AddTouristSpot";
import PrivetRoute from "./PrivetRoute";
import AllTouristsSports from "../pages/AllTouristSpots";
import MyList from "../pages/MyList";
import UpdateSpot from "../pages/UpdateSpot";
import Details from "../pages/Details";
import CountryBaseSpot from "../pages/CountryBaseSpot";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
          loader: ()=> fetch('https://server-10-theta.vercel.app/tourist-spots')
        },
        {
          path:"/all-tourist-spots",
          element:<AllTouristsSports></AllTouristsSports>,
          loader: ()=> fetch('https://server-10-theta.vercel.app/tourist-spots')
        },
        {
          path:"/update-spot/:id",
          element:<PrivetRoute><UpdateSpot></UpdateSpot></PrivetRoute>,
          loader: ({params})=> fetch(`https://server-10-theta.vercel.app/single-spot/${params.id}`)
        },
        {
          path:"/my-list",
          element:<PrivetRoute><MyList></MyList></PrivetRoute>
        },
        {
          path:"/details/:id",
          element:<PrivetRoute><Details></Details></PrivetRoute>,
          loader: ({params})=> fetch(`https://server-10-theta.vercel.app/single-spot/${params.id}`),
        },
        {
          path:"/countryBaseSpot/:country",
          element:<PrivetRoute><CountryBaseSpot></CountryBaseSpot></PrivetRoute>,
          loader: ({params})=> fetch(`https://server-10-theta.vercel.app/countryBasespots/${params.country}`),
        },
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