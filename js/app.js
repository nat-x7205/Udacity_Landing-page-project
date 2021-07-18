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
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navList = document.getElementById('navbar__list');
// console.log(navList);
// const dataNavItems = document.querySelectorAll("[data-nav]");
// console.log(dataNavItems);

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//'Add a CSS class (style) to a HTML element' function
function addToClassList(element, style) {
  return element.classList.add(style);
}

function removeFromClassList(element, style) {
  return element.classList.remove(style);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function navBarMenu () {
  const sections = document.querySelectorAll('section');
  console.log(sections);

  //Loop over list of sections to build navbar menu items
  for (section of sections) { 
    //Create list items
    const navItem = document.createElement('li');

    //Create link elements with "href" and "class" attributes
    const navItemLink = document.createElement('a');
      navItemLink.href = `#${section.id}`;
      navItemLink.classList.add('nav-link');

    //Take meny items text from "data-nav" attributes
    const linkText = document.createTextNode(`${section.dataset.nav}`);

    //Append elements: "menu text" => <a> => <li> => <ul>
    navItemLink.appendChild(linkText);
    navItem.appendChild(navItemLink);
    navList.appendChild(navItem);

    // Add class 'active' to section when near top of viewport

    // Scroll to anchor ID using scrollTO event
  };
}
navBarMenu();
console.log(navList);
// <li><a href="#products" class="nav-link active">Products</a></li>
// <li><a href="#tutorials" class="nav-link">Tutorials</a></li>
// <li><a href="#gallery" class="nav-link">Gallery</a></li>
// <li><a href="#get-in-touch" class="nav-link">Get in Touch</a></li>





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

/******************************************/
// Mobile menu open/close
/******************************************/

const hamburgerIcon = document.getElementById('navbar__hamburger');
const closeIcon = document.getElementById('navbar__close');
const navListMenu = document.getElementById('navbar__list');

hamburgerIcon.addEventListener('click', () => {
  // Set time out to see icons rotate animation
  window.setTimeout(() => {
    // hamburgerIcon.classList.add('display-none');
    // closeIcon.classList.remove('display-none');
    // navListMenu.classList.remove('closed-nav');
    addToClassList(hamburgerIcon, 'display-none');
    removeFromClassList(closeIcon, 'display-none');
    removeFromClassList(navListMenu, 'closed-nav');
  }, 200);
});

closeIcon.addEventListener('click', () => {
  // Set time out to see icons rotate animation
  window.setTimeout(() => {
    // closeIcon.classList.add('display-none');
    // hamburgerIcon.classList.remove('display-none');
    // navListMenu.classList.add('closed-nav');
    addToClassList(closeIcon, 'display-none');
    removeFromClassList(hamburgerIcon, 'display-none');
    addToClassList(navListMenu, 'closed-nav');
  }, 200);
});

/******************************************/
