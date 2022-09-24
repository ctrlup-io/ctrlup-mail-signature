import { colors, theme } from "@ctrlup/rainbow-react";
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme(theme, {
  palette: {
    mode: "light",
    primary: {
      main: colors.BLACK[800],
    },
    common: {
      white: colors.WHITE[50],
      black: colors.BLACK[800],
    },
    text: {
      primary: colors.BLACK[800],
      secondary: colors.BLACK[700],
    },
    background: {
      default: colors.WHITE[100],
      paper: colors.WHITE[100],
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          background: null,
          WebkitBackgroundClip: null,
          MozBackgroundClip: null,
          WebkitTextFillColor: null,
          MozTextFillColor: null,
        },
      },
    },
  },
});

export default muiTheme;
