import PE2Image1 from '../../assets/PE2-1.jpg';
import PE2Image2 from '../../assets/PE2-2.jpg';
import PE2Image3 from '../../assets/PE2-3.jpg';

export function ProjectExam2() {

    return (
        <div className="grid grid-cols-4 gap-8 mb-16">
            <div className="col-span-2 font-sans">
                <h1 className="text-3xl font-bold mb-2">Project Exam 2</h1>
                <h2 className='text-xl font-medium mb-8'>Holidaze Accommodation Booking Site</h2>
                <p className='mb-8'>This assignment was to develop a complete front end for Holidaze, featuring both a customer-facing side for booking holidays and an admin-facing side for managing venues and bookings. The design and user experience are to be planned and executed based on official API documentation, with a focus on delivering a high-quality, user-friendly application.</p>
                <a href="https://github.com/rydlande/ProjectExam2" className="block mb-1 underline">GitHub Repository</a>
                <a href="https://rydlande-exam2.netlify.app/" className="block underline">Hosted site on Netlify</a>
            </div>

            <div className="col-span-2 w-full h-full mb-4">
                <img src={PE2Image1} alt="Screenshot of Holidaze landingpage" className="w-full h-full object-fit"/>
            </div>

            <div className="col-span-4">
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1">
                        <div className="bg-blue w-full h-32"></div>
                        <div className="bg-blue w-full h-32"></div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-blue w-full h-52"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}