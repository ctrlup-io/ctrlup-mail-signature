import { Box, Link, Typography } from "@mui/material";
import { string } from "prop-types";
import React from "react";

const logo = new URL("../static/logo192.png", import.meta.url);

export default function Signature({ name, tel, title }) {
  return (
    <Box m={2} display="flex">
      <Box
        sx={{
          borderRightStyle: "solid",
          borderRightWidth: 1,
          borderRightColor: "primary.main",
        }}
        px={4}
        py={1}
        display="flex"
        alignItems="center"
      >
        <img src={logo} alt="Ctrl Up Logo" height={92} />
      </Box>
      <Box
        sx={{
          borderLeftStyle: "solid",
          borderLeftWidth: 1,
          borderLeftColor: "primary.main",
        }}
        px={4}
        py={1}
        display="flex"
        flexDirection="column"
      >
        <Typography fontWeight={700}>{name}</Typography>
        <Typography mb={2}>{title}</Typography>
        <Box>
          <Link color="secondary" href={`tel:${tel}`}>
            {tel}
          </Link>
          <br />

          <Link color="secondary" href="https://www.ctrlup.io/">
            ctrlup.io
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export const SignatureTypes = {
  name: string.isRequired,
  title: string.isRequired,
  tel: string.isRequired,
};

Signature.propTypes = SignatureTypes;
