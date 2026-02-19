import Events from "./components/Events";
import Outdoors from "./components/Outdoors";
import ProductionAndPrinting from "./components/ProductionAndPrinting";
import Intro from "./../services/components/Intro";

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
