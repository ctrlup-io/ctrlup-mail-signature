import { Container, Grid } from "@mui/material";
import { ThemeProvider } from "@ctrlup/rainbow-react";
import React, { useRef, useState } from "react";

import Signature from "./Signature";
import theme from "./theme";
import Form from "./Form";
import copySignatureToClipboard from "./copySignatureToClipboard";
import CopyButton from "./CopyButton";

export default function App() {
  const signature = useRef(null);

  const [isCopied, setIsCopied] = useState(false);

  const [data, setData] = useState({
    name: "John Doe",
    title: "Super hero",
    tel: "+3316180339",
  });

  const onChange = (id) => (event) => {
    const value = event.target.value;
    setData((data) => ({ ...data, [id]: value }));
    setIsCopied(false);
  };

  const onCopy = async () => {
    try {
      await copySignatureToClipboard(signature);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    } catch (err) {
      console.warn(err);
    }
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
          spacing={6}
        >
          <Grid item xs={6}>
            <Form data={data} onChange={onChange} />
          </Grid>
          <Grid
            item
            xs={6}
            container
            direction="column"
            spacing={3}
            alignItems="center"
          >
            <Grid item ref={signature}>
              <Signature {...data} />
            </Grid>
            <Grid item>
              <CopyButton isCopied={isCopied} onCopy={onCopy} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
