import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(2),
  },
  logo: {
    borderRight: "2px solid #35d330",
  },
  name: {
    fontWeight: 700,
  },
}));

function Signature({ name, tel, title }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <table>
        <tbody>
          <tr>
            <td>
              <Logo alt="Ctrl Up Logo" height={96} />
            </td>
            <td style={{ borderLeft: "2px solid #35d330", paddingLeft: 32 }}>
              <div style={{ fontWeight: 700 }}>{name}</div>
              <div>{title}</div>
              <a
                href={`tel:${tel}`}
                style={{ textDecoration: "none", color: "#35d330" }}
              >
                {tel}
              </a>
              <br />
              <a
                href="https://www.ctrlup.io/"
                style={{ textDecoration: "none", color: "#35d330" }}
              >
                ctrlup.io
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Signature;
