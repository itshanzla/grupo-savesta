import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Mision from "./components/Mision";
import QueHacemos from "./components/QueHacemos";
import Multicanal from "./components/Multicanal";
import Logistica from "./components/Logistica";
import PorQueSavesta from "./components/PorQueSavesta";
import Enfoque from "./components/Enfoque";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import SectionWrapper from "./components/SectionWrapper";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SectionWrapper>
          <QuienesSomos />
        </SectionWrapper>
        <SectionWrapper>
          <Mision />
        </SectionWrapper>
        <SectionWrapper>
          <QueHacemos />
        </SectionWrapper>
        <SectionWrapper>
          <Multicanal />
        </SectionWrapper>
        <SectionWrapper>
          <Logistica />
        </SectionWrapper>
        <SectionWrapper>
          <PorQueSavesta />
        </SectionWrapper>
        <SectionWrapper>
          <Enfoque />
        </SectionWrapper>
        <SectionWrapper>
          <Contacto />
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

export default App;
