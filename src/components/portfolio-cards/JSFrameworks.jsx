import { Carousel } from '../carousel/carousel.jsx'
import Image1 from '../../assets/JSFrameworks-1.jpg';
import Image2 from '../../assets/JSFrameworks-2.jpg';
import Image3 from '../../assets/JSFrameworks-3.jpg';
import Image4 from '../../assets/JSFrameworks-4.jpg';
import Image5 from '../../assets/JSFrameworks-5.jpg';
import Image6 from '../../assets/JSFrameworks-6.jpg';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

export function JSFrameworks() {
    return (
        <div className="grid grid-cols-2 gap-8 mb-16 text-beige-light">
            <div className="col-span-2 lg:col-span-1 font-sans">
                <h1 className="text-3xl font-bold mb-2">JavaScript Frameworks</h1>
                <h2 className='text-xl font-medium mb-8'>ECommerce Store Project</h2>
                <p className='mb-0 md:mb-8'>This assignment was to build a responsive eCommerce store using React and the provided API. The app includes a Homepage with a product list and search bar, an Individual Product Page displaying product details and reviews with an Add to Cart feature, a Cart Page listing cart items with a total and Checkout button, a Checkout Success Page with a confirmation message and cart clearance, and a Contact Page with a validated form. The design features a consistent Layout with a header, footer, and Cart icon showing item count, and uses React Router for navigation.</p>
                <div className='hidden md:block'>
                    <a href="https://github.com/rydlande/JS-Frameworks_CA" className="block mb-1 underline">GitHub Repository</a>
                    <a href="https://rydlande-jsframeworksca.netlify.app/" className="block underline">Hosted site on Netlify</a>
                </div>
            </div>

            <div className="col-span-2 lg:col-span-1 w-full h-full mb-4">
                <Carousel images={images}/>
                <div className='block md:hidden mt-6'>
                    <a href="https://github.com/rydlande/JS-Frameworks_CA" className="block mb-1 underline">GitHub Repository</a>
                    <a href="https://rydlande-jsframeworksca.netlify.app/" className="block underline">Hosted site on Netlify</a>
                </div>
            </div>
        </div>
    )
}