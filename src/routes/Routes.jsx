import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Banner from "../pages/home/banner/Banner";
import Registration from "../pages/registration/Registration";
import Login from "../pages/login/Login";
import AddJewelry from "../pages/addJewelry/AddJewelry";
import AllJewelry from "../pages/all-jewelry/AllJewelry";
import MyJewelry from "../pages/myJewelry/MyJewelry";
import DashboardLayout from "../layout/dashboardLayout";
import DashboardHome from "../pages/dashboard/dashboardHome/DashboardHome";
  
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
        },
        {
          path: 'all-jewelry',
          element: <AllJewelry></AllJewelry>
        },
        {
          path: 'my-jewelry',
          element: <MyJewelry></MyJewelry>
        }
      ]
    },

    {
      path: 'dashboard',
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: 'dashboard-home',
          element: <DashboardHome></DashboardHome>
        },
        {
          path: 'add-jewelry',
          element: <AddJewelry></AddJewelry>
        },
        {
          path: 'my-jewelry',
          element: <MyJewelry></MyJewelry>
        }
      ]
    }
  ]);

export default router;