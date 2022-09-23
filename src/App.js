import { Button, Container, Grid, TextField } from "@mui/material";
import { CheckCircle, FileCopy } from "@mui/icons-material";
import { ThemeProvider } from "@ctrlup/rainbow-react";
import React, { useRef, useState } from "react";

import Signature from "./Signature";
import theme from "./theme";

function App() {
  const signature = useRef(null);

  const [data, setData] = useState({
    name: "John Doe",
    title: "Super hero",
    tel: "+3316180339",
  });

  const [isCopied, setIsCopied] = useState(false);

  const onChange = (id) => (event) => {
    const value = event.target.value;
    setData((data) => ({ ...data, [id]: value }));
    setIsCopied(false);
  };

  async function copySignatureToClipboard() {
    const html = signature.current.innerHTML.trim();
    const blob = new Blob([html], { type: "text/html" });
    if ("clipboard" in navigator) {
      return await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
    } else {
      console.warn("Clipboard API is not supported.");
    }
  }

  const onCopy = () => {
    copySignatureToClipboard()
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          height="100vh"
          overflow="hidden"
          spacing={12}
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
            <div ref={signature}>
              <Signature {...data} />
            </div>
            <Button
              sx={{ mt: 3 }}
              onClick={onCopy}
              color="primary"
              startIcon={
                isCopied ? <CheckCircle color="primary" /> : <FileCopy />
              }
              variant={isCopied ? "text" : "contained"}
            >
              Copy in clipboard
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
