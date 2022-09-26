import React from "react";

import Avatar from "../img/profile-pic.png";
import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworkContainer";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Rafael Silva" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks />
      <InformationContainer />
      
      <a href="https://drive.google.com/file/d/1c_mT1xQiwGX-kPkkeTQwTQVXJpRxUZ5X/view?usp=sharing" className="btn">
        Download curriculo
      </a>
    </aside>
  );
};

export default Sidebar;
