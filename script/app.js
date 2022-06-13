const headerIntro = document.querySelector('.headerIntro');

const introSentence = document.querySelector('.introSentence');

const headerWrapper = document.querySelector('header .wrapper');

const form =  document.querySelector('form');

const formButton = document.querySelector('form button');

// the debounc function limits the scroll events to avoid the system from being overwhelmed
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function animateIntro(e) {
    
    // This gets the number of pixels from the top of the page and provides size of the users viewport
    const {scrollTop, usersViewport} = document.documentElement;

    // this provides the distance from the top of the element to the top of the users viewport 
    const elementToTopOfViewport = introSentence.getBoundingClientRect().top;

    // if the distance from the top of the screen is greater than the top of element + the distance to the top of the page add a class of active to initiate animations 
    if (scrollTop < (scrollTop + elementToTopOfViewport).toFixed()) {
        introSentence.classList.add('active');
        headerIntro.classList.add('active');
        headerWrapper.classList.add('active');

    }
}

window.addEventListener('scroll', debounce(animateIntro));
