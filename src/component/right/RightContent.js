import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Expeirence from '../Experience/Experience';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';
import TabButton from '../TabButton/TabButton';
import "./RightContent.css"
import { useState } from "react";

export default function RightContent(){

    const SECTIONS = {
        aboutme:{
            description: <AboutMe/>
        },
        education:{
            description: <Education/>
        },
        project:{
            description: <Project/>
        },
        experience:{
            description: <Expeirence/>
        },
        skills:{
            description: <Skills/>
        }
    }

    const [selectedTopic, setSelectedTopic] = useState('aboutme');

    function handleSelect(selectedContent){
        setSelectedTopic(selectedContent) ;
    }
    return (
        <div class = "section-right">
            <section>
                <menu>
                    <TabButton name ="About Me" isSelected={selectedTopic === 'aboutme'} onSelect={()=>handleSelect('aboutme')}></TabButton>
                    <TabButton name ="Education" isSelected={selectedTopic === 'education'} onSelect={()=>handleSelect('education')}></TabButton>
                    <TabButton name ="Project" isSelected={selectedTopic === 'project'} onSelect={()=>handleSelect('project')}></TabButton>
                    <TabButton name ="Experience" isSelected={selectedTopic === 'experience'} onSelect={()=>handleSelect('experience')}></TabButton>
                    <TabButton name ="Skills" isSelected={selectedTopic === 'skills'} onSelect={()=>handleSelect('skills')}></TabButton>   
                </menu>
                <div class="content-right">
                    {SECTIONS[selectedTopic].description}
                </div>
            </section>

        </div>
    );
}