import { string } from "prop-types";
import React from "react";

import theme from "./theme";

const logo = new URL("../static/logo192.png", import.meta.url);

export default function Signature({ name, tel, title }) {
  return (
    <div
      style={{
        margin: 8,
        display: "flex",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 4,
          paddingBottom: 4,
          borderRightStyle: "solid",
          borderRightWidth: 1,
          borderRightColor: theme.palette.primary.main,
          alignItems: "center",
        }}
      >
        <img src={logo} alt="Ctrl Up Logo" height={92} />
      </div>
      <div
        style={{
          borderLeftStyle: "solid",
          borderLeftWidth: 1,
          borderLeftColor: theme.palette.primary.main,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 4,
          paddingBottom: 4,
        }}
      >
        <div style={{ fontWeight: 700 }}>{name}</div>
        <div style={{ marginBottom: 8 }}>{title}</div>
        <div>
          <a
            style={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textDecorationColor: theme.palette.primary.main,
            }}
            href={`tel:${tel}`}
          >
            {tel}
          </a>
          <br />
          <a
            style={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              textDecorationColor: theme.palette.primary.main,
            }}
            href="https://www.ctrlup.io/"
          >
            ctrlup.io
          </a>
        </div>
      </div>
    </div>
  );
}

export const SignatureTypes = {
  name: string.isRequired,
  title: string.isRequired,
  tel: string.isRequired,
};

Signature.propTypes = SignatureTypes;
