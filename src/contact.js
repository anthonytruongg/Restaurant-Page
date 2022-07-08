import loadPage from "./loadPage";
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

function createContactBody() {
    const contactBody = document.createElement('div');
    contactBody.setAttribute('class', 'contactBody');

    const contactBodyText = document.createElement('div');
    contactBodyText.setAttribute('class', 'contactBodyText');

    const heading = document.createElement('h1');
    heading.textContent = 'Get in touch with us!';

    const headingTwo = document.createElement('h2');
    headingTwo.textContent = 'Head Chef: ';

    const pOne = document.createElement('p');
    pOne.textContent = 'James Rodriguez';

    const headingThree = document.createElement('h2');
    headingThree.textContent = 'Contact Number';

    const pThree = document.createElement('p');
    pThree.textContent = 'Email Address';

    const headingFour = document.createElement('h2');
    headingFour.textContent = 'Address';

    const pFour = document.createElement('p');
    pFour.textContent = '123 Main St. New York, NY 10001';

    const headingFive = document.createElement('h2');
    headingFive.textContent = 'Email: ';

    const pFive = document.createElement('p');
    pFive.textContent = 'elpepebusiness@gmail.com'

    const chefPhoto = document.createElement('img');
    chefPhoto.setAttribute('class', 'chefPhoto');
    chefPhoto.src = "./images/chef.jpeg";

    contactBodyText.append(heading, headingTwo, pOne, headingThree, 
        pThree, headingFour, pFour, headingFive, pFive);

    contactBody.append(contactBodyText, chefPhoto)

    document.querySelector('.content').append(contactBody);

    
    return contactBody
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

function createContactPage() {
    const content = document.querySelector('.content');
    content.append(createHeader(), createContactBody(), createFooter());
    const home = document.querySelector('.home');
    home.addEventListener('click', () => {
        loadPage();
        createHomePage();
    })

    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
    })

    const contact = document.querySelector('.contact');
    contact.addEventListener('click', () => {
        loadPage();
        createContactPage();
    })

    return content
}


export default createContactPage;


