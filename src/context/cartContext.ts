import { createContext, useContext } from "react";
import type { CartItem, Product } from "@lib/definitions";

type ContextType = {
    cart: CartItem[];
    clearCart: () => void;
    checkout: () => void;
    removeItemFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    addItemToCart: (product: Product, quantity: number) => void;
    getItemQuantity: (productId: number) => number;
    isItemInCart: (productId: number) => boolean;
    cartSubtotal: number;
    shippingTotal: number;
    cartTotal: number;
    totalItemsInCart: number;
};

type CartContextType = ContextType | null;

export const CartContext = createContext<CartContextType>(null);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
};
