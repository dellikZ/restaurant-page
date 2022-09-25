import Burger from './images/burger.jpeg';
import Taco from './images/taco.jpg';
import Chalupa from './images/chalupa.jpeg';
import Lavacake from './images/lavacake.jpg';
import Shawarma from './images/shawarma.jpeg';

const images = [Burger, Taco, Chalupa, Lavacake, Shawarma];

const menuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu-section');
    const h2 = document.createElement('h2');
    h2.textContent = 'Menu'
    menu.appendChild(h2);
    const menuItems = [
        "Burger",
        "Taco",
        "Chalupa",
        "Lava Cake",
        "Shawarma"
    ]
    const menuDescriptions = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra suspendisse potenti nullam ac tortor vitae purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra suspendisse potenti nullam ac tortor vitae purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra suspendisse potenti nullam ac tortor vitae purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra suspendisse potenti nullam ac tortor vitae purus.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra suspendisse potenti nullam ac tortor vitae purus."
    ];
    for(let i = 0; i < 5; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.setAttribute('num', `${i}`);
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('item-img');
        const itemDescContainer = document.createElement('div');
        itemDescContainer.classList.add('item-desc');
        const h3 = document.createElement('h3');
        h3.textContent = menuItems[i];
        const para = document.createElement('p');
        para.textContent = menuDescriptions[i];
        itemDescContainer.append(h3, para);
        let image = document.createElement('img');
        image.src = images[i];
        
        imgContainer.appendChild(image);
        menuItem.append(imgContainer, itemDescContainer);
        menu.appendChild(menuItem);
    }
    return menu;
};

export default menuPage;