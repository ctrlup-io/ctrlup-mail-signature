export default function renderHtml(html, css) {
  return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
              <link
                  href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Montserrat:wght@400;700&display=swap"
                  rel="stylesheet"
              />
              ${css}
          </head>
          <body>
            ${html}
          </body>
        </html>
      `;
}
