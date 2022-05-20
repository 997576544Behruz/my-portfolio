import React  from "react";
import Header from "./Components/Header/header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/about";
import Expirence from "./Components/Expirence/expirence";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer"
import "./index.css"
function App(){
  return(
    <div className="full">
    <Header/>
    <Nav/>
    <About/>
    <Expirence/>
    <Services/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
