import closeIcon from "@icons/close.svg";

type ModalProps = {
    closeModal: () => void;
    clearCart: () => void;
};

const Modal = ({ closeModal, clearCart }: ModalProps) => {
    return (
        <div className='absolute top-0 left-0 z-50 flex justify-center items-center w-full h-full bg-[rgba(0,0,0,0.6)]'>
            <div className='flex flex-col bg-white px-6 pt-2 pb-6 rounded-md'>
                <button
                    onClick={closeModal}
                    className='self-end p-2 rounded-full shadow-md bg-lightYellow'
                >
                    <img src={closeIcon} alt='Close modal' />
                </button>
                <div className='flex flex-col items-center gap-4 pt-4'>
                    <p className='text-xl'>
                        Are you sure you want to clear your cart?
                    </p>
                    <div className='flex gap-6 items-center'>
                        <button
                            onClick={clearCart}
                            className='border border-black px-6 py-1 rounded-md transition-ease hover:bg-black hover:text-white'
                        >
                            Yes
                        </button>
                        <button
                            onClick={closeModal}
                            className='border border-red-700 px-6 py-1 rounded-md text-red-700 transition-ease hover:bg-red-700 hover:text-white'
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Modal;
