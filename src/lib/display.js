export default {
  printLine(text) {
    const element = document.createElement("p");
    element.append(text);
    document.getElementById("root").prepend(element);
  },
};
