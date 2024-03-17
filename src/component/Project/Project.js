import "./Project.css"
import { PROJECTS } from "../../Assets/data";
import IndividualProject from "./IndividualProject";

export default function Project(){
    return (
        <div class='projects-container'>    
            
            {PROJECTS.map(project => <IndividualProject key={project.title} {...project} />)}
        </div>

    );
}