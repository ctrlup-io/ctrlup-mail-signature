import React, { useState } from "react";
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
} from "@material-ui/core";
import {
  ThemeProvider,
  makeStyles,
  ServerStyleSheets,
} from "@material-ui/core/styles";
import { renderToString } from "react-dom/server";
import { writeText } from "clipboard-polyfill/text";
import { CheckCircle, FileCopy } from "@material-ui/icons";

import Signature from "./Signature";
import theme from "./theme";

function renderHtml(html, css) {
  return `
    <div>
      <style>${css}</style>
      <div>${html}</div>
    </div>
  `;
}

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    overflow: "hidden",
  },
}));

function App() {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "John Doe",
    title: "Super hero",
    tel: "+3316180339",
  });
  const [status, setStatus] = useState(false);
  const onChange = (id) => (event) => {
    const value = event.target.value;
    setData((data) => ({ ...data, [id]: value }));
  };
  const onClick = () => {
    const sheets = new ServerStyleSheets();
    const html = renderToString(
      sheets.collect(
        <ThemeProvider theme={theme}>
          <Signature {...data} />
        </ThemeProvider>
      )
    );
    const css = sheets.toString();
    writeText(renderHtml(html, css)).then(
      () => setStatus(true),
      () => setStatus(false)
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.container}
          spacing={4}
        >
          <Grid
            item
            container
            direction="column"
            spacing={4}
            component="form"
            noValidate
            autoComplete="off"
            xs={6}
          >
            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                id="name"
                value={data?.["name"]}
                label="Name"
                onChange={onChange("name")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                id="title"
                value={data?.["title"]}
                label="Position"
                onChange={onChange("title")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                id="tel"
                value={data?.["tel"]}
                label="Phone number"
                onChange={onChange("tel")}
              />
            </Grid>
          </Grid>
          <Grid item component="div" xs={6}>
            <Signature {...data} />
            <Button
              onClick={onClick}
              startIcon={
                status ? <CheckCircle color="primary" /> : <FileCopy />
              }
              color="primary"
              variant={status ? "text" : "contained"}
            >
              Copy html in clipboard
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
