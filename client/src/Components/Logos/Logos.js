import React from "react";

import "./Logos.css";

const logoList = {
  typescript: {
    name: "Typescript",
    logo: "typescript-square",
  },
  javascript: {
    name: "Javascript",
    logo: "javascript-square",
  },
  php: {
    name: "PHP",
    logo: "php-square",
  },
  react: {
    name: "React",
    logo: "react-square",
  },
  vue: {
    name: "Vue",
    logo: "vue-square",
  },
  nuxt: {
    name: "Nuxt",
    logo: "nuxt-js-square",
  },
  sass: {
    name: "Sass",
    logo: "sass-square",
  },
  graphql: {
    name: "GraphQL",
    logo: "graphql-square",
  },
  laravel: {
    name: "Laravel",
    logo: "laravel-square",
  },
  heroku: {
    name: "Heroku",
    logo: "heroku-square",
  },
  next: {
    name: "Next",
    logo: "next-js-square",
  },
  node: {
    name: "Node",
    logo: "node-js-square",
  },
  express: {
    name: "Express",
    logo: "express-square",
  },
  aws: {
    name: "AWS",
    logo: "aws-square",
  },
  postgresql: {
    name: "PostgreSQL",
    logo: "postgresql-square",
  },
  mongodb: {
    name: "MongoDB",
    logo: "mongodb-square",
  },
  postgres: {
    name: "Postgres",
    logo: "postgres-square",
  },
  mysql: {
    name: "MySQL",
    logo: "mysql-square",
  },
  apollo: {
    name: "Apollo",
    logo: "apollo-square",
  },
};

const LogoSvg = (props) => {
  if (!logoList[props.logo]) {
    return null;
  }
  return (
    <svg
      className={`logo ${logoList[props.logo].logo ? "logo--square" : null}`}
      viewBox={props.square ? "0 0 24 24" : ""}>
      <title>{logoList[props.logo].name}</title>
      <use href={`/svg/sprite.svg#${logoList[props.logo].logo}`} />
    </svg>
  );
};
export default LogoSvg;
