type PaginationProps = {
    currentPage: number;
    paginate: (pageNumber: number) => void;
    numberOfPages: number;
};

const Pagination = ({
    currentPage,
    paginate,
    numberOfPages,
}: PaginationProps) => {
    const pageNumbers = Array.from({ length: numberOfPages }, (_, i) => i + 1);

    const handlePrev = () => {
        currentPage > 1 && paginate(currentPage - 1);
    };

    const handleNext = () => {
        currentPage < numberOfPages && paginate(currentPage + 1);
    };

    return (
        <div className='flex gap-4 items-center self-end py-8'>
            <button
                onClick={handlePrev}
                className={`${
                    currentPage === 1 ? "cursor-auto opacity-80" : ""
                }`}
            >
                Prev
            </button>
            <div className='flex gap-2'>
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`border border-transparent rounded-full w-7 h-7 transition-ease ${
                            number === currentPage
                                ? "bg-darkYellow text-white"
                                : "hover:bg-lightGray"
                        }`}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button
                onClick={handleNext}
                className={`${
                    currentPage === numberOfPages
                        ? "cursor-auto opacity-80"
                        : ""
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
