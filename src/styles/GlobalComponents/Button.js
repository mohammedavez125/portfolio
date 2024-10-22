import React from "react";

import { ButtonBack, ButtonFront } from "./index";
import Link from "next/link";

const Button = (props) => (
  <Link
    href="https://www.linkedin.com/in/mohammed-avez-0a0265226/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
      {props.children}
      <ButtonFront
        alt={props.alt}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </ButtonFront>
    </ButtonBack>
  </Link>
);

export default Button;
