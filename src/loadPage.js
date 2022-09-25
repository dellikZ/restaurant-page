import generateHeaderContent from "./generateHeaderContent";
import aboutPage from "./aboutPage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";





const loadPage = (elementId, page) => {
    const siteContent = document.querySelector(elementId);
    //Generating the header
    const header = generateHeaderContent();
    header.classList.add('header');
    
    
    //Generating content div
    const section = document.createElement('div');
    section.classList.add('section');
    //Generating selected section
    if(section.firstElementChild !== null) {
        section.removeChild(section.firstElementChild);
        
    }
    if(page === 'about') {
            
        section.appendChild(aboutPage());
        
    } else if(page === 'menu') {
        section.appendChild(menuPage());
    } else if(page === 'contact') {
        section.appendChild(contactPage());
        
    }
    
    

    //Generating the footer
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const githubLink = document.createElement('a');

    siteContent.append(header, section, footer);
    return siteContent;
};

export default loadPage;