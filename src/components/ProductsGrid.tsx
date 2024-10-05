import type { Product } from "@lib/definitions";
import ProductCard from "./ProductCard";

type ProductsGridProps = {
    products: Product[];
};

const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
        <div className='grid gap-6  w-full md:grid-cols-2 lg:grid-cols-3 xl:gap-12'>
            {products.map((product) => {
                return <ProductCard key={product.id} product={product} />;
            })}
        </div>
    );
};
export default ProductsGrid;
