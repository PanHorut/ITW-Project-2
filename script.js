/**
 * @file script.js
 * @brief implementation of actions on website which are not possible in css
 * @author Dominik Horut (xhorut01)
 */

// Function to change navigation bar color and logo image in it
$(document).ready(function(){
    $(window).scroll(function(){

        var imgElement = document.querySelector('#logo img');
        var scroll = $(window).scrollTop();

        if (scroll > 300) {
            $("header").css("background", "#ECA400");
            imgElement.src = './img/logo-blue.png'

        } else if (scroll <= 0) {
            $("header").css("background", "transparent");
            imgElement.src = './img/logo.png'

        } else {
            $("header").css("background", "#ECA400");  	
            imgElement.src = './img/logo-blue.png'
        }
    });
});

// Function to remove text about hobby
function showPicture(event) {
 
    var backClass = event.target.classList[1]; 

    var clickMe = document.querySelector('.click-me.' + backClass);
    var paragraph = document.querySelector('.paragraph.' + backClass);

    paragraph.classList.remove('show-paragraph');

    
    if (clickMe) {
        clickMe.style.display = 'flex';
    }

    event.target.classList.remove('show-paragraph');
}

// Function to show text about hobby underneath the hobby image
function showParagraph(event) {

    var clickedElement = event.target;
    var backClass = event.target.classList[1]; 
    var paragraph = document.querySelector('.paragraph.' + backClass);
    
    paragraph.classList.add('show-paragraph');
    clickedElement.style.display = 'none';
}

// Function to change layout of skill list when roll down icon is pressed
function rollDown(event){

    var skill = event.target.classList[0];
    var roll = event.target;
    roll.classList.toggle('rotate-arrow');

    if(skill == 'a'){
        
        setTimeout(function() {
            document.querySelector('#soft-skills').classList.toggle('roll-down');
        }, 50); 
        
    } else {
 
        setTimeout(function() {
            document.querySelector('#hard-skills').classList.toggle('roll-down');
        }, 50);
    }

}

// Function which displays hamburger menu when hamburger icon is clicked
function displayHamburger(event){

    var bar = event.target;
    bar.classList.toggle('bar-animation');
    
    document.querySelector('.hamburger-menu').classList.toggle('show-hamburger');

    document.querySelectorAll('nav.hamburger-menu a').forEach(function(element) {
        element.classList.toggle('show-hamburger');
    });
}

// Function which removes hamburger menu when window is resized and hamburger menu is opened
function removeHamburger() {
   
    var screenWidth = window.innerWidth;

    var hamburger = document.querySelector('.hamburger-menu');
    var hamuburgerIcon = document.querySelector('#hamburger');
    

    if (screenWidth > 850) {

        hamburger.classList.remove('show-hamburger'); 
        hamuburgerIcon.classList.remove('bar-animation');

        document.querySelectorAll('nav.hamburger-menu a').forEach(function(element) {
            element.classList.remove('show-hamburger');
        });
    }
}

// Function to show and then remove thank card to user when he submits email
function displayThank(){
 
    var note = document.querySelector('.thank-note');
        
    note.classList.add('show-thank-note');
        
    setTimeout(function() {
        note.classList.remove('show-thank-note');
    }, 5000); 
}

// Binding event listeners to window width changes
window.addEventListener('resize', function() {
    var thankNote = document.querySelector('.thank-note');
    thankNote.style.left = ((window.innerWidth / 2)-195) + 'px';
});

window.addEventListener('DOMContentLoaded', function() {
    
    window.dispatchEvent(new Event('resize'));
});

window.addEventListener('resize', removeHamburger);

// Binding event listeners to buttons and icons
document.querySelector('.click-me.a').addEventListener('click', showParagraph);
document.querySelector('.click-me.b').addEventListener('click', showParagraph);
document.querySelector('.click-me.c').addEventListener('click', showParagraph);

document.querySelector('.back.a').addEventListener('click', showPicture);
document.querySelector('.back.b').addEventListener('click', showPicture);
document.querySelector('.back.c').addEventListener('click', showPicture);

document.querySelector('#hamburger').addEventListener('click', displayHamburger);

document.querySelector('#submit').addEventListener('click', displayThank);

document.querySelectorAll('.roll i').forEach(function(element) {
    element.addEventListener('click', rollDown);
});



