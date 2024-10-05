import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "normalize.css";
import "./index.css";
import { Toaster } from "sonner";
import { CartProvider } from "@context/cartProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Toaster
            position='top-right'
            expand={false}
            richColors
            duration={2000}
        />
        <CartProvider>
            <App />
        </CartProvider>
    </React.StrictMode>
);
