import DropdownMenu from "./dropdown-menu.js";
import ScrollSuave from "./scroll-suave.js";
import ScrollAnima from "./scroll-anima.js";

const dropdown = new DropdownMenu("[data-dropdown]", "active");
dropdown.init();

const scrollSuave = new ScrollSuave('[data-scroll="links"]');
scrollSuave.init();

const scrollAnima = new ScrollAnima('[data-anima="scroll"]', "active-scroll");
scrollAnima.init();
