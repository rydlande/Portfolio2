import { Link, useLocation } from "react-router-dom";

export function Header() {
    const location = useLocation();

    return (
        <header className='w-full flex justify-center items-center pt-12 pb-10 bg-blue text-beige-light'>
            <nav className="flex justify-evenly w-full max-w-md md:max-w-3xl lg:max-w-4xl">
                <Link
                    to="/"
                    className={`cursor-pointer ${location.pathname === '/' ? 'font-bold' : 'font-normal'}`}
                >
                    Home
                </Link>
                <Link
                    to="/portfolio2"
                    className={`cursor-pointer ${location.pathname === '/portfolio2' ? 'font-bold' : 'font-normal'}`}
                >
                    Portfolio 2
                </Link>
            </nav>
        </header>
    )
}
