//Create H!, H2 tag with react
import React from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import ReactDOM from "react-dom/client";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu"

const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
}



export default AppLayout;
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantMenu />
            }
        ]
    },
    
    
]);

  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


    // Create H1 tag with JS
/*const section = document.getElementById("section");

const heading = document.createElement('h1');
heading.innerHTML = "Hello world from js";
const root = document.getElementById("root").appendChild(heading);*/
