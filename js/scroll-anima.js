import debounce from "./debouce.js";

export default class ScrollAnima {
  constructor(section, classe) {
    this.sections = document.querySelectorAll(section);
    this.classe = classe;
    // tirando a metade da window
    // para ativação ocorrer mais cedo
    this.half = window.innerHeight * 0.6;

    // bind para rediricionando do this
    // e também usando o debounce para add
    // menos evento a window
    this.onScrollAnima = debounce(this.onScrollAnima.bind(this), 50);
  }

  // method que somente a section
  // e a sua respectiva distancia
  // do topo devolvendo uma arreia
  // com esses objetos e seus dados
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const sectionPageY = section.offsetTop;
      return {
        section,
        distanceY: Math.floor(sectionPageY - this.half),
      };
    });
  }

  // fazendo a verificação quando
  // a distancia do top do scroll for maior
  // a dist da section add a class para executar
  // a ação
  onScrollAnima() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.distanceY) {
        item.section.classList.add(this.classe);
      }
    });
  }

  // method que inicia a classe
  init() {
    if (this.sections.length) {
      this.getDistance();
      window.addEventListener("scroll", this.onScrollAnima);
    }
    return this;
  }
}
