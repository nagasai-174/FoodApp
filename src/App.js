import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter , Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error"
const AppLayout = () => {
  return (
    <div>
      <Header />
     <Outlet/>
      <h1>Footer</h1>
    </div>
  );
};
const appRoute = createBrowserRouter([
  {
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>
    },
    {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<ContactUs/>
  },
],
  errorElement:<Error/>
},

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
