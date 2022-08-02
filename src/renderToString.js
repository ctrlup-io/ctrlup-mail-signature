import ReactDOM from "react-dom/server";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default function renderToString(element) {
  const sheets = new ServerStyleSheets();
  const html = ReactDOM.renderToString(sheets.collect(element));
  const css = sheets.toString();
  return `
      <div>
        <style>${css}</style>
        <div>${html}</div>
      </div>
    `;
}
