import DropdownMenu from "./dropdown-menu.js";
import ScrollSuave from "./scroll-suave.js";

const dropdown = new DropdownMenu("[data-dropdown]", "active");
dropdown.init();

const scrollSuave = new ScrollSuave('[data-scroll="links"]');
scrollSuave.init();
