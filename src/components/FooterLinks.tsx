import { Link } from "react-router-dom";

type FooterLink = {
    id: number;
    name: string;
    path?: string;
};

type FooterLinksProps = {
    title: string;
    links: FooterLink[];
};

const FooterLinks = ({ title, links }: FooterLinksProps) => {
    return (
        <div className='grid gap-2 md:gap-4 2xl:gap-6'>
            <h2 className='font-semibold text-base lg:text-lg 2xl:text-xl'>
                {title}
            </h2>
            <ul className='font-medium grid gap-2 md:gap-4 2xl:gap-6'>
                {links.map((link) => (
                    <li key={link.id} className='text-sm lg:text-base'>
                        {link.path ? (
                            <Link to={link.path}>{link.name}</Link>
                        ) : (
                            link.name
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default FooterLinks;
