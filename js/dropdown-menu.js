export default class DropdownMenu {
  constructor(link, list) {
    this.getDropdownButton = document.querySelector(link);
    this.getDropdownList = document.querySelector(list);
    this.getAllDocument = document.documentElement;
    this.events = ["touchstart", "click"];

    this.onShowDropdown = this.onShowDropdown.bind(this);
    this.offShowDropdown = this.offShowDropdown.bind(this);
    this.tirandoEvento = this.offShowDropdown.bind(this);
  }

  // method que add a classe de ativo no menu dropdown
  // prevenindo todos os padrões antes
  onShowDropdown(event) {
    event.preventDefault();
    this.getDropdownList.classList.add("active");
  }

  // method que verifica se o click foi outside executando a ação
  // somente quando ocorre click outside
  offShowDropdown(event) {
    if (
      !this.getDropdownList.contains(event.target) &&
      !this.getDropdownButton.contains(event.target)
    ) {
      this.getDropdownList.classList.remove("active");
    }
  }

  // adiciona os eventos de click no button principal
  // e também no html para fazer a execução do click
  // outside
  addEventDropdown() {
    this.events.forEach((evento) =>
      this.getDropdownButton.addEventListener(evento, this.onShowDropdown)
    );
    this.events.forEach((evento) =>
      this.getAllDocument.addEventListener(evento, this.offShowDropdown)
    );
  }

  init() {
    if (this.getDropdownButton) {
      this.addEventDropdown();
    }
    return this;
  }
}
