import Logo from "./Logo";
import FooterLinks from "./FooterLinks";
import BtnYellow from "./BtnYellow";
import { navbarLinks, footerLinks } from "@lib/data";
import iconFacebook from "@icons/facebook.svg";
import iconTwitter from "@icons/twitter.svg";
import iconInstagram from "@icons/instagram.svg";

const Footer = () => {
    return (
        <footer className='flex flex-col gap-4 w-full max-w-[1240px] mx-auto px-4 py-8 md:gap-8 lg:px-8 xl:gap-10 2xl:px-0 2xl:py-10'>
            <Logo />
            <div className='flex flex-col-reverse w-full gap-8 md:flex-row md:gap-4'>
                <div className='grid grid-cols-3 gap-2 md:gap-0 md:w-[65%] lg:grid-cols-[auto_auto_auto]'>
                    <FooterLinks title='Quick Links' links={navbarLinks} />
                    <FooterLinks title='About' links={footerLinks} />
                    <div>
                        <h2 className='pb-4 font-semibold text-base lg:text-lg 2xl:text-xl 2xl:pb-6'>
                            Social Media
                        </h2>
                        <p className='max-w-[285px] pb-4 font-medium text-sm lg:text-base 2xl:pb-6'>
                            Follow us on social media to find more.
                        </p>
                        <div className='flex items-center gap-2 md:justify-start md:gap-4 2xl:gap-6'>
                            <img
                                src={iconFacebook}
                                alt=''
                                className='w-5 md:w-8'
                            />
                            <img
                                src={iconTwitter}
                                alt=''
                                className='w-5 md:w-8'
                            />
                            <img
                                src={iconInstagram}
                                alt=''
                                className='w-5 md:w-8'
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[80%] mx-auto md:block md:w-[35%]'>
                    <h2 className='pb-4 font-semibold text-base lg:text-lg 2xl:text-xl  2xl:pb-6'>
                        Newsletter
                    </h2>
                    <p className='pb-2 font-medium text-sm lg:text-base'>
                        Subscribe for Latest Updates
                    </p>
                    <div className='relative w-full md:w-auto'>
                        <input
                            type='text'
                            name='subscribe'
                            placeholder='Your email'
                            className='py-2 px-6 w-full rounded-lg placeholder:text-black placeholder:text-sm'
                        />
                        <BtnYellow
                            type='button'
                            small={true}
                            style='absolute top-[0.3rem] right-4 py-1 px-2 text-sm'
                        >
                            Subscribe
                        </BtnYellow>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
