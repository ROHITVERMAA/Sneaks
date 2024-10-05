import { useState, FormEvent } from "react";
import { FormInput, FormError, BtnYellow } from "@components";
import { toast } from "sonner";

type FormErrors = {
    name?: string;
    email?: string;
    message?: string;
};

const Contact = () => {
    const [errors, setErrors] = useState<FormErrors>({});

    const handleInput = (
        e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
    ) => {
        const { name } = e.currentTarget;
        setErrors({ ...errors, [name]: "" });
    };

    const getFormData = (formData: FormData) => {
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        return { name, email, message };
    };

    const validateForm = (formData: FormData) => {
        const formErrors: FormErrors = {};
        const emailRegex = /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const { name, email, message } = getFormData(formData);

        if (!name) {
            formErrors.name = "Name is required";
        }

        if (!email) {
            formErrors.email = "Email is required";
        }

        if (!message) {
            formErrors.message = "Message is required";
        }

        if (name && name.length < 3) {
            formErrors.name = "Name must be at least 3 characters long";
        }

        if (email && !email.match(emailRegex)) {
            formErrors.email = "Email is invalid";
        }

        setErrors(formErrors);

        const errorLength = Object.keys(formErrors).length;
        return errorLength === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (!validateForm(formData)) return;
        toast.success("Message sent successfully");
        e.currentTarget.reset();
    };

    return (
        <form
            onSubmit={handleSubmit}
            noValidate
            className='relative flex flex-col justify-center gap-6 w-full pt-10 pb-20 md:pt-0 md:pb-0 md:flex-row md:gap-16'
        >
            <div className='flex flex-col gap-6 md:gap-8'>
                <div>
                    <FormInput
                        type='text'
                        name='name'
                        placeholder='Your Name*'
                        style={`w-full py-3 px-6 placeholder:text-black placeholder:text-sm md:w-80 lg:w-96 ${
                            errors.name
                                ? "border-red-700 focus:outline-red-700"
                                : "border-lightGray"
                        }`}
                        onInput={handleInput}
                    />
                    {errors.name && <FormError>{errors.name}</FormError>}
                </div>
                <div>
                    <FormInput
                        type='email'
                        name='email'
                        placeholder='Your Email*'
                        style={`w-full py-3 px-6 placeholder:text-black placeholder:text-sm md:w-80 lg:w-96 ${
                            errors.email
                                ? "border-red-700 focus:outline-red-700"
                                : "border-lightGray"
                        }`}
                        onInput={handleInput}
                    />
                    {errors.email && <FormError>{errors.email}</FormError>}
                </div>
                <BtnYellow
                    type='submit'
                    style='absolute bottom-0 w-full py-3 px-4 capitalize text-sm md:w-max md:static'
                >
                    send message
                </BtnYellow>
            </div>
            <div>
                <label htmlFor='message' className='sr-only'>
                    Message
                </label>
                <textarea
                    name='message'
                    id='message'
                    placeholder='Your Message*'
                    className={`w-full h-[200px] p-4 border rounded-radius focus:outline-0 bg-lightGray resize-none placeholder:text-sm placeholder:text-black md:h-full md:w-[300px] lg:w-[435px]  ${
                        errors.message
                            ? "border-red-700 focus:outline-red-700"
                            : "border-lightGray"
                    }`}
                    onInput={handleInput}
                ></textarea>
                {errors.message && <FormError>{errors.message}</FormError>}
            </div>
        </form>
    );
};
export default Contact;
