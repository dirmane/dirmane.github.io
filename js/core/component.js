export default class Component {
  constructor(type, className, codeIn) {
    this.codeIn = codeIn;
    this.className = className;
    this.type = type;
  }
  get htmlComponent() {
    return this.codeConv();
  }
  codeConv() {
    const temp = document.createElement(`${this.type}`);

    temp.classList.add(`${this.className}`);

    temp.innerHTML = `${this.codeIn}`;

    return temp;
  }
}
