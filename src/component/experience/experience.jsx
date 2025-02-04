const experience = ()=>{
    const sampleData = [
        {
            id: 1,
            title: "Revo",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat ex officia maxime obcaecati ullam consequatur. Ab quia dolorem adipisci commodi deserunt aliquid, cumque voluptatibus consequatur, aliquam voluptate assumenda? Est!",
            date: "Jan 2020 - Present"
        },
        {
            id: 2,
            title: "NajmAI",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat ex officia maxime obcaecati ullam consequatur. Ab quia dolorem adipisci commodi deserunt aliquid, cumque voluptatibus consequatur, aliquam voluptate assumenda? Est!",
            date: "Jan 2020 - Present"
        },
        {
            id: 3,
            title: "Nashra",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat ex officia maxime obcaecati ullam consequatur. Ab quia dolorem adipisci commodi deserunt aliquid, cumque voluptatibus consequatur, aliquam voluptate assumenda? Est!",
            date: "Jan 2020 - Present"
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