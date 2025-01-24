import ("./contact.css");
import locationSVG from "../assets/images/address.svg";
import phoneSVG from "../assets/images/phone.svg";
import map from "../assets/images/map-snapshot.png";

export function loadContactPage() {
    // clear contents
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const body = document.querySelector('body');
    body.setAttribute('id', 'blur-bg');

    const contactCard = document.createElement('div');
    contactCard.setAttribute('class', 'contact-card');

    // contact phone
    const contactPhone = document.createElement('div');
    contactPhone.setAttribute('class', 'contact-phone');

    const phoneIcon = document.createElement('img');
    phoneIcon.setAttribute('src', phoneSVG);

    const phoneDigits = document.createElement('div');
    phoneDigits.textContent = "Phone: +1 (555) 123-4567";

    // contactPhone.append(phoneIcon, phoneDigits);
    contactPhone.appendChild(phoneDigits);

    // contact address
    const contactAddress = document.createElement('div');
    contactAddress.setAttribute('class', 'contact-addy');

    const addyIcon = document.createElement('img');
    phoneIcon.setAttribute('src', locationSVG);

    const addy = document.createElement('div');
    addy.textContent = "Address: 123 Main Street, Springfield, USA";

    // contactAddress.append(addyIcon, addy);
    contactAddress.appendChild(addy)

    // map image
    const mapImg = document.createElement('img');
    mapImg.setAttribute('src', map);

    contactCard.append(contactPhone, contactAddress, mapImg);

    content.appendChild(contactCard);
}