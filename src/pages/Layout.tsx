import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "@components";
const Layout = () => {
    const { pathname } = useLocation();
    return (
        <>
            <div className='max-w-[1240px] mx-auto w-full px-4 lg:px-8 2xl:px-0'>
                <Header />
                <main className='pb-8 2xl:pb-16'>
                    <Outlet />
                </main>
            </div>
            {pathname !== "/" && (
                <div className='bg-lightGray'>
                    <Footer />
                </div>
            )}
        </>
    );
};
export default Layout;
