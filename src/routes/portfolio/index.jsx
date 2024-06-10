import { useRef } from "react";
import { Link } from "react-router-dom";

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
        <div>
            <div className="fixed top-24 left-4">
                <Link to="/">Back</Link>
            </div>

            <div>
                <div ref={projectExamRef} className=" h-96">
                    <h1>Project Exam 2</h1>
                </div>

                <div ref={jsFrameworksRef} className=" h-96">
                    <h1>JS Frameworks</h1>
                </div>

                <div ref={semesterProjectRef} className=" h-96">
                    <h1>Semester Project 2</h1>
                </div>
            </div>

            <div className="fixed top-24 right-4 flex flex-col items-end">
                <button onClick={() => scrollToProject(projectExamRef)}>Project Exam 2</button>
                <button onClick={() => scrollToProject(jsFrameworksRef)}>JS Frameworks</button>
                <button onClick={() => scrollToProject(semesterProjectRef)}>Semester Project 2</button>
            </div>
        </div>
    )
}