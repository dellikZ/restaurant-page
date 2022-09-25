

const contactPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact-section');
    const h2 = document.createElement('h2');
    h2.textContent = 'We want to hear from you!';
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    const mapDiv = document.createElement('div');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8878023468733!2d26.024508400000006!3d44.414947999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20038f1dbfc67%3A0xa459153e9825f938!2sStrada%20R%C3%A2ul%20Doamnei%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1662974101863!5m2!1sro!2sro`;
    mapDiv.appendChild(iframe);
    const contactInfo = document.createElement('div');
    const phoneNumber = document.createElement('span');
    const email = document.createElement('span');
    const socialMedia = document.createElement('span');
    phoneNumber.textContent = 'PHONE NUMBER: 0769696969';
    email.textContent = "EMAIL: undegroundcafedtr@company.com";
    socialMedia.textContent = "Find us on Instagram: Coming soon...";
    contactInfo.append(phoneNumber, email, socialMedia);
    mapDiv.classList.add('map-div');
    mapDiv.setAttribute('id', 'map');
    contactInfo.classList.add('contact-div');
    contactContent.append(mapDiv, contactInfo);
    contact.append(h2, contactContent);

    
    return contact;

};

export default contactPage;

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.8878023468733!2d26.024508400000006!3d44.414947999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20038f1dbfc67%3A0xa459153e9825f938!2sStrada%20R%C3%A2ul%20Doamnei%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1662974101863!5m2!1sro!2sro" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> //