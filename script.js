let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-img, .home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-img, .home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text',{
    strings: ['UI/UX Developer', 'Web Developer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

const type = new Typed('.abos',{
        strings: ['Third Year College', 'Bachelor of Science in Information Technology'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true
});

const submitButton = document.getElementById("btn");
const text = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const sub = document.getElementById("subject");
const input = document.getElementById("message");

text.addEventListener("keyup, (e) =>");{
    const value = e.currentTarget.value;
    submitButton.disabled = False;
}
email.addEventListener("keyup, (e) =>");{
    const value = e.currentTarget.value;
    submitButton.disabled = False;
}
number.addEventListener("keyup, (e) =>");{
    const value = e.currentTarget.value;
    submitButton.disabled = False;
}
sub.addEventListener("keyup, (e) =>");{
    const value = e.currentTarget.value;
    submitButton.disabled = False;
}
input.addEventListener("keyup, (e) =>");{
    const value = e.currentTarget.value;
    submitButton.disabled = False;
}

    if (value === ""){
        submitButton.disabled = true;
    }

let popup = document.getElementById("popup");

    function openPopup(){
       popup.classList.add("open-popup"); 
    }

    function closePopup(){
        popup.classList.remove("open-popup"); 
     };

