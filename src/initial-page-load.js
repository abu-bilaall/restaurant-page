import savoryHaven from "../assets/images/restaurant-page.jpg";

function clearPage() {
    // clear contents
    const body = document.querySelector('body');
    const content = document.querySelector('#content');

    if (content.firstChild) {
        body.setAttribute('id', '');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }
}

export function loadHomePage() {
    clearPage();

    const left = document.createElement('div');
    left.setAttribute('id', 'left');

    const img = document.createElement('img');
    img.setAttribute('src', savoryHaven);
    img.setAttribute('alt', 'savory haven');

    left.appendChild(img);

    const right = document.createElement('div');
    right.setAttribute('id', 'right');

    const text = document.createElement('div');
    text.setAttribute('id', 'text');
    const br = document.createElement('br');
    const em = document.createElement('em');
    const textContent = "Your one-stop restaurant to taste 'em all!";
    text.textContent = textContent;

    const order = document.createElement('button');
    order.setAttribute('id', 'order');
    order.textContent = "Order online or visit us";

    right.append(text, order);

    const pageContent = document.querySelector('#content');
    pageContent.append(left, right);
}