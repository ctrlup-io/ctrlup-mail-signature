import renderHtml from "./renderHtml";

export default function renderRef(ref) {
  const styles = Array.from(document.getElementsByTagName("style")).map(
    (style) => style.outerHTML
  );
  const css = styles.join("\n");
  const html = ref.current.innerHTML.trim();
  return renderHtml(html, css);
}
