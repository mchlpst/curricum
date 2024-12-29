import React from "react";
import Heading from "../Components/Heading/Heading";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <Heading title="Contact" />
      <div>
        <div className="inline v-center">
          <img src="./svg/phone.svg" alt="phone logo" className="icon" />
          <p>+ 31 6 39 77 75 55</p>
        </div>
        <div className="inline v-center">
          <img src="./svg/mail.svg" alt="mail logo" className="icon" />
          <p>
            <a href="mailto:hallo@michaelpost.nl">hallo@michaelpost.nl</a>
          </p>
        </div>
        <div className="inline v-center">
          <img src="./svg/github.svg" alt="github logo" className="icon" />
          <p>
            <a href="https://github.com/mchlpst">mchlpst</a>
          </p>
        </div>
        <div className="inline v-center">
          <img src="./svg/home.svg" alt="home logo" className="icon" />
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
