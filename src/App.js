import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
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
import * as clipboard from "clipboard-polyfill";
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

function renderToHtml(data) {
  const sheets = new ServerStyleSheets();
  const html = renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <Signature {...data} />
      </ThemeProvider>
    )
  );
  const css = sheets.toString();
  const document = renderHtml(html, css);
  return document;
}

function App() {
  const classes = useStyles();
  const [data, setData] = useState({
    name: "John Doe",
    title: "Super hero",
    tel: "+3316180339",
  });
  const [statusHtml, setStatusHtml] = useState(false);
  const [statusBlob, setStatusBlob] = useState(false);
  const onChange = (id) => (event) => {
    const value = event.target.value;
    setData((data) => ({ ...data, [id]: value }));
    setStatusHtml(false);
    setStatusBlob(false);
  };

  const onCopyHtml = () => {
    const document = renderToHtml(data);
    clipboard.writeText(document).then(
      () => {
        setStatusBlob(false);
        setStatusHtml(true);
      },
      () => setStatusHtml(false)
    );
  };

  const onCopyBlob = () => {
    const document = renderToHtml(data);
    const blob = new Blob([document], { type: "text/html" });
    clipboard.write([new clipboard.ClipboardItem({ "text/html": blob })]).then(
      () => {
        setStatusHtml(false);
        setStatusBlob(true);
      },
      () => setStatusBlob(false)
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
                value={data?.name}
                label="Name"
                onChange={onChange("name")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                id="title"
                value={data?.title}
                label="Position"
                onChange={onChange("title")}
              />
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant="outlined"
                id="tel"
                value={data?.tel}
                label="Phone number"
                onChange={onChange("tel")}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Signature {...data} />
            <ButtonGroup color="primary">
              <Button
                onClick={onCopyHtml}
                startIcon={
                  statusHtml ? <CheckCircle color="primary" /> : <FileCopy />
                }
                variant={statusHtml ? "text" : "contained"}
              >
                Copy html in clipboard
              </Button>
              <Button
                onClick={onCopyBlob}
                startIcon={
                  statusBlob ? <CheckCircle color="primary" /> : <FileCopy />
                }
                variant={statusBlob ? "text" : "contained"}
              >
                Copy image in clipboard
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
