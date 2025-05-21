import React from "react";
import Heading from "../Components/Heading/Heading";

import "./Skills.css";
import LogoSvg from "../Components/Logos/Logos";

const Skills = () => {
  return (
    <section className="skills">
      <Heading title="Vaardigheden" />
      <SkillContainer
        title="Programmeer talen"
        logos={["typescript", "javascript", "php"]}
      />
      <SkillContainer
        title="Front-end talen"
        logos={["react", "vue", "sass"]}
      />
      <SkillContainer
        title="Back-end talen"
        logos={[
          "next-js",
          "nuxt-js",
          "express-js",
          "laravel",
          "node-js",
          "graphql",
          "apollo",
        ]}
      />
      <SkillContainer title="Cloud" logos={["aws", "heroku"]} />
      <SkillContainer
        title="Databases"
        logos={["mongo-db", "postgresql", "mysql"]}
      />
    </section>
  );
};

const SkillContainer = (props) => {
  return (
    <section className="skill__container">
      <h3 className="skill__title">{props.title}</h3>
      <div className="skill__logo-container">
        {props.logos.map((logo, index) => (
          <React.Fragment key={index}>
            <LogoSvg logo={logo} square />
            <p className="skill__logo-text">{logo}</p>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
export default Skills;
