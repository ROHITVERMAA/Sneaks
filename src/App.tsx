import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Layout,
    Home,
    About,
    Products,
    Product,
    Contact,
    Cart,
    Checkout,
    NotFound,
    Error,
} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "about",
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "products",
                element: <Products />,
                errorElement: <Error />,
            },
            {
                path: "products/:id",
                element: <Product />,
                errorElement: <Error />,
            },
            {
                path: "contact",
                element: <Contact />,
                errorElement: <Error />,
            },
            {
                path: "cart",
                element: <Cart />,
                errorElement: <Error />,
            },
            {
                path: "checkout",
                element: <Checkout />,
                errorElement: <Error />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
