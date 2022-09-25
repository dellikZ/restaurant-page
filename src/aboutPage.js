const aboutPage = () => {
    const about = document.createElement('div');
    about.classList.add('about-section');
    const h1 = document.createElement('h1');
    const aboutPara = document.createElement('p');
    h1.textContent = 'Welcome!';
    aboutPara.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan in. Viverra suspendisse potenti nullam ac tortor vitae purus. Eget velit aliquet sagittis id consectetur purus. Cursus sit amet dictum sit amet justo. Amet cursus sit amet dictum sit amet justo. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Nulla facilisi morbi tempus iaculis urna id volutpat. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Iaculis eu non diam phasellus vestibulum lorem sed risus. Suspendisse ultrices gravida dictum fusce ut placerat orci.'
    about.append(h1, aboutPara);
    return about;
}; 

export default aboutPage;