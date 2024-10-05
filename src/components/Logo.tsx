import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <div className='font-racing uppercase text-xl md:text-3xl md:leading-10 lg:text-[40px] lg:leading-[50px]'>
            <Link to='/'>sneaks</Link>
        </div>
    );
};
export default Logo;
