import React from "react";
import "../styles/components/maincontent.sass";
import AboutContainer from "./AboutContainer";
import ProjetosContainer from "./ProjetosContainer";
import TecnologiesContainer from "./TecnologiesContainer";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TecnologiesContainer />
      <ProjetosContainer  />
    </main>
  );
};

export default MainContent;
