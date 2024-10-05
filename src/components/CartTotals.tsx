import { useLocation, useNavigate } from "react-router-dom";
import { useCartContext } from "@context/cartContext";
import { formatPrice } from "@lib/utils";
import BtnYellow from "./BtnYellow";

const CartTotals = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { cartSubtotal, cartTotal, shippingTotal } = useCartContext();

    const subTotal = formatPrice(cartSubtotal);
    const shipping = formatPrice(shippingTotal);
    const total = formatPrice(cartTotal);

    return (
        <div className='flex flex-col gap-6 w-full h-max p-6 rounded-radius bg-lightGray lg:w-5/12 xl:w-4/12'>
            <h2 className='text-xl font-semibold 2xl:text-2xl'>Summary</h2>
            <div className='text-lg 2xl:text-xl'>
                <div className='flex justify-between items-center w-full'>
                    <p>Subtotal</p>
                    <p>${subTotal}</p>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <p>Estimated Shipping</p>
                    <p>${shipping}</p>
                </div>
                <div className='flex justify-between items-center w-full'>
                    <p>Estimated Tax</p>
                    <p>-</p>
                </div>
            </div>
            {pathname === "/checkout" && (
                <div className='w-full h-[1px] bg-black'></div>
            )}
            <div className='flex justify-between items-center w-full text-lg 2xl:text-xl'>
                <p>Total</p>
                <p className='font-semibold'>${total}</p>
            </div>
            {pathname === "/cart" && (
                <BtnYellow
                    type='button'
                    style='uppercase py-3'
                    onClick={() => navigate("/checkout")}
                >
                    checkout
                </BtnYellow>
            )}
        </div>
    );
};
export default CartTotals;
