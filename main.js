window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//HOME
sr.reveal('.hey',{})
sr.reveal('.name',{delay:200})
sr.reveal('.student',{delay:500})
sr.reveal('.homeBtn',{delay:1000,interval:200})

//ABOUT
sr.reveal('.contentBx',{})
sr.reveal('.img',{delay:200})

//TECH
sr.reveal('.contentBx',{})
sr.reveal('.techBx',{delay:200, interval:200})

//PROJECTS
sr.reveal('.projectsBx',{interval:300})

//CONTACT
sr.reveal('.box',{interval:400})
sr.reveal('.frm',{interval:200})