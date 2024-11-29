import React from "react";
import Heading from "../Components/Heading/Heading";
import Rate from "../Components/Rate/Rate";

import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <Heading title="Vaardigheden" />
      <div className="inline">
        <p>ES6</p>
        <Rate type="dots" rate={4} />
      </div>
      <div className="inline">
        <p>REACT</p>
        <Rate type="dots" rate={4} />
      </div>
      <div className="inline">
        <p>Sass</p>
        <Rate type="dots" rate={5} />
      </div>
      <div className="inline">
        <p>Typescript</p>
        <Rate type="dots" rate={3} />
      </div>
      <div className="inline">
        <p>Vue</p>
        <Rate type="dots" rate={5} />
      </div>
      <div className="inline">
        <p>Nuxt.js</p>
        <Rate type="dots" rate={5} />
      </div>
      <div className="inline">
        <p>GraphQL</p>
        <Rate type="dots" rate={5} />
      </div>
      <div className="inline">
        <p>Express.js</p>
        <Rate type="dots" rate={3} />
      </div>
      <div className="inline">
        <p>PHP</p>
        <Rate type="dots" rate={3} />
      </div>
      <div className="inline">
        <p>Git</p>
        <Rate type="dots" rate={4} />
      </div>
      <div className="inline">
        <p>Node.js</p>
        <Rate type="dots" rate={4} />
      </div>
    </section>
  );
};
export default Skills;
