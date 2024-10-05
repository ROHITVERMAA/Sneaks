export type CheckoutFormErrors = {
    fullName?: string;
    phone?: string;
    address?: string;
    landmark?: string;
    postalCode?: string;
    country?: string;
    state?: string;
    payment?: string;
};
export const getCheckoutFormData = (formData: FormData) => {
    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;
    const landmark = formData.get("landmark") as string;
    const postalCode = formData.get("postalCode") as string;
    const country = formData.get("country") as string;
    const state = formData.get("state") as string;
    const payment = formData.get("payment") as string;

    return {
        fullName,
        phone,
        address,
        landmark,
        postalCode,
        country,
        state,
        payment,
    };
};

export const validateCheckoutForm = (formData: FormData) => {
    const formErrors: CheckoutFormErrors = {};
    const {
        fullName,
        phone,
        address,
        landmark,
        postalCode,
        country,
        state,
        payment,
    } = getCheckoutFormData(formData);

    if (!fullName) {
        formErrors.fullName = "Full Name is required";
    }

    if (!phone) {
        formErrors.phone = "Phone is required";
    }

    if (!address) {
        formErrors.address = "Address is required";
    }

    if (!postalCode) {
        formErrors.postalCode = "Postal Code is required";
    }

    if (!country) {
        formErrors.country = "Country is required";
    }

    if (!state) {
        formErrors.state = "State is required";
    }

    if (!payment) {
        formErrors.payment = "Payment method is required";
    }

    if (landmark && landmark.length < 3) {
        formErrors.landmark = "Landmark must be at least 3 characters long";
    }

    if (country && country.length < 3) {
        formErrors.country = "Country must be at least 3 characters long";
    }

    if (state && state.length < 3) {
        formErrors.state = "State must be at least 3 characters long";
    }

    const errorLength = Object.keys(formErrors).length;
    return { formErrors, isValid: errorLength === 0 };
};
