import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />

      <main className="pt-20">
        <Hero id="hero" />
        <Section2 id="section2" />
         <Section3 id="section3" />
          <Section4 id="section4" />
           <Section5 id="section5" />
             <Section7 id="section7" />
             <Section6 id="section6" />
        <Footer id="footer" />
      </main>

    
    </>
  );
}

export default App;
