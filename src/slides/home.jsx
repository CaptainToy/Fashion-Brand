import Content from "../component/content/content"
import Header from "../component/header/header"
import Sidebar from "../component/sidebar/sidebar"
import Project from "../component/project/project"

import"./home.css"
function Home() {

    return (
      <>
       <Header/>
      <div className="home-container"> <Sidebar/></div>
      <div>
         <Content/>
         <Project/>
      </div>
      </>
    )
  }
  
  export default Home
  