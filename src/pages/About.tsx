import aboutImg from "@images/about.png";
const About = () => {
    return (
        <div className='flex flex-col items-center bg-lightGray lg:flex-row lg:h-[500px]'>
            <div className='w-full h-full lg:w-5/12'>
                <img src={aboutImg} alt='' className='w-full h-full' />
            </div>
            <div className='flex flex-col gap-4 py-8 px-4 md:px-8 lg:gap-8 lg:w-7/12 lg:px-14 lg:py-0'>
                <h1 className='text-2xl uppercase font-bold  2xl:text-4xl'>
                    sneaks
                </h1>
                <div className='flex flex-col gap-2 text-lg 2xl:text-xl'>
                    <p>
                        Sneaks is a footwear online store generally for
                        sneakers. Our online store was birth out of the need for
                        a remarkable sneaks footwears.
                    </p>
                    <p>
                        Our focus on delivering quality product in the value
                        chain – which includes the sourcing, distribution,
                        marketing, provision of sales and after-sales service of
                        our unique brands.
                    </p>
                    <p>Our key objectives include:</p>
                    <ul className='list-disc pl-8'>
                        <li>Offer affordable and durable footwears.</li>
                        <li>
                            Offer easy access to best-in-class after-sales
                            quality service.
                        </li>
                        <li>Build a reliable and credible footwear store.</li>
                    </ul>
                    <p>Created by Rohit❤️</p>
                </div>
            </div>
        </div>
    );
};
export default About;
