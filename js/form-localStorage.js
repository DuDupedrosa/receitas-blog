export default function initLocalStorage() {
  // puxando o form e add os eventos
  const form = document.querySelectorAll(".form-contato input");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");

  // method que seta uma propriedade de acordo
  // com o nome do input e de acordo com o
  // valor desse input e no final envia tudo
  // para o localstorage em uma string que parece
  // um json para futuramente transformar essa string
  // em um object e acessar sua propriedades
  const saveValuesInit = {};
  const onSaveValue = (event) => {
    saveValuesInit[event.target.name] = event.target.value;
    localStorage.FormValues = JSON.stringify(saveValuesInit);
  };

  // verificação pai que verifica se a string que foi
  // enviada para o localStorage existe ou não
  // caso exista essa string já é transformada em um object.
  // Após vem as verificações de cada propriedade para garantir que
  // vá o valor para o input quando ele for realmente preenchido
  // e não fique dando undefined na tela.
  if (localStorage.FormValues) {
    const saveValueEnd = JSON.parse(localStorage.FormValues);
    if (saveValueEnd.name) name.value = saveValueEnd.name;
    if (saveValueEnd.email) email.value = saveValueEnd.email;
    if (saveValueEnd.celular) telefone.value = saveValueEnd.celular;
  }

  // add o evento de change em cada input
  form.forEach((input) => {
    input.addEventListener("change", onSaveValue);
  });
}
