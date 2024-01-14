import {
  faAt,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Heading from "../Components/Heading/Heading";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <Heading title="Contact" />
      <div>
        <div className="inline v-center">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <p>+ 31 6 39 77 75 55</p>
        </div>
        <div className="inline v-center">
          <FontAwesomeIcon icon={faAt} className="icon" />
          <p>
            <a href="mailto:hallo@michaelpost.nl">hallo@michaelpost.nl</a>
          </p>
        </div>
        <div className="inline v-center">
          <FontAwesomeIcon icon={faGithub} className="icon" />
          <p>
            <a href="https://github.com/mchlpst">mchlpst</a>
          </p>
        </div>
        <div className="inline v-center">
          <FontAwesomeIcon icon={faLocationDot} className="icon" />
          <p>
            Laplacestraat 57-H
            <br /> 1098 HS Amsterdam
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
