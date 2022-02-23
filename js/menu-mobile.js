import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(button, boxNav, classe) {
    this.button = document.querySelector(button);
    this.menu = document.querySelector(boxNav);
    this.classe = classe;
    this.events = ["touchstart", "click"];

    // redireciona o this para toda a classe
    this.showMenuMobile = this.showMenuMobile.bind(this);
  }

  // method que ativa o menu mobile
  // e em seguida aciona callback
  // que verifica o click outside e retira
  // o menu m
  showMenuMobile(event) {
    event.preventDefault();
    this.menu.classList.toggle(this.classe);

    // method importado que verifica
    // quando ocorre o click outside
    outsideClick(this.menu, () => {
      this.menu.classList.remove(this.classe);
    });
  }

  // add os event ao button
  addEventInTheButton() {
    this.events.forEach((event) => {
      this.button.addEventListener(event, this.showMenuMobile);
    });
  }

  init() {
    if (this.button && this.menu) {
      this.addEventInTheButton();
    }
    return this;
  }
}
