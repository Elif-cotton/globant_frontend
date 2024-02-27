import NavBar from "../components/NavBar";
import "./NotFound.module.css";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

function NotFound() {
    return <>
      <NavBar />
      <HeroSection />

      <main>
        <h2 className="">NOT FOUND</h2>
      </main>

      <Footer/>
      
      </>;
  }
  
  export default NotFound;