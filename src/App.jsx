import Hero from "./pages/Hero";

import Navbar from "./components/Navbar";
import { useContext } from "react";
import { ContexApi } from "./components/context";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

function App() {
  const { changeTheme } = useContext(ContexApi);
  return (
    <div className={`${changeTheme} font-Montserrat`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
