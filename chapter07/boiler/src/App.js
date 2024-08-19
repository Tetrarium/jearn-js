import { Container } from "./components/container.js";

export default function App(elementId) {
  this.element = document.getElementById(elementId);

  const container = new Container();
  container.appendTo(this.element);
}