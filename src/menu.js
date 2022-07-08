import loadPage from "./loadPage";
import createContactPage from "./contact";
import createHomePage from "./homepage";

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
function createMenuBody() {
    const menuBody = document.createElement('div');
    menuBody.setAttribute('class', 'menuBody');

    const menuItemOne = document.createElement('div');
    menuItemOne.setAttribute('class', 'menuItem');
    const menuOne = document.createElement('h1');
    menuOne.textContent = 'Buttered Grilled Scallops $25.99';
    const scallops = document.createElement('img');
    scallops.setAttribute('class', 'scallops');
    scallops.src = "./images/scallops.jpeg";
    menuItemOne.append(menuOne, scallops);

    const menuItemTwo = document.createElement('div');
    menuItemTwo.setAttribute('class', 'menuItem');
    const menuTwo = document.createElement('h1');
    menuTwo.textContent = 'Garlic Tosca $32.99';
    const tosca = document.createElement('img');
    tosca.setAttribute('class', 'tosca');
    tosca.src = "./images/tosca.jpeg";
    menuItemTwo.append(menuTwo, tosca);

    const menuItemThree = document.createElement('div');
    menuItemThree.setAttribute('class', 'menuItem');
    const menuThree = document.createElement('h1');
    menuThree.textContent = 'Cucumber Salad with Aioli Sauce $15.99';
    const aioli = document.createElement('img');
    aioli.setAttribute('class', 'cucumber');
    aioli.src = "./images/cucumber.jpeg";
    menuItemThree.append(menuThree, aioli);

    menuBody.append(menuItemOne, menuItemTwo, menuItemThree);

    return menuBody
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
function createMenuPage() {
    const content = document.querySelector('.content');
    content.append(createHeader(), createMenuBody(), createFooter());

    const home = document.querySelector('.home');
    home.addEventListener('click', () => {
        loadPage();
        createHomePage();
    })

    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
        loadPage();
        createMenuPage();
    })

    const contact = document.querySelector('.contact');
    contact.addEventListener('click', () => {
        loadPage();
        createContactPage();
    })
    return content
}

export default createMenuPage;