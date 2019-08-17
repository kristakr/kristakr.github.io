const slideLeft = {
    distance: '50%',
    origin: 'left',
    opacity: 0,
    delay: 500,
    mobile: true,
    duration: 1000
};

const slideRight = {
    distance: '50%',
    origin: 'right',
    opacity: 0,
    delay: 500,
    mobile: true,
    duration: 1000
};

const slideUp = {
    distance: '50%',
    origin: 'bottom',
    opacity: 0,
    delay: 1100,
    mobile: true,
    duration: 1000
};

const slideUpSlow = {
    distance: '5%',
    origin: 'bottom',
    opacity: 0,
    delay: 1500,
    mobile: true,
    duration: 1000
};

const slideDown = {
    scale: 0.85,
    distance: '50%',
    origin: 'top',
    opacity: 0,
    delay: 700,
    mobile: true,
    duration: 1000
};

const rotateRight = {
    rotate: {
        y: 60
    },
    duration: 1500,
    mobile: true
}

const rotateLeft = {
    rotate: {
        y: -60
    },
    duration: 1500,
    mobile: true
}

ScrollReveal().reveal('.reveal');
ScrollReveal().reveal('.slide-left', slideLeft);
ScrollReveal().reveal('.slide-right', slideRight);
ScrollReveal().reveal('.slide-up', slideUp);
ScrollReveal().reveal('.slide-up-slow', slideUpSlow);
ScrollReveal().reveal('.slide-down', slideDown);
ScrollReveal().reveal('.rotate-right', rotateRight);
ScrollReveal().reveal('.rotate-left', rotateLeft);

// Delays
ScrollReveal().reveal('.delay-05', {delay: 500});
ScrollReveal().reveal('.delay-1', {delay: 1000});
ScrollReveal().reveal('.delay-15', {delay: 1500});
ScrollReveal().reveal('.delay-2', {delay: 2000});
