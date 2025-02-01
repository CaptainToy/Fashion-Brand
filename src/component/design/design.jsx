import "./design.css"
const Design = ()=>{
    const sampleData = [
        {
            id: 1,
            title: "Revo",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat ex officia maxime obcaecati ullam consequatur. Ab quia dolorem adipisci commodi deserunt aliquid, cumque voluptatibus consequatur, aliquam voluptate assumenda? Est!",
            date: "Jan 2020"
        },
        {
            id: 2,
            title: "NajmAI",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat ex officia maxime obcaecati ullam consequatur. Ab quia dolorem adipisci commodi deserunt aliquid, cumque voluptatibus consequatur, aliquam voluptate assumenda? Est!",
            date: "Jan 2020"
        },
        {
            id: 3,
            title: "Nashra",
            description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto placeat ex officia maxime obcaecati ullam consequatur. Ab quia dolorem adipisci commodi deserunt aliquid, cumque voluptatibus consequatur, aliquam voluptate assumenda? Est!",
            date: "Jan 2020"
        },
    ];
    return(
        <div className="design-container">
            <h1 className="design">
            DESIGN <br /><span className="deshighlight">THOUGHTS</span>
            </h1>
            <div className="design-content">
                <ul>
                    {sampleData.map((design) => (
                        <li key={design.id} className="design-card">
                            <div className="design-info">
                                <h3 className="design-card-title" style={{marginBottom:"10px"}}>{design.title}</h3>
                                <p className="design-card-description">{design.description}</p>
                                <p className="design-card-description date" style={{marginTop:"20px"}}>{design.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Design