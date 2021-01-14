import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#35d330",
      light: "#76ff64",
      dark: "#00a000",
      contrastText: "#000",
    },
    secondary: {
      main: "#400099",
      light: "#7638cb",
      dark: "#00006a",
      contrastText: "#fff",
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
