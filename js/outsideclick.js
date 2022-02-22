export default function outsideClick(element, callback) {
  const getHtml = document.documentElement;
  const attributeOutside = "data-outside";

  // verifica se o clique foi fora do element
  // caso tenha sido ele executa a function de callback
  // que a passada no momento da ativação da OutsideClick
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(attributeOutside, "");
      getHtml.removeEventListener("click", handleOutsideClick);
      callback();
    }
  }

  // criando um atributo para verificar antes de colocar
  // um novo evento no html para não ficar com vários
  //  eventos adicionados a todo instante
  if (!element.hasAttribute(attributeOutside)) {
    element.setAttribute(attributeOutside, "");
    getHtml.addEventListener("click", handleOutsideClick);
  }
}
