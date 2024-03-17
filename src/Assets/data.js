import bookingImage from './booking.png'
import databaseImage from './sql.png'
import modelChckerImage from './Quantitative-Model-Checking.png'


export const PROJECTS = [
    {
        image: bookingImage ,
        title: 'Travel Website - Trip Aspire',
        description: 
        [
            "To	Built a full-stack web application using the MERN stack following Agile process. Delivered an intuitive and engaging user interface, scalable operations, and efficient data storage and retrieval.",
            "Crafted a detailed Software Requirements Specification (SRS) to outline functional and non-functional requirements, establishing a clear project roadmap.",
            "Employed rigorous testing methodologies at every stage (unit, integration, system testing)."
        ]
    },
    {
        image: databaseImage ,
        title: 'Database Design for Airline Management',
        description: 
        [
            "Concentrated on the sophisticated design and robust implementation of a relational database.",
            "Translated a comprehensive Entity-Relationship diagram into a practical relational schema, implemented using Microsoft SQL Server. ",
            "Integrated the REST API with the relational database, facilitating seamless data flow and interaction between the system's frontend and backend."
        ]
    },    
    {
        image: modelChckerImage ,
        title: 'CTL Model Checker',
        description: 
        [
            "Constructed desk application in the MVC architectural pattern and implemented it in Java, leveraging an intuitive JavaFX graphical user interface.",
            "Integrated sophisticated algorithms for decomposing complex CTL formulas into ASTs, enabling efficient evaluation against Kripke structures through depth-first search and backtracking techniques.",
            "Prepared a detailed test report focused on the evaluation results of CTL formulas against Kripke structures, demonstrating the application's robust verification capabilities"
        ]
    },
];

export const SKILLS = [
    {
        skillName: 'Programming Languages',
        skillContent: [ 'Java', 'C/C++', 'Python' ]
    },
    {
        skillName: 'Web Technologies',
        skillContent: [  'JavaScript',' Node.js',' React', 'HTML', 'CSS' ]
    },
    {
        skillName: 'Database Technologies',
        skillContent: [ 'MySQL', 'Oracle' ]
    },
    {
        skillName: 'Automated Testing',
        skillContent: [ 'JUnit' ]
    },
    {
        skillName: 'Version Control',
        skillContent: [ 'Git' ]
    },
    {
        skillName: 'Agile Methodologies',
        skillContent: [ 'SCRUM', 'Kanban' ]
    },
    {
        skillName: 'Collaboration Tools',
        skillContent: [ 'JIRA', 'Slack' ]
    },
    {
        skillName: 'Other Tools',
        skillContent: [ 'Postman', 'MS Excel',' MS Powerpoint', 'MS Word' ]
    },

];