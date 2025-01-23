import("./styles.css");
import { loadHomePage } from "./initial-page-load";
import { loadContactPage } from "./contact-module";

loadHomePage();

const home = document.querySelector ('#home');
home.addEventListener('click', () => {
    loadHomePage();
})

const contact = document.querySelector('#contact');
contact.addEventListener('click', () => {
    loadContactPage();
})