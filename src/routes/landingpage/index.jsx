import { Link } from "react-router-dom";
import image from '../../assets/image.svg';


export function Landingpage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-blue text-beige-light">
            <h1 className="text-5xl font-bold mb-0 font-serif">Eirin Rydland</h1>
            <div className="w-96 h-60 bg-blue flex items-center justify-center mb-4">
                <img src={image} alt="Illustration of woman with glasses" />
            </div>
            <h2 className="text-4xl font-bold font-serif mb-4 mt-8">front-end developer</h2>
            <Link to="/portfolio2" className="underline">Portfolio 2</Link>
        </div>
    )
}