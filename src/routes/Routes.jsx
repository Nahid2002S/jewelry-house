import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Banner from "../pages/home/banner/Banner";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import AddJewelry from "../pages/addJewelry/AddJewelry";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element: <Banner></Banner>
        },
        {
            path: 'register',
            element: <Registration></Registration>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'add-jewelry',
          element: <AddJewelry></AddJewelry>
        }
      ]
    },
  ]);

export default router;