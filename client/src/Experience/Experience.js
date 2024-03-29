import React from "react";
import Heading from "../Components/Heading/Heading";

import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <Heading title="Ervaring" />
      <Empolyer
        date="2015 - 2018"
        company="The Valley"
        function="Front End Developer"
        details="Gewerkt met email-templating waarbij elke emailclient anders werkt. Daarvoor is strikte code nodig. Ook gewerkt met jQuery, SQL, ES5 & Webpack"
      />
      <Empolyer
        date="2018 - 2019"
        company="uButler"
        function="Front end Developer"
        details="Onze core business was een chat app. Dit stond op een React platform met Apollo, graphQL en react-native. Ik werkte vooral aan de voorkant om de chat te verbeteren en nieuwe interfaces te bouwen voor de klanten."
      />
      <Empolyer
        date="2019 - 2021"
        company="Propeller"
        function="Client support"
        details="Mijn taken waren klanten helpen die problemen hadden in het systeem. Daarbij ging het om de samenwerking tussen meerdere grote systemen. Ook hebben we de klanten geholpen met het aanpassen van de voorkant. Hier heb ik vooral gewerkt met PHP, HTML & CSS"
      />
      <Empolyer
        date="2015 - 2020"
        company="de Marktkantine"
        function="Floor manager"
        details="De verantwoordelijkheid om de avond goed te laten verlopen lag bij mij. Voor zowel het personeel als voor de gasten."
      />
      <Empolyer
        date="2021 - heden"
        company="onetribe / NOISE"
        function="Front end developer"
        details="Hier werk ik als developer om een ontwerp om te zetten naar een website. Waarbij de nadruk vooral ligt op het visuele. Ik werk hier vaak in een team waarbij ik vooral ook nadacht over wat de klant wil en hoe de code eruit moet zien."
      />
    </section>
  );
};
const Empolyer = (props) => {
  return (
    <div className="employer">
      <div>
        <p>{props.date}</p>
        <em>{props.company}</em>
      </div>
      <div>
        <strong>{props.function}</strong>
        <p>{props.details}</p>
      </div>
    </div>
  );
};
export default Experience;
