import { Carousel } from '../carousel/carousel.jsx'
import Image1 from '../../assets/SP-1.jpg';
import Image2 from '../../assets/SP-2.jpg';
import Image3 from '../../assets/SP-3.jpg';

const images = [Image1, Image2, Image3];

export function SemesterProject2() {
    return (
        <div className="grid grid-cols-2 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-1 font-sans">
                <h1 className="text-3xl font-bold mb-2">Semester Project 2</h1>
                <h2 className='text-xl font-medium mb-8'>Auction Website Project</h2>
                <p className='mb-0 md:mb-8'>This assignment was to create a responsive auction website using skills from the past three semesters. The site allows users to add items for auction and bid on others' items. New users receive 1000 credits to start, which they can earn by selling and spend by buying items. Non-registered users can browse listings, while only registered users can place bids. The project involves user registration, item listing, bidding functionality, and credit management.</p>
                <div className='hidden md:block'>
                    <a href="https://github.com/rydlande/SemesterProject2" className="block mb-1 underline">GitHub Repository</a>
                    <a href="https://rydlande.github.io/SemesterProject2/" className="block underline">Hosted site on Netlify</a>
                </div>
            </div>

            <div className="col-span-2 lg:col-span-1 w-full h-full mb-4">
                <Carousel images={images}/>
                <div className='block md:hidden mt-6'>
                    <a href="https://github.com/rydlande/SemesterProject2" className="block mb-1 underline">GitHub Repository</a>
                    <a href="https://rydlande.github.io/SemesterProject2/" className="block underline">Hosted site on Netlify</a>
                </div>
            </div>
        </div>
    )
}