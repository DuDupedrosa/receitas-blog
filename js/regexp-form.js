export default class RegexpForm {
  constructor(input, boxInput, contentSpan, classInit, classEnd) {
    this.getInputNumber = document.getElementById(input);
    this.boxTel = document.querySelector(boxInput);
    this.contentSpan = contentSpan;
    this.classInit = classInit;
    this.classEnd = classEnd;
    this.regexp =
      /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)(?:\d{4,5}[-\s]?)(?:\d{4})/g;
  }

  // method que cria o span assim que a classe
  // é ativada, garantido no estilo que ele já
  // inicie com display none e somente quando
  // der erro na verificação que add a class
  // que coloca o display block
  creatSpan() {
    this.span = document.createElement("span");
    this.span.innerHTML = this.contentSpan;
    this.span.classList.add(this.classInit);
    this.boxTel.appendChild(this.span);
  }

  // method que retorna um valor boolean
  // se der match com a regexp ou não
  validarComRegexp(number) {
    this.matchNumber = number.match(this.regexp);
    return this.matchNumber && this.matchNumber[0] === number;
  }

  // caso o valor do method acima
  // retorne true simplesmente adiciona a classe valid
  // e caso retorne falso ele add a class de negate
  // colocando seus devidos estilos para chamar
  // a atenção do usuário e fazer com que ele
  // digite um número válido
  validarComValor(element) {
    if (this.validarComRegexp(element.value)) {
      this.getInputNumber.classList.add("valid");
      this.getInputNumber.classList.remove("negate");
      this.span.classList.remove(this.classEnd);
    } else {
      this.getInputNumber.classList.add("negate");
      this.getInputNumber.classList.remove("valid");
      this.span.classList.add(this.classEnd);
    }
  }

  // method q add o event de change ao input
  addEventInput() {
    this.getInputNumber.addEventListener("change", () => {
      this.validarComValor(this.getInputNumber);
    });
  }

  // method que inicia a classe
  init() {
    if (this.getInputNumber) {
      this.addEventInput();
      this.creatSpan();
    }
    return this;
  }
}
