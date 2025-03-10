import About from "./container/About";
import Education from "./container/Education";
import Experience from "./container/Experience";
import Interests from "./container/Interests";
import Skills from "./container/Skills";

export default function Container() {
    return (
        <div className="container-fluid p-0">
            <About/>
            <hr className="m-0" />
            <Experience/>
            <hr className="m-0" />
            <Education/>
            <hr className="m-0" />
            <Skills/>
            <hr className="m-0" />
            <Interests/>
            <hr className="m-0" />
        </div>
    )
}