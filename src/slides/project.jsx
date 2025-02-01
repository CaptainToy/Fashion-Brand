import "./home.css";
import Header from "../component/header/header";
import Sidebar from "../component/sidebar/sidebar";
import ProjectComponent from "../component/project/project"; // Renamed import to avoid conflict
import ContactForm from "../component/ContactForm/ContactForm";

function HomePage() { 
  return (
    <>
      <Header />
      <div className="home-container">
        <Sidebar />
      </div>
      <div>
        <ProjectComponent /> 
        <ContactForm />
      </div>
    </>
  );
}

export default HomePage;
