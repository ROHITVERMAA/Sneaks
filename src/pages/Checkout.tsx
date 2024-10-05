import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "@context/cartContext";
import { FormInput, FormError, BtnYellow, CartTotals } from "@components";
import { validateCheckoutForm } from "@lib/validation";
import paypalIcon from "@icons/paypal.svg";
import mastercardIcon from "@icons/mastercard.svg";
import visaIcon from "@icons/visa.svg";

type FormErrors = {
    fullName?: string;
    phone?: string;
    address?: string;
    landmark?: string;
    postalCode?: string;
    country?: string;
    state?: string;
    payment?: string;
};

const Checkout = () => {
    const [errors, setErrors] = useState<FormErrors>({});
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const { checkout } = useCartContext();
    const navigate = useNavigate();

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        const { name } = e.currentTarget;
        setErrors({ ...errors, [name]: "" });
    };

    const handlePayment = (e: FormEvent<HTMLInputElement>) => {
        setPaymentMethod(e.currentTarget.value);
        setErrors({ ...errors, payment: "" });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { formErrors, isValid } = validateCheckoutForm(formData);
        setErrors(formErrors);

        if (!isValid) return;
        checkout();
        e.currentTarget.reset();
        navigate("/");
    };

    return (
        <div className='relative flex flex-col gap-10 pb-16 lg:pb-0'>
            <h2 className='text-3xl font-bold'>Check Out</h2>
            <div className='flex flex-col justify-between w-full lg:flex-row '>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-8 w-full lg:w-6/12 xl:w-7/12'
                >
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-medium'>Personal information</h3>
                        <div className='flex flex-col justify-between items-center gap-4 md:flex-row md:gap-0'>
                            <div className='w-full md:w-[48%] xl:w-[60%]'>
                                <FormInput
                                    name='fullName'
                                    type='text'
                                    placeholder='Enter Full Name'
                                    style={`w-full py-2 px-3 placeholder:text-black placeholder:text-sm ${
                                        errors.fullName
                                            ? "border-red-700 focus:outline-red-700"
                                            : "border-lightGray"
                                    }`}
                                    onInput={handleInput}
                                />
                                {errors.fullName && (
                                    <FormError>{errors.fullName}</FormError>
                                )}
                            </div>
                            <div className='w-full md:w-[48%] xl:w-[38%]'>
                                <FormInput
                                    name='phone'
                                    type='tel'
                                    placeholder='Phone No'
                                    style={`w-full py-2 px-3 placeholder:text-black placeholder:text-sm ${
                                        errors.phone
                                            ? "border-red-700 focus:outline-red-700"
                                            : "border-lightGray"
                                    }`}
                                    onInput={handleInput}
                                />
                                {errors.phone && (
                                    <FormError>{errors.phone}</FormError>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-medium'>Address</h3>
                        <div className='flex flex-col justify-between items-center gap-4 pb-2 md:flex-row md:gap-0'>
                            <div className='w-full md:w-[48%] xl:w-[60%]'>
                                <FormInput
                                    name='address'
                                    type='text'
                                    placeholder='Enter Address'
                                    style={`w-full py-2 px-3 placeholder:text-black placeholder:text-sm ${
                                        errors.address
                                            ? "border-red-700 focus:outline-red-700"
                                            : "border-lightGray"
                                    }`}
                                    onInput={handleInput}
                                />
                                {errors.address && (
                                    <FormError>{errors.address}</FormError>
                                )}
                            </div>
                            <div className='w-full md:w-[48%] xl:w-[38%]'>
                                <FormInput
                                    name='landmark'
                                    type='text'
                                    placeholder='Landmark (Optional)'
                                    style={`w-full py-2 px-3 placeholder:text-black placeholder:text-sm ${
                                        errors.landmark
                                            ? "border-red-700 focus:outline-red-700"
                                            : "border-lightGray"
                                    }`}
                                    onInput={handleInput}
                                />
                                {errors.landmark && (
                                    <FormError>{errors.landmark}</FormError>
                                )}
                            </div>
                        </div>
                        <div className='grid gap-4 md:grid-cols-3'>
                            <div>
                                <FormInput
                                    name='country'
                                    type='text'
                                    placeholder='Country'
                                    style={`w-full py-2 px-3 placeholder:text-black placeholder:text-sm ${
                                        errors.country
                                            ? "border-red-700 focus:outline-red-700"
                                            : "border-lightGray"
                                    }`}
                                    onInput={handleInput}
                                />
                                {errors.country && (
                                    <FormError>{errors.country}</FormError>
                                )}
                            </div>
                            <div>
                                <FormInput
                                    name='state'
                                    type='text'
                                    placeholder='State'
                                    style={`w-full py-2 px-3 placeholder:text-black placeholder:text-sm ${
                                        errors.state
                                            ? "border-red-700 focus:outline-red-700"
                                            : "border-lightGray"
                                    }`}
                                    onInput={handleInput}
                                />
                                {errors.state && (
                                    <FormError>{errors.state}</FormError>
                                )}
                            </div>
                            <div>
                                <FormInput
                                    name='postalCode'
                                    type='text'
                                    placeholder='Postal Code'
                                    style={`w-full py-2 px-3 placeholder:text-black placeholder:text-sm ${
                                        errors.postalCode
                                            ? "border-red-700 focus:outline-red-700"
                                            : "border-lightGray"
                                    }`}
                                    onInput={handleInput}
                                />
                                {errors.postalCode && (
                                    <FormError>{errors.postalCode}</FormError>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-medium'>Payment</h3>
                        <div className='flex flex-col gap-4'>
                            <label
                                htmlFor='paypal'
                                className='flex items-center gap-3'
                            >
                                <input
                                    type='checkbox'
                                    id='paypal'
                                    name='payment'
                                    value='Paypal'
                                    checked={paymentMethod === "Paypal"}
                                    onChange={handlePayment}
                                    className='w-4 h-4 accent-black cursor-pointer'
                                />
                                <div className='flex justify-between items-center w-full'>
                                    <span>Paypal</span>
                                    <img
                                        src={paypalIcon}
                                        alt='paypal'
                                        className='w-12'
                                    />
                                </div>
                            </label>
                            <div className='w-full h-[1px] bg-lightGray'></div>
                            <label
                                htmlFor='card'
                                className='flex items-center gap-3'
                            >
                                <input
                                    type='checkbox'
                                    id='card'
                                    name='payment'
                                    value='Card'
                                    checked={paymentMethod === "Card"}
                                    onChange={handlePayment}
                                    className='w-4 h-4 accent-black cursor-pointer'
                                />
                                <div className='flex justify-between items-center w-full'>
                                    <span>Credit or Debit Card</span>
                                    <div className='flex items-center gap-3'>
                                        <img
                                            src={visaIcon}
                                            alt='visa'
                                            className='w-12'
                                        />
                                        <img
                                            src={mastercardIcon}
                                            alt='mastercard'
                                            className='w-12'
                                        />
                                    </div>
                                </div>
                            </label>
                            <div className='w-full h-[1px] bg-lightGray'></div>
                        </div>
                        {errors.payment && (
                            <FormError>{errors.payment}</FormError>
                        )}
                    </div>
                    <BtnYellow
                        type='submit'
                        style='absolute bottom-0 uppercase w-full py-3 font-bold lg:static lg:w-[60%]'
                    >
                        Pay now
                    </BtnYellow>
                </form>
                <CartTotals />
            </div>
        </div>
    );
};
export default Checkout;
