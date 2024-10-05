import { useCartContext } from "@context/cartContext";
import { CartItemsList, CartTotals } from "@components";

const Cart = () => {
    const { cart } = useCartContext();

    if (cart.length === 0) {
        return (
            <h2 className='text-2xl font-medium border-b border-b-black pb-6'>
                Your cart is empty
            </h2>
        );
    }

    return (
        <div className='flex flex-col justify-between gap-10 lg:flex-row lg:gap-0'>
            <CartItemsList cart={cart} />
            <CartTotals />
        </div>
    );
};
export default Cart;
