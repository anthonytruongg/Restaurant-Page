function homeButton() {
    const home = document.createElement('div');
    home.setAttribute('class', 'home');

    home.appendChild(createParagraph("Best Burritos in California!"))
    home.appendChild(createParagraph("Inspiration from Baja Mexico and California!"))
    
}

function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function homePage() {
    const main = document.querySelector('.content');
    main.appendChild(homeButton());
}

export default homePage;