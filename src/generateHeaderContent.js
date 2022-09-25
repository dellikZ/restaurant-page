const generateHeaderContent = () => {
    const header = document.createElement('div');
    const logoDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Underground Cafe';
    logoDiv.appendChild(h1);

    const linksDiv = document.createElement('div');
    const menuSpan = document.createElement('span');
    const contactSpan = document.createElement('span');
    menuSpan.textContent = 'Menu';
    contactSpan.textContent = 'Contact';
    linksDiv.append(menuSpan, contactSpan);
    logoDiv.classList.add('logoDiv');
    linksDiv.classList.add('linksDiv');
    header.append(logoDiv, linksDiv);

    return header;
};

export default generateHeaderContent;