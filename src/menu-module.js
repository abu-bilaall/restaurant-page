import ("./menu.css");
import sushiImg from "../assets/images/sushi.jpg";
import tacosImg from "../assets/images/tacos.jpg";
import padThaiImg from "../assets/images/pad-thai.jpg";
import margheritaPizzaImg from "../assets/images/pizza.jpg";
import butterChickenImg from "../assets/images/butter-chicken.jpg";
import paellaImg from "../assets/images/seafood-paella.jpg";

let menuFoods = [
    {
        name: "Sushi Platter (Japanese dish)",
        description: `An assortment of vinegared rice paired with fresh seafood, 
        vegetables, and seaweed, offering a harmonious blend of flavors and textures.`,
        image: sushiImg,
    },
    {
        name: "Tacos (Mexican dish)",
        description: `Soft or crispy tortillas filled with seasoned meats, fresh vegetables, 
        and zesty sauces, embodying the vibrant flavors of Mexican street food.`,
        image: tacosImg,
    },
    {
        name: "Pad Thai (Thailand dish)",
        description: `Stir-fried rice noodles tossed with shrimp or chicken, tofu, eggs, and 
        bean sprouts, all enveloped in a tangy tamarind sauce and garnished with crushed peanuts.`,
        image: padThaiImg,
    },
    {
        name: "Margherita Pizza (Italian dish)",
        description: `A classic Neapolitan pizza featuring a thin, crispy crust topped with fresh 
        tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil.`,
        image: margheritaPizzaImg,
    },
    {
        name: "Butter Chicken (Indian Dish)",
        description: `Tender chicken pieces simmered in a rich, creamy tomato-based sauce infused with 
        aromatic spices, offering a mild yet flavorful curry experience.`,
        image: butterChickenImg,
    },
    {
        name: "Seafood Paella (Spanish dish)",
        description: `A vibrant saffron-infused rice dish cooked with an array of seafood like shrimp, 
        mussels, and clams, complemented by vegetables and aromatic herbs.`,
        image: paellaImg,
    },
];

function clearPage() {
    // clear contents
    const body = document.querySelector('body');
    const content = document.querySelector('#content');

    if (content.firstChild) {
        body.setAttribute('id', 'menu-display');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }
}

export function loadMenuPage() {
    clearPage();
    const content = document.querySelector('#content');

    // menu container
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('id', 'menu-container');

    for (let i = 0; i < menuFoods.length; i++) {
        let foodName = menuFoods[i].name;
        let foodDesc = menuFoods[i].description;
        let foodImgSrc = menuFoods[i].image;

        const menuItem = document.createElement('div');
        menuItem.setAttribute('class', 'menu-items');

        const menuImg = document.createElement('img');
        menuImg.setAttribute('src', foodImgSrc);

        const menuName = document.createElement('div');
        menuName.setAttribute('class', 'menu-names');
        menuName.textContent = foodName;

        const menuDesc = document.createElement('div');
        menuDesc.setAttribute('class', 'menu-descriptions');
        menuDesc.textContent = foodDesc;

        menuItem.append(menuImg, menuName, menuDesc);
        menuContainer.appendChild(menuItem);
    }

    content.append(menuContainer);
}