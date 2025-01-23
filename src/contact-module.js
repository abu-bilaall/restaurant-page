import ("./contact.css");

export function loadContactPage() {
    // clear contents
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }


}