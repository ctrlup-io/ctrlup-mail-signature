export default async function copySignatureToClipboard(ref) {
  const html = ref.current.innerHTML.trim();
  const blob = new Blob([html], { type: "text/html" });
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
