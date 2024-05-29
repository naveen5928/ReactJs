export default function ReloadButton() {
  const button = document.createElement("button");
  button.textContent = "Reload page";
  // eslint-disable-next-line no-undef
  button.addEventListener("click", reload);
  document.body.insertAdjacentElement("afterbegin", button);
  return <div>ReloadButton</div>;
}
