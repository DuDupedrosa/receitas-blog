// import a function que verifica o click externo
import outsideClick from "./outsideclick.js";

// começa a class do dropdown
export default class DropdownMenu {
  constructor(listElement, classe) {
    this.listElement = document.querySelector(listElement);
    this.classe = classe;
    this.events = ["touchstart", "click"];

    // damos o bind para redirecionar o this
    // para fazer referencia para todo o
    // objeto
    this.onShowDropdown = this.onShowDropdown.bind(this);
  }

  // method que add a class de active mostrando o dropdown
  // e ativando o click outside e removendo a classe de ativo
  // caso ocorra tal evento
  onShowDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.classe);

    // method importado
    outsideClick(element, () => {
      element.classList.remove(this.classe);
    });
  }

  // method que add o event de click no link pai
  // que a lista que segura todo o dropdown
  addEventDropdown() {
    this.events.forEach((event) => {
      this.listElement.addEventListener(event, this.onShowDropdown);
    });
  }

  // method que inicia toda a classe
  // verificando sempre se existe o elemento
  // antes de iniciar o código
  init() {
    if (this.listElement) {
      this.addEventDropdown();
    }
    return this;
  }
}
