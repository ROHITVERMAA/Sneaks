import { useReducer, useEffect } from "react";
import { CartContext } from "./cartContext";
import { cartReducer } from "./cartReducer";
import type { CartItem, Product } from "@lib/definitions";
import { toast } from "sonner";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_QUANTITY,
    CHECKOUT,
} from "./actions";

type CartProviderProps = {
    children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
    const storedCart = JSON.parse(
        localStorage.getItem("cart") || "[]"
    ) as CartItem[];

    const [state, dispatch] = useReducer(cartReducer, {
        cart: storedCart,
    });

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
        toast.success("Cart cleared");
    };

    const removeItemFromCart = (productId: number) => {
        dispatch({ type: REMOVE_FROM_CART, payload: { id: productId } });
        toast.success("Item removed from cart");
    };

    const checkout = () => {
        dispatch({ type: CHECKOUT });
        toast.success("Checkout successful");
    };

    const getItemInCart = (productId: number) => {
        return state.cart.find((item) => item.id === productId);
    };

    const getItemQuantity = (productId: number) => {
        const itemInCart = getItemInCart(productId);
        return itemInCart ? itemInCart.quantity : 1;
    };

    const updateQuantity = (productId: number, quantity: number) => {
        dispatch({
            type: UPDATE_QUANTITY,
            payload: { id: productId, quantity },
        });
        toast.success("Item quantity updated");
    };

    const addItemToCart = (product: Product, quantity: number) => {
        const itemInCart = getItemInCart(product.id);
        if (itemInCart) {
            updateQuantity(product.id, quantity);
        } else {
            const cartItem: CartItem = { ...product, quantity };
            dispatch({ type: ADD_TO_CART, payload: cartItem });
            toast.success("Item added to cart");
        }
    };

    const isItemInCart = (productId: number) => {
        return !!getItemInCart(productId);
    };

    const cartSubtotal = state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const shippingTotal = state.cart.length * 4;

    const cartTotal = cartSubtotal + shippingTotal;

    const totalItemsInCart = state.cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                clearCart,
                checkout,
                removeItemFromCart,
                updateQuantity,
                addItemToCart,
                getItemQuantity,
                isItemInCart,
                cartSubtotal,
                shippingTotal,
                cartTotal,
                totalItemsInCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
