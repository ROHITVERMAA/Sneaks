export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    src: string;
};

export type CartItem = Product & {
    quantity: number;
};
