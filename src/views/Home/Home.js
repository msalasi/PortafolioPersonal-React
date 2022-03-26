import React from "react";
import './Home.css';
import OnTheWeb from "../../components/OnTheWeb/OnTheWeb.js";
import PrincipalText from "../../components/PrincipalText/PrincipalText.js";
import PrincipalWorks from "../../components/PrincipalWorks/PrincipalWorks.js";
import PerfilPhoto from "../../components/PerfilPhoto/PerfilPhoto.js";

const Home = () => {
  return (
    <>
      <PerfilPhoto/>
      <PrincipalText
        title="Work"
        content="I am a web developer, specializing in Front End.
I enjoy coming up with ideas to solve some real world problem using code."
      />
      <PrincipalText
        title="I <3"
        content="Art, Music, Tecnology, Cience, Read, Video game"
      />
      <OnTheWeb title="On the web"/>
      <PrincipalWorks title="<PrincipalWorks/>"/>
   
    </>
  );
};

export default Home;
