import "./Project.css"
import ceo from "../../assets/ceo.jpg"

const Project = ()=>{
    return(
        <div className="project-container">
             <h1 className="title">
             RECENT <span className="highlight">PROJECTS</span>
            </h1>
            <div className="project-content">
                <ul>
                    <li>
                        <img src={ceo} alt="" />
                        <h3>Revo</h3>
                        <p>first framer template</p>
                        
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Project