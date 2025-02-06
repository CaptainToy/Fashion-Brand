import "./design.css"
const Design = ()=>{
    const sampleData = [
        {
            id: 1,
            title: "Starting and Growing a Career in Web Design",
            description: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
            date: "Apr 8, 2022"
        },
        {
            id: 2,
            title: "Create a Landing Page That Performs Great",
            description: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
            date: "Mar 15, 2022"
        },
        {
            id: 3,
            title: "How Can Designers Prepare for the Future?",
            description: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.",
            date: "Feb 28, 2022"
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