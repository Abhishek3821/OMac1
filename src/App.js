import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Cases from './Pages/Cases';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import Preloader from './components/Preloader';
import ScrollAnimations from './components/ScrollAnimations';
import CorporateInvestigations from './Pages/Service/CorporateInvestigations';
import BackgroundVerification from './Pages/Service/ComprehensiveBackground';
import PrivateInvestigations from './Pages/Service/DiscreetPrivate';
import MatrimonialInvestigations from './Pages/Service/Matrimonial';

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollAnimations />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/corporate-investigations" element={<CorporateInvestigations />} />
        <Route path="/services/background-verification" element={<BackgroundVerification />} />
        <Route path="/services/private-investigations" element={<PrivateInvestigations />} />
        <Route path="/services/matrimonial-investigations" element={<MatrimonialInvestigations />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
