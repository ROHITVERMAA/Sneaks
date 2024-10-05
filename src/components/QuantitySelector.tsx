import iconMinus from "@icons/minus.svg";
import iconPlus from "@icons/plus.svg";

type QuantitySelectorProps = {
    quantity: number;
    handleIncrease: () => void;
    handleDecrease: () => void;
};

const QuantitySelector = ({
    quantity,
    handleIncrease,
    handleDecrease,
}: QuantitySelectorProps) => {
    return (
        <div className='flex items-center gap-2'>
            <button onClick={handleDecrease}>
                <img src={iconMinus} alt='reduce quantity' />
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>
                <img src={iconPlus} alt='increase quantity' />
            </button>
        </div>
    );
};
export default QuantitySelector;
