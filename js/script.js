import DropdownMenu from "./dropdown-menu.js";
import ScrollSuave from "./scroll-suave.js";
import ScrollAnima from "./scroll-anima.js";
import MenuMobile from "./menu-mobile.js";
import initLocalStorage from "./form-localStorage.js";
import RegexpForm from "./regexp-form.js";

const dropdown = new DropdownMenu("[data-dropdown]", "active");
dropdown.init();

const scrollSuave = new ScrollSuave('[data-scroll="links"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anima="scroll"]', "active-scroll");
scrollAnima.init();

const menuMobile = new MenuMobile(
  '[data-menu="mobile-button"]',
  "[data-menu]",
  "active-menu"
);
menuMobile.init();

// method criado específico para esse projeto
// por isso colocamos em uma function e não
// em uma classe
initLocalStorage();

const regexpForm = new RegexpForm(
  "telefone",
  ".tel",
  "Digite um número válido",
  "span-input-erro",
  "active-span"
);
regexpForm.init();
