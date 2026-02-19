import React from "react";
import Intro from "./components/Intro";
import OurClients from "./components/OurClients";

const Clients = () => {
  return (
    <div className="bg-background min-h-screen">
      <Intro />
      <OurClients />
    </div>
  );
};

export default Clients;
