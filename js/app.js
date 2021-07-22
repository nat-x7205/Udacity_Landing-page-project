/**
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
 */

//*************************
// Define Global Variables
//*************************

const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

// End Global Variables
//*************************


//*************************
// Start Helper Functions
//*************************

//Function 'Add a CSS class (style) to an HTML element'
//arguments: item = DOM element; style = string
const addToClassList = (item, style) => {
  return item.classList.add(style);
};

//Function 'Remove a CSS class (style) from an HTML element
//arguments: item = DOM element; style = string
const removeFromClassList = (item, style) => {
  return item.classList.remove(style);
};

//Function (returning boolean) to check if an element is partially visible in screen
//argument: item = DOM element
const isInView = (item) => {
  const position = item.getBoundingClientRect();
  return (
    position.top < (window.innerHeight / 3) * 2 &&
    position.bottom >= (window.innerHeight / 3) * 2
  );
};

// End Helper Functions
//*************************


//*************************
// Begin Main Functions
//*************************

//Build the navigation menu
const navBarMenu = (items) => {
  //Loop over the list of sections to build navbar menu items
  for (item of items) {
    //Create list items
    const navItem = document.createElement("li");

    //Create link elements with "href", "class" and "id" attributes
    const navItemLink = document.createElement("a");
      navItemLink.href = `#${item.id}`;
      navItemLink.id = `menu-${item.id}`;
      addToClassList(navItemLink, "nav-link");

    //Take menu items text from "data-nav" attributes
    const linkText = document.createTextNode(`${item.dataset.nav}`);

    //Append elements: "menu item text" => <a> => <li> => <ul>
    navItemLink.appendChild(linkText);
    navItem.appendChild(navItemLink);
    navList.appendChild(navItem);
  }
};


//Function to add class '.active-section-highlighted'
//to a section when top of it visible > 1/3 of viewport
//argument: a list of elements
const sectionAndMenuActivator = (items) => {
  window.addEventListener("scroll", () => {
    //Define list of navbar menu items
    const menuItems = document.getElementsByClassName("nav-link");

    //Remove "active-menu-link-highlighted" class from all menu items
    for (menuItem of menuItems) {
      removeFromClassList(menuItem, "active-menu-link-highlighted");
    };

    for (item of items) {
      //Define current menu item (it corresponds to section-in-view)
      const currentMenuItem = document.getElementById(`menu-${item.id}`);

      //Add class "active-section-highlighted" to visible section 
      //and corresponding menu item
      if (isInView(item)) {
        addToClassList(item, "active-section-highlighted");
        addToClassList(currentMenuItem, "active-menu-link-highlighted");
      } else {
        removeFromClassList(item, "active-section-highlighted");
      }
    }
  });
};

// End Main Functions
//*************************


//*************************
// Begin Events
//*************************

// Build menu
navBarMenu(sections);

// Set sections as active
sectionAndMenuActivator(sections);



//*************************
// Mobile menu open/close
//*************************

const hamburgerIcon = document.getElementById("navbar__hamburger");
const closeIcon = document.getElementById("navbar__close");
const navListMenu = document.getElementById("navbar__list");

//Open mobile navbar
hamburgerIcon.addEventListener("click", () => {
  // Set time out to see icons rotate CSS animation
  window.setTimeout(() => {
    //Hide "hamburgermenu_icon.svg" by adding "display-none" CSS class
    addToClassList(hamburgerIcon, "display-none");
    //Show "close_icon.svg" by removing "display-none" CSS class
    removeFromClassList(closeIcon, "display-none");
    //Open mobile menu by removing "closed-nav" CSS class
    removeFromClassList(navListMenu, "closed-nav");
  }, 200);
});

//Close mobile navbar
closeIcon.addEventListener("click", () => {
  // Set time out to see icons rotate animation
  window.setTimeout(() => {
    //Hide "close_icon.svg" by adding "display-none" CSS class
    addToClassList(closeIcon, "display-none");
    //Show "hamburgermenu_icon.svg" by removing "display-none" CSS class
    removeFromClassList(hamburgerIcon, "display-none");
    //Close (hide) mobile menu by adding "closed-nav" CSS class
    addToClassList(navListMenu, "closed-nav");
  }, 200);
});

//*************************
