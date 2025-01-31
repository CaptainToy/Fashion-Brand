import Content from "../component/content/content"
import Header from "../component/header/header"
import Sidebar from "../component/sidebar/sidebar"
import Project from "../component/project/project"
import Experience from "../component/experience/experience"

import"./home.css"
function Home() {

    return (
      <>
       <Header/>
      <div className="home-container"> <Sidebar/></div>
      <div>
         <Content/>
         <Project/>
         <Experience/>
      </div>
      </>
    )
  }
  
  export default Home
  