/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const theUl = document.querySelector('ul');
const Sections = document.querySelectorAll('section');

// build the nav
// Scroll to anchor ID using scrollTO event
Sections.forEach((sectionEl) => {
    const dataNav = sectionEl.getAttribute('data-nav');
    const newLi = document.createElement('li');
    newLi.setAttribute('class', 'menu__link');
    newLi.innerText = dataNav;
    theUl.appendChild(newLi);
    newLi.addEventListener('click', function () {
        sectionEl.scrollIntoView({ behavior: 'smooth' });
    })

})


// Add class 'active' to section when near top of viewport


window.onscroll = () => {
    document.querySelectorAll('section').forEach(function (activeNow) {
        if (activeNow.getBoundingClientRect().top >= -300 && activeNow.getBoundingClientRect().top <= 150) {
            activeNow.classList.add('your-active-class');
        } else {
            activeNow.classList.remove('your-active-class');
        }
    })
}