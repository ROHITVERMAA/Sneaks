type FormInputProps = {
    name: string;
    type: string;
    style: string;
    placeholder: string;
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({
    name,
    type,
    style,
    placeholder,
    onInput,
}: FormInputProps) => {
    return (
        <>
            <label htmlFor={name} className='sr-only'>
                {name}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                className={`border rounded-radius focus:outline-0 bg-lightGray ${style}`}
                onInput={onInput}
            />
        </>
    );
};
export default FormInput;
