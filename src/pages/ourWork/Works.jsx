import Events from "./components/Events";
import Intro from "./components/intro";
import Outdoors from "./components/Outdoors";
import ProductionAndPrinting from "./components/ProductionAndPrinting";

const Works = () => {
  return (
    <div className="flex flex-col ">
      <Intro />
      <Outdoors />
      <Events />
      <ProductionAndPrinting />
    </div>
  );
};

export default Works;
