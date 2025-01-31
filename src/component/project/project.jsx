import "./Project.css";
import ceo from "../../assets/ceo.jpg"; // Import the image properly

const Project = () => {
    const sampleData = [
        {
            id: 1,
            title: "Revo",
            description: "Free Framer Template",
            image: "https://i.pinimg.com/736x/8f/7c/ad/8f7cadbe98a3948d0fec529cb01f462a.jpg",
        },
        {
            id: 2,
            title: "NajmAI",
            description: "SaaS Framer Template",
            image: "https://i.pinimg.com/736x/96/c1/72/96c1720919baa5c867e1f4f2afc2a4f3.jpg",
        },
        {
            id: 3,
            title: "Nashra",
            description: "SaaS Framer Template",
            image: "https://i.pinimg.com/736x/9c/b3/a3/9cb3a3779227e6f78c88c9cda7fb33fe.jpg",
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
                        <li key={project.id} className="project-card">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-card-description">{project.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Project;
