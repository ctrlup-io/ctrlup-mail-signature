import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
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
                href="tel:+33627916220"
                style={{ textDecoration: "none", color: "#26a69a" }}
              >
                +33 6 27 91 62 20
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
      {/* <Grid container spacing={4} wrap="nowrap" alignItems="center">
        <Grid item className={classes.logo}></Grid>
        <Grid item>
          <Typography className={classes.name}>{name}</Typography>
          <Typography>{title}</Typography>
          <br />
          <Typography>
            <Link type="tel" href={`tel:${tel}`}>
              {tel}
            </Link>
          </Typography>
          <Typography>
            <Link href="https://ctrlup.io/" target="_blank">
              ctrlup.io
            </Link>
          </Typography>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default Signature;
