import { Link } from "react-router-dom";

export function Landingpage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue-dark text-white">
            <h1 className="text-6xl font-bold mb-4 font-serif">Eirin Rydland</h1>
            <div className="w-96 h-60 bg-blue flex items-center justify-center mb-4">bilde</div>
            <h2 className="text-4xl font-bold font-serif mb-4">front-end developer</h2>
            <Link to="/portfolio2" className="underline">Portfolio 2</Link>
        </div>
    )
}