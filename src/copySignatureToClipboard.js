import renderRef from "./renderRef";

export default async function copySignatureToClipboard(ref) {
  const text = renderRef(ref);
  console.log(text);
  const blob = new Blob([text], { type: "text/html" });
  if ("clipboard" in navigator) {
    await navigator.clipboard.write([
      new window.ClipboardItem({
        [blob.type]: blob,
      }),
    ]);
  } else {
    console.warn("Clipboard API is not supported.");
  }
}
