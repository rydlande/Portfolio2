import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className='w-full flex justify-center items-center pt-12 pb-10'>
            <nav className="flex justify-evenly w-full max-w-md md:max-w-3xl lg:max-w-4xl">
                <Link to="/">Home</Link>
                <Link to="/portfolio2">Portfolio 2</Link>
                <Link to="/work">Other work</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}