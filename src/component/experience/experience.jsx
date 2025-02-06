const experience = ()=>{
    const sampleData = [
        {
            id: 1,
            title: "Brij.NG",
            description: "A leading logistics company where I have been working as a Front-End Developer since 2023, contributing to the development of a seamless and efficient user experience for their logistics platform.",
            date: "Aug 2023 - Present"
        },
        {
            id: 2,
            title: "Yetland School",
            description: "Developed a School Management System for online result processing, ensuring a smooth and automated workflow for administrators, teachers, and students.",
            date: "Jan 2023 - Sep 2024"
        },
        {
            id: 3,
            title: "Tiwango Limited",
            description: "An NGO where I worked as a Front-End Developer from 2022 to 2024, helping build an intuitive and user-friendly digital platform to support their mission.",
            date: " Aug 2022 - Feb 2024"
        },
    ];
    return(
        <div className="project-container">
            <h1 className="title">
            8 YEARS OF <span className="highlight">EXPERIENCE</span>
            </h1>
            <div className="project-content">
                <ul>
                    {sampleData.map((project) => (
                        <li key={project.id} className="project-card">
                            <div className="project-info">
                                <h3 className="project-card-title" style={{marginBottom:"10px"}}>{project.title}</h3>
                                <p className="project-card-description">{project.description}</p>
                                <p className="project-card-description date" style={{marginTop:"20px"}}>{project.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default experience