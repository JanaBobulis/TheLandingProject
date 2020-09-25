//Creating list items in an array.
//Creating a for loop and inside of the loop creating 'li' element
//Making array to appear as text with textContent
//attaching 'li' to 'navbar__list'
const listItems = ['Section 1', 'Section 2', 'Section 3'];
for (let i=0; i < listItems.length; i++) {
       console.log(listItems[i]);
       const topMenu = document.createElement('li');
       topMenu.textContent = listItems[i];
       const theHeading = document.querySelector('navbar__list');
document.getElementById('navbar__list').appendChild(topMenu);
   }


   
let pageTop = document.getElementById('section1');
let theHeight = pageTop.offsetTop;
console.log(theHeight);
   
let pageTop2 = document.getElementById('section2');
let theHeight2 = pageTop2.offsetTop;
console.log(theHeight2);
   
let pageTop3 = document.getElementById('section3');
let theHeight3 = pageTop3.offsetTop;
console.log(theHeight3);

   
window.onscroll = function() {myFunction()};
function myFunction() {
    console.log(document.body.scrollTop);
    console.log(document.documentElement.scrollTop);
    
    if (document.documentElement.scrollTop > theHeight3) {
        document.querySelectorAll('li')[2].style.color = 'red';
    } else if (document.documentElement.scrollTop > theHeight2 && document.body.scrollTop < theHeight3) {
    document.querySelectorAll('li')[1].style.color = 'blue';

    } else if (document.documentElement.scrollTop > theHeight) {
    document.querySelectorAll('li')[0].style.color = 'orange';
    } 
}

    







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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


