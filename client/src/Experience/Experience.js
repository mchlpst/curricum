import React from "react";
import Heading from "../Components/Heading/Heading";

import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <Heading title="Ervaring" />
      <Empolyer
        date="2021 - heden"
        company="Onetribe / NOISE"
        function="Front end developer"
        details="Mijn taken bij deze werkgever zijn vooral het bouwen van het CMS samen met de voorkant die de eindgebruiker te zien krijgt. Dit doe ik vooral met Vue.js, Nuxt.js, GraphQL, Laravel, PHP. De werkzaamheden lopen erg uiteen. Ik overleg met designers hoe hun ontwerp interactief wordt. Daarnaast proberen we de grenzen van de browsers op te zoeken door te werken met Javascript Canvas, of door complete blokken data met javascript lokaal te cachen voor efficiënte en snelle rendertijden. "
      />
      <Empolyer
        date="2019 - 2021"
        company="Propeller"
        function="Client support"
        details="Propeller is een complete webshop zoals shopify. Mijn werk hier was vooral vragen van de klant opvangen en eventuele aanpassingen aan de voorkant van de website bouwen. Dit deed ik een team van zowel Nederlandse als Noord-Macedonische collega's. Het meeste heb ik hier gewerkt met HTML5, SASS & Vanilla Javascript. Ik was hier het eerste aanspreekpunt en moest ook de lijnen uitzetten naar de rest van de collega's."
      />
      <Empolyer
        date="2018 - 2019"
        company="uButler"
        function="Full-stack Developer"
        details="Hier was de wens de wens vooral om een soort WhatsApp chat te bouwen. Dit is gebouwd met React en React Native. De app is gekoppeld aan een Apollo server met MongoDB database. Mijn werk was vooral de chatapp moderner maken en efficiënter. Daarnaast was uButler in deze fase nog een startup. Daarbij waren mijn taken breder dan alleen code schrijven. Ik moest ook (UX)designs maken. En de stippen op de horizon uitzetten."
      />
      <Empolyer
        date="2015 - 2018"
        company="The Valley"
        function="Front End Developer"
        details="In mijn tijd hier ben ik begonnen met het maken van custom emails met CSS 3 en html5. Ons doel was om de grenzen binnen emails te zoeken en de klant (Goede Doelen Loterij) de meest waanzinnige resultaten te geven. Daarnaast heb ik projecten gedaan waarbij we op de scrum methode nieuwe websites bouwden voor AkzoNobel. Dit deden we vooral met jQuery, HTML5, SASS."
      />
      <Heading title="Part-time" />
      <Empolyer
        date="2015 - 2020"
        company="de Marktkantine"
        function="Floor manager"
        details="Naast mijn werk als developer heb ik in de weekenden gewerkt in een nachtclub. Hier was ik op een avond verantwoordelijk voor ~30 werknemers en was ik het aanspreekpunt voor de gasten. Mijn taken in de nacht waren ervoor zorgen dat alle bevoorraad waren en de zalen werden schoongemaakt. Ook deed ik aan crowdmanagement om de gasten naar bepaalde gebieden te begeleiden of hen daaruit te halen. Hier heb ik voor aan mijn communicatieve vaardigheden ontwikkeld, maar ook hoe je een team aanstuurt."
      />
    </section>
  );
};
const Empolyer = (props) => {
  return (
    <div className="employer">
      <div className="employer__specs">
        <p>{props.date}</p>
        <em>{props.company}</em>
      </div>
      <div className="employer__info">
        <h4>{props.function}</h4>
        <p>{props.details}</p>
      </div>
    </div>
  );
};
export default Experience;
