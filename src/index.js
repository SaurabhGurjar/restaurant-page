import { createMenuItemBtn, setFoodImg } from "./menu.js";
import header from './header.js';
import footer from './footer.js';
import homeMain from './home.js';
import contact from './contact.js';
import './style.css';

// Images and icons
// Icons
// Header
import logo from './icon/logo.svg';
import notification from './icon/notification.svg';
// Menu Icons
import burger from './icon/burger.svg';
import salad from './icon/salad.svg';
import pizza from './icon/pizza.svg';
import drinks from './icon/drinks.svg';
import cake from './icon/cake.svg';

// Footer
import facebook from './icon/facebook.svg';
import instagram from './icon/instagram.svg';
import twitter from './icon/twitter.svg';
// Images
import burgerImg from './img/burger.png';
import saladImg from './img/salad.png';
import pizzaImg from './img/pizza.png';
import cakeImg from './img/cake.png';
import drinksImg from './img/drinks.png';
import mapImg from './img/map.png';

const body = document.querySelector('body');
const rootDiv = document.createElement('div');
rootDiv.id = 'root';
body.appendChild(rootDiv);

// Add elements to dom 
rootDiv.innerHTML = header(logo, notification) + homeMain(burgerImg, '') + footer(facebook, instagram, twitter);

const menuItems = [
    {
        name: "Salad",
        price: 10,
        icon: salad,
    },
    {
        name: "Burger",
        price: 5,
        icon: burger,
    },
    {
        name: "Pizza",
        price: 15,
        icon: pizza,
    },
    {
        name: "Drinks",
        price: 4,
        icon: drinks,
    },
    {
        name: "Dessert",
        price: 5,
        icon: cake,
    }
];

const imgObjLink = {
    salad: saladImg,
    burger: burgerImg,
    pizza: pizzaImg,
    drinks: drinksImg,
    dessert: cakeImg,
}

const renderMenuItems = () => {
    let btns = '';
    menuItems.forEach((item) => {
        const btn = createMenuItemBtn(item.name, item.icon, item.price);
        btns += btn;
    });
    return btns;
}
function setActive(id) {
    document.getElementById(id).classList.add('active');
}

function removeActive(item) {
    item.classList.remove('active');
}

function renderBtn() {
    const menu = document.getElementById('menu');
    menu.innerHTML = renderMenuItems();
}

function listenForClick() {
    const foodImgWrapper = document.getElementById('img-wrapper');
    const menuBtns = document.querySelectorAll('.menu-item');
    menuBtns.forEach(item => {
        item.addEventListener('click', () => {
            menuBtns.forEach(item => {
                removeActive(item);
            });
            setActive(item.id);
            const items = setFoodImg(imgObjLink[item.id]);
            foodImgWrapper.innerHTML = items;
        });
    });
}

function removeActiveFromHeaderLink(headerLinks) {
    headerLinks.forEach(link => {
        link.classList.remove('header-active');
    }); 
}

function listenForMenuBtnClick() {
    const main = document.getElementById('main-wrapper');
    const headerLinks = document.querySelectorAll('.header-link');
    headerLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (e.target.id === 'contact') {
                main.innerHTML = contact(mapImg);
                preventDefaultFormBehaviour();
                removeActiveFromHeaderLink(headerLinks);
                e.target.classList.add('header-active');
            } else {
                main.innerHTML = homeMain(burgerImg);
                renderBtn();
                listenForClick();
                removeActiveFromHeaderLink(headerLinks);
                e.target.classList.add('header-active');
            }
        });
    });
}


// Form 
function preventDefaultFormBehaviour() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearForm(form);
        showFeedback();
    });    
}

function clearForm(form) {
    form.reset();
}

function showFeedback() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = 'Submitted!'; 
}
renderBtn();
listenForClick();
listenForMenuBtnClick();

