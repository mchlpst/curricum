import React from "react";
import Heading from "../Components/Heading/Heading";
import LogoSvg from "../Components/Logos/Logos";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <Heading title="Projecten" />
      <Project
        title="AWDTV website"
        description="<p>Al een aantal jaren beheer ik de website van AWDTV. Ik heb de website vanuit de oude WordPress omgezet naar een headless CMS (strapi) en een React voorkant.</p><p>De wens van de club gaat verder dan een aantal nieuwsartikelen plaatsen. Ik heb een koppeling gemaakt met de data van de KNKV om uitslagen, standen, programma's & vrijwilligers te tonen op de website. Ook maak ik gebruik van een Express server om nieuwe leden aan te melden en om een formulier te maken waar de club dat nodig heeft.</p>"
        logos={[
          "react-square",
          "sass-square",
          "graphql-square",
          "express-js-square",
          "heroku-square",
          "aws-square",
          "postgresql-square",
        ]}
      />
      <Project
        title="Brand websites"
        description="<p>Voor ID&T heb ik een modulair & dynamisch platform gebouwd. De wens van de klant was standaard blokken die elke vorm kunnen aannemen.</p><p> Vertaald naar code heb ik blokken gebouwd die altijd dezelfde data binnen krijgen, maar compleet aanpasbaar zijn. Het is ook mogelijk om blokken compleet te vervangen door je eigen custom blok.</p><p>Ook hebben we een eigen <i>lokale cache</i> gebouwd. Dit was de wens van de klant. Ze willen kunnen blijven zien hoe de cache werkt zodat bij problemen het te traceren is.</p>"
        logos={[
          "vue-square",
          "sass-square",
          "nuxt-js-square",
          "graphql-square",
          "heroku-square",
        ]}
      />
      <Project
        title="Queeste der Lage Landen"
        description="<p>Voor de Nederlandse Overheid hebben we een spel gemaakt waarin bepaalde ministeries een spel kregen om hun werk te presenteren. Het doel van de spellen was om potentiële kandidaten aan te trekken om bij de overheid te komen werken.</p><p>Het complete spel werkt met JSON-bestanden. De objecten in de JSON hadden opties waarmee de basis-code reageerde. Zo kon je een nieuwe scene starten na het klikken op een object. Of je kon een animatie triggeren.</p><p>De wens van de klant was een modulair spel waarbij ze relatief makkelijk extra spellen toe konden voegen. Daarom is er gekozen voor JSON bestanden als basis.</p>"
        logos={["vue-square", "sass-square", "nuxt-js-square", "heroku-square"]}
      />
      <Project
        title="Royal Flora Holland"
        description="<p>Dit is een continu ontwikkeling van de website. Naast nieuwe designs die gebouwd worden er extra features of directe informatie vanuit de veiling op de website getoond. Mijn taak is om de nieuwe designs tot interactieve pagina's te bouwen. En de nieuwe informatie goed te tonen op de website.</p><p>De klant stelt hoge eisen als het gaat om de nieuwe functionaliteiten op de website. Naast dat er nieuwe dingen gemaakt worden is het ook belangrijk dat oude code weer opgeruimd wordt. Om een schone codebase te houden, en omdat ik niet de enige developer ben. Is het van groot belang dat we goed documenteren.</p><p>Ik heb me bij dit project de laatste tijd vooral gespitst op de statische pagina's wat dynamischer te maken met animaties en interactieve effecten. Denk aan hover animaties, maar ook scroll effecten.</p>"
        logos={[
          "vue-square",
          "php-square",
          "sass-square",
          "laravel-square",
          "heroku-square",
        ]}
      />
    </section>
  );
};

const Project = (props) => {
  return (
    <section className="project">
      <h3>{props.title}</h3>
      <div
        className="project__description-container"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
      {/* <div>
        <a href
      </div> */}
      <div className="project__logo-container">
        {props.logos.map((logo) => (
          <LogoSvg logo={logo} square />
        ))}
      </div>
    </section>
  );
};
export default Projects;
