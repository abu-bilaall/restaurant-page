import("./styles.css");
import { loadHomePage } from "./initial-page-load";
import { loadContactPage } from "./contact-module";
import { loadMenuPage } from "./menu-module";

loadHomePage();

const home = document.querySelector ('#home');
home.addEventListener('click', () => {
    loadHomePage();
})

const menu = document.querySelector('#menu');
menu.addEventListener('click', () => {
    loadMenuPage();
})

const contact = document.querySelector('#contact');
contact.addEventListener('click', () => {
    loadContactPage();
})