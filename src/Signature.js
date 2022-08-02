import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
  },
  name: {
    fontWeight: 700,
  },
  logo: {
    borderRightStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: theme.palette.primary.main,
  },
  text: {
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    borderLeftColor: theme.palette.primary.main,
  },
}));

function Signature({ name, tel, title }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item className={classes.logo}>
          <img src="logo64.png" alt="Ctrl Up Logo" height={64} />
        </Grid>
        <Grid item className={classes.text}>
          {name && <Typography className={classes.name}>{name}</Typography>}
          {title && <Typography>{title}</Typography>}
          {tel && (
            <Typography>
              <Link href={`tel:${tel}`}>{tel}</Link>
              <br />
              <Link href="https://www.ctrlup.io/">ctrlup.io</Link>
            </Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Signature;
