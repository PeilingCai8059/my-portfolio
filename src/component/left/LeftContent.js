import "./LeftContent.css"
import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "@react-email/components";
import Resume from "./Resume";

export default function LeftContent(){
    return (
    <div class= "content-left">
        <div class= "welcome">
            Hi There, 
            <br/>I'm Peiling Cai
        </div>
        <div class= "title">
            &lt; Software Developer &gt;
        </div>
        <br/>
        <div class="left-info">Actively looking for Intern Full time opportunities</div>
        <div class='icon-section'> 
            <a href="https://www.linkedin.com/in/peiling-cai/" target="_blank"> <TiSocialLinkedin class='icon'/>   </a>
            <a href="https://github.com/PeilingCai8059" target="_blank"> <FaGithub class='icon'/>   </a>
        
            <Link href="mailto:peilingccai@gmail.com"><HiOutlineMail class='icon'/> </Link>
        </div>

     </div>
    );
}
