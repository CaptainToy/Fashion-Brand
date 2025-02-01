import Content from "../component/content/content"
import Header from "../component/header/header"
import Sidebar from "../component/sidebar/sidebar"
import Project from "../component/project/project"
import Experience from "../component/experience/experience"
import"./home.css"
import ToolListApp from "../component/Tools/Tools"
import Design from "../component/design/design"
import ContactForm from "../component/ContactForm/ContactForm"
function portfolio() {

    return (
      <>
       <Header/>
      <div className="home-container"> <Sidebar/></div>
      <div>
         {/* <Content/>
         <Project/> */}
         <Experience/>
         {/* <ToolListApp/>
         <Design/> */}
         <ContactForm/>
      </div>
      </>
    )
  }
  
  export default portfolio
  