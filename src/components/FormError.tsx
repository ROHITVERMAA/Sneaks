import React from "react";

const FormError = ({ children }: { children: React.ReactNode }) => {
    return <p className='text-sm text-red-700'>{children}</p>;
};
export default FormError;
