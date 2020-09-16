import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(2),
  },
  logo: {
    borderRight: "2px solid #26a69a",
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
              <img src="logo.png" alt="Ctrl Up Logo" height={96} />
            </td>
            <td style={{ borderLeft: "2px solid #26a69a", paddingLeft: 32 }}>
              <div style={{ fontWeight: 700 }}>{name}</div>
              <div>{title}</div>
              <a
                href={`tel:${tel}`}
                style={{ textDecoration: "none", color: "#26a69a" }}
              >
                {tel}
              </a>
              <br />
              <a
                href="http://ctrlup.io/"
                style={{ textDecoration: "none", color: "#26a69a" }}
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
