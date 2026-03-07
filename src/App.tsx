
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Produto from "./../src/components/produto/product";
import Cart from "./pages/cart";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
       {
         path: "/cart",
         element: <Cart/>,
       },
      {
        path: "/produto",
        element: <Produto />,
      },
      {
        path: "/produto/:id",
        element: <Produto />,
      },
    ],
  },
]) 

 export { router } 