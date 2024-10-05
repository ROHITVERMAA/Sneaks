import { useState } from "react";
import { useCartContext } from "@context/cartContext";
import type { CartItem } from "@lib/definitions";
import iconTrash from "@icons/trash.svg";
import QuantitySelector from "./QuantitySelector";

type CartItemProps = {
    item: CartItem;
};

const CartItem = ({ item }: CartItemProps) => {
    const { id, price, quantity, name, src } = item;
    const [productQuantity, setProductQuantity] = useState(quantity);
    const { updateQuantity, removeItemFromCart } = useCartContext();

    const handleIncrease = () => {
        const newQuantity = productQuantity + 1;
        setProductQuantity(newQuantity);
        updateQuantity(id, newQuantity);
    };

    const handleDecrease = () => {
        const newQuantity = productQuantity - 1;
        setProductQuantity(newQuantity);
        updateQuantity(id, newQuantity);
    };

    return (
        <div className='flex gap-8 w-full max-h-32 p-4 bg-lightGray rounded-radius lg:gap-12 2xl:p-6'>
            <div className='grid place-content-center w-32 h-20'>
                <img src={src} alt={name} className='' />
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col justify-between h-full'>
                    <h4 className='uppercase font-medium 2xl:text-xl'>
                        {name}
                    </h4>
                    <QuantitySelector
                        quantity={productQuantity}
                        handleIncrease={handleIncrease}
                        handleDecrease={handleDecrease}
                    />
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <p className='font-medium 2xl:text-xl'>${price}</p>
                    <button onClick={() => removeItemFromCart(id)}>
                        <img src={iconTrash} alt='remove from cart' />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
