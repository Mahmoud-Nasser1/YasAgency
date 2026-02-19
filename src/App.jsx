import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Works from "./pages/ourWork/Works";
import NotFound from "./pages/notFound/NotFound";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Works />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/about" element={<About />} />
        
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
