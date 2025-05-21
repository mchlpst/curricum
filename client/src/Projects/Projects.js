import React from "react";
import Heading from "../Components/Heading/Heading";
import LogoSvg from "../Components/Logos/Logos";

import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <Heading title="Projecten" />
      <Project
        title="Brand websites"
        company="Onetribe/ NOISE"
        duration="1 jaar, 5 dagen per week"
        description="<p>
    Voor ID&T heb ik een modulair platform ontwikkeld met <strong>Vue 3</strong>, <strong>Nuxt 3</strong>, <strong>TypeScript</strong> en <strong>GraphQL</strong>. De klant wilde standaard blokken die flexibel inzetbaar zijn en eenvoudig vervangen kunnen worden door custom componenten. Hiervoor heb ik een dynamisch componentensysteem opgezet waarin elk blok via gestandaardiseerde GraphQL-data wordt aangestuurd. Dit maakt het mogelijk om blokken qua layout en functionaliteit volledig aan te passen, terwijl de data-interface uniform blijft<sup>[2][3][4][5]</sup>.
  </p>
  <p>
    Een belangrijk onderdeel van het platform is de implementatie van een lokale cache. Op verzoek van de klant heb ik een caching-mechanisme ontwikkeld dat data lokaal op het device opslaat (bijvoorbeeld via <code>IndexedDB</code> of <code>localStorage</code>). Hierdoor blijft de performance van het platform hoog, ook tijdens piekuren, omdat veelgevraagde data direct lokaal beschikbaar is en niet telkens via het netwerk hoeft te worden opgehaald. De cache is inzichtelijk en te monitoren, zodat eventuele problemen eenvoudig te traceren zijn.
  </p>
  <p>
    Mijn voornaamste focus binnen dit project lag op het ontwerpen, implementeren en optimaliseren van deze cache-laag, inclusief opslagstrategie, invalidatielogica en monitoringtools.
  </p>
  <section>
    <h3>Gebruikte technieken</h3>
    <ul>
      <li><strong>Frontend:</strong> Vue 3, Nuxt 3, TypeScript</li>
      <li><strong>Data:</strong> GraphQL (Apollo Client)</li>
      <li><strong>Component architectuur:</strong> Dynamische, data-driven blokken met mogelijkheid voor custom extensies</li>
      <li><strong>Cache:</strong> Lokale opslag (IndexedDB / localStorage), cache-invalidering, monitoring en debugging</li>
      <li><strong>Performance:</strong> Optimalisatie voor hoge piekbelasting door lokale dataopslag</li>
    </ul>
  </section>
</section>"
      />
      <Project
        title="Queeste der Lage Landen"
        duration="3x 3 maanden, 3 dagen per week"
        company="Onetribe/ NOISE"
        description="<p>
    Voor de Nederlandse Overheid heb ik meegewerkt aan de ontwikkeling van een modulair spelplatform, waarmee verschillende ministeries hun werk op een interactieve manier kunnen presenteren. Het doel was om potentiële kandidaten te enthousiasmeren voor een carrière bij de overheid.
  </p>
  <p>
    De architectuur van het platform is volledig data-driven opgezet. Elk spel en de bijbehorende logica worden gedefinieerd in gestructureerde <strong>JSON-bestanden</strong>. Deze JSON-objecten bevatten configuratie-opties waarmee de basis-engine dynamisch reageert; zo kunnen bijvoorbeeld nieuwe scenes worden gestart na een klik op een object, of kunnen animaties en interacties worden getriggerd zonder dat er extra code aan de basis hoeft te worden toegevoegd.
  </p>
  <p>
    Omdat de klant eenvoudig nieuwe spellen wilde kunnen toevoegen of bestaande spellen wilde aanpassen, is gekozen voor deze modulaire aanpak met JSON als centrale bron van waarheid. Hierdoor kunnen nieuwe spellen of scenario’s worden uitgerold door simpelweg nieuwe JSON-configuraties aan te leveren, zonder wijzigingen in de core codebase.
  </p>
  <section>
    <h3>Technische highlights</h3>
    <ul>
      <li>Data-driven architectuur met JSON-configuraties</li>
      <li>Dynamische scene-switching en event-handling op basis van JSON-objecten</li>
      <li>Modulaire opzet: eenvoudig uitbreidbaar met nieuwe spellen en scenario’s</li>
      <li>Separation of concerns: spelcontent en logica gescheiden van de core engine</li>
    </ul>
  </section>
  <p>
    Deze aanpak maakt het platform schaalbaar, onderhoudbaar en flexibel voor toekomstige uitbreidingen.
  </p>
</section>"
      />
      <Project
        title="Royal Flora Holland"
        duration="1,5 jaar, 3-4 dagen per week"
        company="Onetribe/ NOISE"
        description="<p>
    Binnen dit project ben ik verantwoordelijk voor de continue ontwikkeling en optimalisatie van de website. Naast het realiseren van nieuwe designs en features, zorg ik ervoor dat actuele informatie – zoals real-time veilingdata – direct en overzichtelijk op de website wordt getoond. Mijn werkzaamheden richten zich op het bouwen van interactieve pagina’s en het dynamisch presenteren van nieuwe content.
  </p>
  <p>
    De klant stelt hoge eisen aan zowel nieuwe functionaliteiten als aan de kwaliteit en onderhoudbaarheid van de codebase. Daarom besteed ik veel aandacht aan het refactoren en opschonen van legacy code, en zorg ik samen met het team voor goede documentatie en duidelijke code-standaarden.
  </p>
  <p>
    Een belangrijk onderdeel van mijn werk is de technische modernisering van het platform. Ik heb de volledige migratie van de frontend-stack van <strong>Vue 2 naar Vue 3</strong> uitgevoerd, inclusief het oplossen van breaking changes en het herstructureren van componenten naar de Composition API. Tegelijkertijd heb ik de build-tooling gemigreerd van Webpack naar <strong>Vite</strong>, waarmee de ontwikkelervaring en build-prestaties aanzienlijk zijn verbeterd.
  </p>
  <p>
    Daarnaast hebben we een gefaseerde rebranding doorgevoerd: de website wordt stap voor stap vernieuwd, waarbij oude en nieuwe componenten tijdelijk naast elkaar bestaan. Zo blijft de site continu beschikbaar voor gebruikers en verloopt de overgang soepel.
  </p>
  <p>
    Recentelijk heb ik me ook gericht op het toevoegen van animaties en interactieve effecten, zoals hover- en scroll-animaties, om de gebruikerservaring verder te verbeteren.
  </p>
  <section>
    <h3>Technische highlights</h3>
    <ul>
      <li>Migratie van Vue 2 naar Vue 3 (inclusief Composition API)</li>
      <li>Overstap van Webpack naar Vite als build-tool</li>
      <li>Gefaseerde rebranding: stapsgewijze vervanging van oude componenten</li>
      <li>Implementatie van nieuwe designs als interactieve pagina’s</li>
      <li>Integratie van real-time veilingdata en andere dynamische content</li>
      <li>Refactoring en opschonen van legacy code voor een onderhoudbare codebase</li>
      <li>Toevoegen van animaties en interactieve effecten (hover, scroll, etc.)</li>
      <li>Samenwerking in teamverband met focus op documentatie en codekwaliteit</li>
    </ul>
  </section>"
      />
      <Project
        title="Van A naar Beter"
        duration="2x 3 maanden, 3 dagen per week"
        company="Onetribe/ NOISE"
        description="  <p>
    Voor Van A naar Beter heb ik samen met een designer een toegankelijke webapplicatie ontwikkeld die losstaat van de bestaande Rijkswaterstaat-omgeving. De klant wilde een eenvoudige en snelle tool waarmee gebruikers direct kunnen zien of er wegwerkzaamheden zijn op hun route.
  </p>
  <p>
    Omdat er geen toegang was tot de officiële Rijkswaterstaat API, hebben we gekozen voor een zelfstandige oplossing. De applicatie is opgebouwd met een <strong>Vue 2</strong> frontend en een <strong>Laravel (PHP)</strong> backend, waarmee we een snelle en responsieve gebruikerservaring konden realiseren.
  </p>
  <p>
    Digitale toegankelijkheid was een belangrijk aandachtspunt. Omdat het een overheidswebsite betreft, hebben we vanaf het begin rekening gehouden met WCAG-richtlijnen en best practices op het gebied van toegankelijkheid. De website is daardoor goed bruikbaar voor mensen met een lichamelijke beperking, bijvoorbeeld door ondersteuning van toetsenbordnavigatie, duidelijke contrasten en screenreader-compatibiliteit.
  </p>
  <section>
    <h3>Technische highlights</h3>
    <ul>
      <li>Zelfstandige webapplicatie, los van Rijkswaterstaat.nl</li>
      <li>Frontend: Vue 2</li>
      <li>Backend: Laravel (PHP)</li>
      <li>Eenvoudige, snelle user flow voor het opvragen van wegwerkzaamheden</li>
      <li>Volledige focus op toegankelijkheid (WCAG, keyboard support, screenreader-compatibiliteit)</li>
      <li>Ontwikkeling in nauwe samenwerking met een designer</li>
    </ul>
  </section>"
      />
      <Project
        title="Vista Hypotheken"
        duration="4 maanden, 5 dagen per week"
        company="Onetribe/ NOISE"
        description="  <p>
    Voor Vista Hypotheken heb ik een compleet nieuwe website ontwikkeld, waarbij de oude, verouderde site volledig is vervangen. De nieuwe website is vanaf de basis opgebouwd met <strong>Vue 3</strong> en <strong>TypeScript</strong>, wat zorgt voor een moderne, schaalbare en onderhoudbare frontend-architectuur.
  </p>
  <p>
    Bij het ontwikkelen van de componenten heb ik veel aandacht besteed aan herbruikbaarheid en consistentie, onder andere door gebruik te maken van een eigen design system en strikte typisering met TypeScript. Voor state management is gekozen voor Pinia, en de applicatie maakt gebruik van asynchrone datahandling via Axios.
  </p>
  <p>
    Toegankelijkheid was een belangrijke eis van de klant. Daarom heb ik de volledige website ontwikkeld volgens de <strong>WCAG-richtlijnen</strong>. Denk hierbij aan semantische HTML, toetsenbordnavigatie, voldoende kleurcontrast, ARIA-labels en ondersteuning voor screenreaders. Daarnaast zijn er diverse visuele optimalisaties doorgevoerd, zoals responsieve layouts, animaties en interactieve elementen die ook toegankelijk zijn voor gebruikers met een beperking.
  </p>
  <section>
    <h3>Gebruikte technieken en aanpassingen</h3>
    <ul>
      <li>Frontend: Vue 3, TypeScript, Pinia voor state management, Axios voor API-requests</li>
      <li>Design system met herbruikbare componenten</li>
      <li>Volledige implementatie van WCAG-standaarden (semantische HTML, ARIA, kleurcontrast, toetsenbordnavigatie)</li>
      <li>Responsieve en toegankelijke user interface</li>
      <li>Visuele optimalisaties en toegankelijke animaties</li>
    </ul>
  </section>"
      />
      <Project
        title="AWDTV website"
        company="Zelfstandig"
        duration="2 jaar"
        description="<p>
    Sinds enkele jaren ben ik verantwoordelijk voor het beheer en de doorontwikkeling van de website van AWDTV. Ik heb de oude WordPress-omgeving gemigreerd naar een moderne headless architectuur, bestaande uit <strong>Strapi</strong> als headless CMS en een <strong>React</strong>-gebaseerde frontend.
  </p>
  <p>
    Een belangrijk technisch aspect is de manier waarop de data wordt ontsloten. Binnen de <strong>Express.js-server</strong> heb ik een aggregatielaag gebouwd die data uit verschillende bronnen ophaalt en samenvoegt. Wanneer de frontend een verzoek doet, haalt de Express-server zowel content uit het <strong>Strapi CMS</strong> als wedstrijddata uit meerdere <strong>KNKV-endpoints</strong> op. Deze data wordt gecombineerd tot één gestructureerd object, dat als response aan de frontend wordt teruggegeven. Hierdoor hoeft de frontend slechts één API-call te doen om alle benodigde informatie te ontvangen, wat de performance en het beheer vereenvoudigt.
  </p>
  <section>
    <h3>Gebruikte technieken</h3>
    <ul>
      <li><strong>Frontend:</strong> React, JavaScript (ES6+), Axios voor API-communicatie</li>
      <li><strong>Backend:</strong> Strapi (headless CMS), Node.js, Express.js</li>
      <li><strong>Integraties:</strong> Aggregatie van CMS-content en externe KNKV-data in Express, combineren van responses tot één API-object</li>
      <li><strong>Overige:</strong> Middleware voor validatie en beveiliging, JWT-authenticatie, deployment via Docker en CI/CD pipelines</li>
    </ul>
  </section>
  <p>
    Deze architectuur zorgt voor een centrale logica en consistente data, en maakt het eenvoudig om toekomstige bronnen toe te voegen of te wijzigen.
  </p>
</section>"
      />
    </section>
  );
};

const Project = (props) => {
  return (
    <section className="project">
      <div className="project__specs">
        <h3>{props.title}</h3>
        <em>{props.company}</em>
      </div>
      <div className="project__details">
        <p>Duur van project: {props.duration}</p>
      </div>
      <div
        className="project__description-container"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
      {props.logos && (
        <>
          <h3 className="project__skill-title">Technieken</h3>
          <div className="project__logo-container">
            {props.logos.map((logo) => (
              <>
                <LogoSvg logo={logo} square />
                <p className="project__logo-text">{logo}</p>
              </>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
export default Projects;
