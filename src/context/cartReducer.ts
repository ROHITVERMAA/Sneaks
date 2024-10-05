import type { CartItem } from "@lib/definitions";
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_QUANTITY,
    CHECKOUT,
} from "./actions";

type AddToCartAction = {
    type: typeof ADD_TO_CART;
    payload: CartItem;
};

type RemoveFromCartAction = {
    type: typeof REMOVE_FROM_CART;
    payload: { id: number };
};

type ClearCartAction = {
    type: typeof CLEAR_CART;
};

type UpdateQuantityAction = {
    type: typeof UPDATE_QUANTITY;
    payload: { id: number; quantity: number };
};

type CheckoutAction = {
    type: typeof CHECKOUT;
};

type ActionType =
    | AddToCartAction
    | RemoveFromCartAction
    | ClearCartAction
    | UpdateQuantityAction
    | CheckoutAction;

type CartStateType = {
    cart: CartItem[];
};

const initialState: CartStateType = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};

export const cartReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case CLEAR_CART:
            return { ...state, cart: [] };
        case UPDATE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, quantity: action.payload.quantity };
                    }
                    return item;
                }),
            };
        case CHECKOUT:
            return { ...state, cart: [] };
        default:
            throw new Error("Invalid action type");
    }
};
