import loadPage from './loadPage';
import './style.css';
import Background from './background.jpg';




const removeChildNodes = (parentNode) => {
    while(parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
};

const displayPage = (parent, id, page) => {
    removeChildNodes(parent);
    loadPage(id, page);
};

const background = new Image();
background.src = Background;
// document.body.appendChild(Background);


const contentDiv = document.querySelector('#content');

loadPage('#content', 'about');

document.body.addEventListener('click', (event) => {
    if(event.target.textContent === 'Underground Cafe') {
       displayPage(contentDiv, '#content', 'about');
    } else if(event.target.textContent === 'Menu') {
        displayPage(contentDiv, '#content', 'menu');
    } else if(event.target.textContent === 'Contact') {
        displayPage(contentDiv, '#content', 'contact');
    }
})

