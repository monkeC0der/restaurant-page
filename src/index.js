import './styles.css';
import loadInitialPage from './loadInitialPage';
import loadAboutPage from './loadAboutPage';
import loadMenuPage from './loadMenuPage';

document.addEventListener("DOMContentLoaded", (event) => {
    loadInitialPage();
    const aboutBtn = document.querySelector('#aboutBtn');
    aboutBtn.addEventListener('click', () => {
        loadAboutPage()
    })

    const menuBtn = document.querySelector('#menuBtn');
    menuBtn.addEventListener('click', () => {
        loadMenuPage()
    })

    const homeBtn = document.querySelector('#homeBtn');
    homeBtn.addEventListener('click', () => {
        loadInitialPage()
    })
    console.log('monke')
})
