import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';
const SocialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> },
  ];
const SocialNetworkContainer = () => {
  return <section id="social-networks">
    {SocialNetworks.map((network) => (
     <a href="#" className="social-btn" id={network.name} key={network.name}>
      {network.icon}
     </a>
    ))}
  </section>;
};

export default SocialNetworkContainer