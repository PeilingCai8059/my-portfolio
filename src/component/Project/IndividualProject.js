import "./Project.css"


export default function IndividualProject({image, title, description}){
    return (
        <div class='individual-project'> 
            <div >
                <img src={image} alt={title} class='project-image'/>    
            </div>   
            <div class='project-title'>
                {title}
            </div>
            <div>
                <ul>
                    {description.map((item) => (
                    <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}