import "./home.css";
import Header from "../component/header/header";
import Sidebar from "../component/sidebar/sidebar";
import ProjectComponent from "../component/project/project"; // Renamed import to avoid conflict
import ContactForm from "../component/ContactForm/ContactForm";
import Footer from "../component/footer/Footer";

function HomePage() { 
  return (
    <>
      <Header />
      <div>
        <ProjectComponent /> 
        <ContactForm />
      </div>
      <div className="home-container"> <Sidebar/></div>
      <Footer/>
    </>
  );
}

export default HomePage;
