import React from "react";
import Avatar from "../Components/Avatar/Avatar";

import "./Information.css";

const Information = () => {
  return (
    <header>
      <section>
        <Avatar />
      </section>
      <section>
        <h1>Michael Post</h1>
        <h4>Front-end developer</h4>
      </section>
    </header>
  );
};
export default Information;
