import Clients from "./components/Clients";
import Hero from "./components/Hero";
import LastSec from "./components/LastSec";
import Portfolio from "./components/Portfolio";
import SecAbout from "./components/SecAbout";
import SecService from "./components/SecService";

const Home = () => {
  return (
    <div>
      <Hero />
      <SecAbout />
      <SecService />
      <Portfolio />
      <Clients />
      <LastSec />
    </div>
  );
};

export default Home;
