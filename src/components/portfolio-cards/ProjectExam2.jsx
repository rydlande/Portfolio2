import { Carousel } from '../carousel/carousel.jsx'
import Image1 from '../../assets/PE-1.jpg';
import Image2 from '../../assets/PE-2.jpg';
import Image3 from '../../assets/PE-3.jpg';
import Image4 from '../../assets/PE-4.jpg';
import Image5 from '../../assets/PE-5.jpg';
import Image6 from '../../assets/PE-6.gif';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

export function ProjectExam2() {

    return (
        <div className="grid grid-cols-2 gap-8 mb-16 text-beige-light">
            <div className="col-span-2 lg:col-span-1 font-sans">
                <h1 className="text-3xl font-bold mb-2">Project Exam 2</h1>
                <h2 className='text-xl font-medium mb-8'>Holidaze Accommodation Booking Site</h2>
                <p className='mb-0 md:mb-8'>This assignment was to develop a complete front end for Holidaze, featuring both a customer-facing side for booking holidays and an admin-facing side for managing venues and bookings. The design and user experience are to be planned and executed based on official API documentation, with a focus on delivering a high-quality, user-friendly application.</p>
                <div className='hidden md:block'>
                    <a href="https://github.com/rydlande/ProjectExam2" className="block mb-1 underline">GitHub Repository</a>
                    <a href="https://rydlande-exam2.netlify.app/" className="block underline">Hosted site on Netlify</a>
                </div>
            </div>

            <div className="col-span-2 lg:col-span-1 w-full h-full mb-4">
                <Carousel images={images}/>
                <div className='block md:hidden mt-6'>
                    <a href="https://github.com/rydlande/ProjectExam2" className="block mb-1 underline">GitHub Repository</a>
                    <a href="https://rydlande-exam2.netlify.app/" className="block underline">Hosted site on Netlify</a>
                </div>
            </div>
        </div>
    )
}