import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "@context/cartContext";
import { products } from "@lib/data";
import { QuantitySelector } from "@components";

const Product = () => {
    const { id } = useParams();
    const { addItemToCart, getItemQuantity, isItemInCart, removeItemFromCart } =
        useCartContext();

    const product = products.find((product) => product.id.toString() === id);
    const initialQuantity = product ? getItemQuantity(product.id) : 1;
    const [quantity, setQuantity] = useState(initialQuantity);

    if (!product) {
        return <div>Product not found</div>;
    }
    const { name, description, price, src } = product;

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        setQuantity(quantity - 1);
    };

    return (
        <div className='flex flex-col gap-6 md:flex-row md:gap-0'>
            <div className='grid place-items-center w-full h-64 bg-lightGray rounded-radius md:w-6/12 md:h-96 lg:w-7/12'>
                <img src={src} alt={name} className='w-[70%]' />
            </div>
            <div className='w-full md:w-6/12 md:pl-10 lg:w-5/12 lg:pl-14 xl:pl-28'>
                <h2 className='text-xl uppercase font-medium md:text-2xl'>
                    {name}
                </h2>
                <p className='py-2 leading-normal'>{description}</p>
                <p className='py-4 text-lg font-medium md:text-xl'>${price}</p>
                <QuantitySelector
                    quantity={quantity}
                    handleIncrease={handleIncrease}
                    handleDecrease={handleDecrease}
                />
                <div className='flex gap-6 items-center mt-4'>
                    <button
                        onClick={() => addItemToCart(product, quantity)}
                        className='border border-darkYellow text-darkYellow font-semibold text-sm uppercase py-2 px-4 rounded-md transition-ease hover:bg-darkYellow hover:text-white'
                    >
                        add to cart
                    </button>
                    {isItemInCart(product.id) && (
                        <button
                            onClick={() => removeItemFromCart(product.id)}
                            className='border border-red-700 text-red-700 py-2 px-4 rounded-md transition-ease hover:bg-red-700 hover:text-white text-sm font-semibold uppercase'
                        >
                            Delete from cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Product;
