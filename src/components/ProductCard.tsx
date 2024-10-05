import { Link } from "react-router-dom";
import { useCartContext } from "@context/cartContext";
import type { Product } from "@lib/definitions";
import iconCart from "@icons/cart-yellow.svg";
import iconTrash from "@icons/trash-red.svg";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const { isItemInCart, addItemToCart, removeItemFromCart } =
        useCartContext();
    const { id, name, price, src } = product;

    const handleCartAction = () => {
        isItemInCart(id) ? removeItemFromCart(id) : addItemToCart(product, 1);
    };

    return (
        <div className='flex flex-col p-4 bg-lightGray rounded-radius xl:p-6'>
            <button
                className='self-end p-2 rounded-full shadow-md bg-white'
                onClick={handleCartAction}
            >
                <img
                    src={isItemInCart(id) ? iconTrash : iconCart}
                    alt='add to cart'
                />
            </button>
            <Link to={`/products/${id}`} className='flex flex-col gap-4'>
                <div className='self-center'>
                    <img src={src} alt='' />
                </div>
                <div className='flex justify-between w-full font-medium'>
                    <h3 className='uppercase 2xl:text-lg'>{name}</h3>
                    <p>${price}</p>
                </div>
            </Link>
        </div>
    );
};
export default ProductCard;
