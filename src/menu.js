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

    var elem = document.querySelector('.body');
    elem.parentNode.removeChild(elem);
    var elemTwo = document.querySelector('.footer');
    elemTwo.parentNode.removeChild(elemTwo);

    return contactBody
}

export default createContactBody;


