import React, { useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import ContactPage from "./pages/contact";
import BookPage from "./pages/book";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./pages/register";
import { callFetchAccount } from "./services/api";
import { useDispatch } from "react-redux";
import { doGetAccountAction } from "./redux/account/accountSlice";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default function App() {
  const dispatch = useDispatch();
  const getAcccount = async () => {
    const res = await callFetchAccount();
    console.log("check res", res);
    if (res && res.data) {
      dispatch(doGetAccountAction(res.data));
    }
  };
  useEffect(() => {
    getAcccount();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>404 not found</div>,

      children: [
        { index: true, element: <Home /> },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "book",
          element: <BookPage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
