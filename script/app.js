const headerIntro = document.querySelector('.headerIntro');

const introSentence = document.querySelector('.introSentence');

const headerWrapper = document.querySelector('header .wrapper');


console.log(introSentence);
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
    
    // const animateAt = (window.scrollY + window.innerHeight) - introSentence.offsetHeight / 11;
    // // const animateAt = (window.scrollY + window.innerHeight) - introSentence.offsetTop;

    // const paragraphBottom = introSentence.offsetTop + introSentence.offsetHeight;

    // const isHalfShown = animateAt > introSentence.offsetTop;

    // const isNotScrolledPast = window.scrollY < paragraphBottom;

    // if (isHalfShown && isNotScrolledPast){
    //     introSentence.classList.add('active');
    //     headerIntro.classList.add('active');
    //     headerWrapper.classList.add('active');
    // }

    const {scrollTop, clientHeight} = document.documentElement;

    const topElementToTopViewport = introSentence.getBoundingClientRect().top;

    if (scrollTop < (scrollTop + topElementToTopViewport).toFixed()) {
        introSentence.classList.add('active');
        headerIntro.classList.add('active');
        headerWrapper.classList.add('active');

    }

    // console.log(animateAt);
}


window.addEventListener('scroll', debounce(animateIntro));


// when the header height plus scroll height is more add class