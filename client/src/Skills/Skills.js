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
        logos={["typescript-square", "javascript-square", "php-square"]}
      />
      <SkillContainer
        title="Front-end talen"
        logos={["react-square", "vue-square", "sass-square"]}
      />
      <SkillContainer
        title="Back-end talen"
        logos={[
          "next-js-square",
          "nuxt-js-square",
          "express-js-square",
          "laravel-square",
          "node-js-square",
          "graphql-square",
          "apollo-square",
        ]}
      />
      <SkillContainer title="Cloud" logos={["aws-square", "heroku-square"]} />
      <SkillContainer
        title="Databases"
        logos={["mongo-db-square", "postgresql-square", "mysql-square"]}
      />
    </section>
  );
};

const SkillContainer = (props) => {
  return (
    <section className="skill__container">
      <h3 className="skill__title">{props.title}</h3>
      <div className="skill__logo-container">
        {props.logos.map((logo) => (
          <LogoSvg logo={logo} square />
        ))}
      </div>
    </section>
  );
};
export default Skills;
