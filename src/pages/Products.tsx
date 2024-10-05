import { useState, useEffect } from "react";
import { products } from "@lib/data";
import type { Product } from "@lib/definitions";
import { disableScroll, enableScroll } from "@lib/utils";
import { ProductsGrid, Pagination, Loader } from "@components";

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const productsPerPage = 9;
    const numberOfPages = Math.ceil(products.length / productsPerPage);

    useEffect(() => {
        setIsLoading(true);
        disableScroll();
        const indexOfLastProduct = currentPage * productsPerPage;
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        const currentProductsSlice = products.slice(
            indexOfFirstProduct,
            indexOfLastProduct
        );
        setCurrentProducts(currentProductsSlice);
        setIsLoading(false);
        enableScroll();
    }, [currentPage]);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div className='flex flex-col items-center'>
                    <ProductsGrid products={currentProducts} />
                    <Pagination
                        currentPage={currentPage}
                        paginate={paginate}
                        numberOfPages={numberOfPages}
                    />
                </div>
            )}
        </>
    );
};
export default Products;
