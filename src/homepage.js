
import homePage from "./home";

function createHeader() {
    const header = document.createElement('div');
    header.setAttribute('class', 'header');
    header.textContent = 'Home Page';

    return header;
}



function createWebPage() {
    const content = document.querySelector('.content');
    const header = document.querySelector('.header');

    header.appendChild(createHome())
    content.appendChild(createHeader())
    
}

export default createWebPage;

