import { useRef } from "react";
import { Link } from "react-router-dom";
import { ProjectExam2 } from "../../components/portfolio-cards/ProjectExam2";
import { JSFrameworks } from "../../components/portfolio-cards/JSFrameworks";
import { SemesterProject2 } from "../../components/portfolio-cards/SemesterProject2";

export function Portfolio() {
    const projectExamRef = useRef(null);
    const jsFrameworksRef = useRef(null);
    const semesterProjectRef = useRef(null);

    const scrollToProject = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth"
        });
    };

    return (
        <div className="w-full flex justify-center items-center pt-12 pb-10 bg-blue text-beige-light">
            <div className="fixed top-1/2 left-4 ">
                <Link to="/" className="hidden xs:flex">Back</Link>
            </div>

            <div className="flex flex-col justify-evenly w-full max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl gap-40">
                <div ref={projectExamRef}>
                    <ProjectExam2 />
                </div>

                <div ref={jsFrameworksRef}>
                    <JSFrameworks />
                </div>

                <div ref={semesterProjectRef}>
                    <SemesterProject2 />
                </div>
            </div>

            <div className="fixed top-1/2 right-4 flex flex-col items-end">
                <div className="hidden lg:flex flex-col">
                    <button onClick={() => scrollToProject(projectExamRef)}>Project Exam 2</button>
                    <button onClick={() => scrollToProject(jsFrameworksRef)}>JS Frameworks</button>
                    <button onClick={() => scrollToProject(semesterProjectRef)}>Semester Project 2</button>
                </div>

                <div className="hidden xs:flex lg:hidden flex-col">
                    <button onClick={() => scrollToProject(projectExamRef)}>PE2</button>
                    <button onClick={() => scrollToProject(jsFrameworksRef)}>JSF</button>
                    <button onClick={() => scrollToProject(semesterProjectRef)}>SP2</button>
                </div>
            </div>
        </div>
    )
}