import "./Project.css";
import ceo from "../../assets/ceo.jpg"; 
// img
import CFPH from "../../assets/img/cfphf.png";
import GRand from "../../assets/img/grand.png";
import Yet from "../../assets/img/yetland.jpg";

const Project = () => {
    const sampleData = [
        {
            id: 1,
            title: "cfphfoundation",
            description: "NGO Website Development",
            image: CFPH,
            href: "https://cfphfoundation.org/"
        },
        {
            id: 2,
            title: "Grandural",
            description: "Banding Website Development",
            image: GRand,
            href: "https://captaintoy.github.io/Grandural.2/"
        },
        {
            id: 3,
            title: "Yetland School",
            description: "School Management system",
            image: Yet,
            href: "https://captaintoy.github.io/Yetland-School/"

        },
    ];

    return (
        <div className="project-container">
            <h1 className="title">
                RECENT <span className="highlight">PROJECTS</span>
            </h1>
            <div className="project-content">
                <ul>
                    {sampleData.map((project) => (
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                        <li key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-info">
                                    <h3 className="project-card-title">{project.title}</h3>
                                    <p className="project-card-description">{project.description}</p>
                                </div>
                        </li>
                        </a>

                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
