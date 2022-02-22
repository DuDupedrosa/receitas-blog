export default class ScrollSuave {
  constructor(linksIntern, options) {
    this.linksIntern = document.querySelectorAll(linksIntern);
    this.events = ["touchstart", "click"];

    // verificando se foi passado as options
    // caso não seja vai os alores pré-definidos
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    // dando o bind para redirecionar o this
    // a toda a classe
    this.onScrollSuave = this.onScrollSuave.bind(this);
  }

  // method que puxa o target do click
  // pegando somente o href e buscando
  // pela section correspondente e dando
  // inicio ao scroll suave
  onScrollSuave(event) {
    event.preventDefault();
    this.getHrefOfLink = event.target.getAttribute("href");
    this.getSection = document.querySelector(this.getHrefOfLink);
    this.getSection.scrollIntoView(this.options);
  }

  // add os eventos aos links
  // eventos de click e de touchstart
  addEventInTheLinks() {
    this.events.forEach((event) => {
      [...this.linksIntern].forEach((link) => {
        link.addEventListener(event, this.onScrollSuave);
      });
    });
  }

  // method que inicia toda a classe
  // fazendo a verificação para caso tenha na página o atributo
  // evite o erro no console
  init() {
    if (this.linksIntern.length) {
      this.addEventInTheLinks();
    }
    return this;
  }
}
