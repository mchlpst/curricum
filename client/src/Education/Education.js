import React from "react";
import Heading from "../Components/Heading/Heading";

import "./Education.css";

const Education = (props) => {
  return (
    <section className="education">
      <Heading title="Opleidingen" />
      <Diploma
        date="2012 - 2016"
        type="Communication, Multimedia & Design"
        level="HBO"
        school="Hogeschool van Amsterdam"
      />
      <Diploma
        date="2020 - 2021"
        type="Personal Training"
        level="MBO niveau 4"
        school="AALO Opleidingen"
      />
      <Diploma
        date="2011 - 2012"
        type="Sport, Management & Ondernemen"
        level="HBO"
        school="Hogeschool van Amsterdam"
      />
    </section>
  );
};

const Diploma = (props) => {
  return (
    <div className="diploma">
      <p>{props.date}</p>
      <p>{props.type}</p>
      <p>{props.level}</p>
      <p>{props.school}</p>
    </div>
  );
};
export default Education;
