type BtnYellowProps = {
    children: React.ReactNode;
    type: "button" | "submit" | "reset";
    style: string;
    small?: boolean;
    onClick?: () => void;
};

const BtnYellow = ({
    children,
    style,
    type,
    small,
    onClick,
}: BtnYellowProps) => {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`bg-darkYellow text-white transition-ease hover:opacity-80 ${style} ${
                small ? "rounded" : "rounded-radius"
            }`}
        >
            {children}
        </button>
    );
};
export default BtnYellow;
