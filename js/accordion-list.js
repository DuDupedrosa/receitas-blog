export default class AccordionList {
  constructor(title, classeTitle, classeList) {
    this.titleList = document.querySelectorAll(title);
    this.classeTitle = classeTitle;
    this.classeList = classeList;
    this.events = ["click", "touchstart"];

    this.onShowContent = this.onShowContent.bind(this);
  }

  // method que seleciona o titulo que ocorreu
  // o click e adiciona a classe de ativo
  // nele e no próximo elemento, que deve ser
  // sempre a definição da lista e também add
  // a classe de ativo para poder receber os
  // estilos via css
  onShowContent(event) {
    event.preventDefault();
    event.target.classList.toggle(this.classeTitle);
    // busca o proximo que deve ser sempre a definição
    // da question
    this.conntentList = event.target.nextElementSibling;
    this.conntentList.classList.toggle(this.classeList);
  }

  addEventTitle() {
    this.events.forEach((event) => {
      [...this.titleList].forEach((title) => {
        title.addEventListener(event, this.onShowContent);
      });
    });
  }

  init() {
    if (this.titleList.length) {
      // sempre iniciando a accordion list
      // com a classe de ativo no primeiro item
      // para facilitar a visualização da lista de
      // definição pelo usuário
      this.titleList[0].classList.add(this.classeTitle);
      this.titleList[0].nextElementSibling.classList.add(this.classeList);
      this.addEventTitle();
    }
    return this;
  }
}
