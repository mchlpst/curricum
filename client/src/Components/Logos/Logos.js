import React from "react";

import "./Logos.css";

const LogoSvg = (props) => {
  return (
    <svg
      className={`logo ${props.square ? "logo--square" : null}`}
      viewBox={props.square ? "0 0 24 24" : ""}>
      <use href={`/svg/sprite.svg#${props.logo}`} />
    </svg>
  );
};
export default LogoSvg;
