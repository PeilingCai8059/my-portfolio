import './Skills.css'
import { SKILLS } from '../../Assets/data'
import { LuBadgeCheck } from "react-icons/lu";

export default function Skills(){
    return (
        <div>
            {SKILLS.map(skill => 
                <div><LuBadgeCheck className='skill-icon' /> <nobr class='skill-title'>{skill.skillName} : </nobr>{skill.skillContent.map(
                    item => <nobr class='skill-info'> {item} </nobr>
            )}</div>

            )}
        </div>
    );

}