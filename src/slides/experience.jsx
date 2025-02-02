import Header from "../component/header/header"
import Sidebar from "../component/sidebar/sidebar"
import Experience from "../component/experience/experience"
import ContactForm from "../component/ContactForm/ContactForm"
import"./home.css"

function portfolio() {
    return (
      <>
       <Header/>
      <div>
         <Experience/>
         <ContactForm/>
      </div>
      <div className="home-container"> <Sidebar/></div>
      </>
    )
  }
export default portfolio
  