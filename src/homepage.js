import createContactBody from "./menu";

function createHeader() {
    const header = document.createElement('div');
    header.setAttribute('class', 'header');

    const home = document.createElement('div');
    home.setAttribute('class', 'home');
    home.textContent = 'Home';

    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');
    menu.textContent = 'Menu';

    const contact = document.createElement('div');
    contact.setAttribute('class', 'contact');
    contact.textContent = 'Contact';

    header.append(home, menu, contact);

    return header;
}

function createBody() {
    const body = document.createElement('div');
    body.setAttribute('class', 'body');

    const bodyText = document.createElement('div');
    bodyText.setAttribute('class', 'bodyText');
    bodyText.textContent = "El Pepe's Mexican Fusion Restaurant"
    
    const bodyPhoto = document.createElement('img');
    bodyPhoto.setAttribute('class', 'bodyPhoto');
    bodyPhoto.src = "./images/fancy.jpeg";

    body.append(bodyText, bodyPhoto);

    return body
}

function createFooter() {
    const footer = document.createElement('div');
    footer.setAttribute('class', 'footer');
    footer.textContent = 'Copyright © anthonytruongg  ';

    const github = document.createElement('img');
    github.setAttribute('class', 'github');
    github.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";

    footer.append(github);

    return footer
}

function clearPage() {
    var elem = document.querySelector('.body');
    elem.parentNode.removeChild(elem);
    var elemTwo = document.querySelector('.footer');
    elemTwo.parentNode.removeChild(elemTwo);
    var elemThree = document.querySelector('.header');
    elemThree.parentNode.removeChild(elemThree);

    return elemThree
}

function createWebpage() {
    const content = document.querySelector('.content');
    content.append(createHeader(), createBody(), createFooter());
    
    const home = document.querySelector('.home');
    home.addEventListener('click', () => {
    alert("Home");
    })

    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
    alert("Menu");
    })

    const contact = document.querySelector('.contact');
    contact.addEventListener('click', () => {
    clearPage();
    createHeader();
    createContactBody();
    createFooter();
    })

    return content
}   

export default createWebpage;

