```javascript id="hsk28a"
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });

    });

});


// Fade animation on scroll

const cards = document.querySelectorAll('.project-card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const triggerBottom = window.innerHeight * 0.85;

        if(cardTop < triggerBottom){

            card.classList.add('show');

        }

    });

});


// Typing effect

const title = document.querySelector('.content h1');

const text = "Automation & Integration Engineer";

let index = 0;

function typeEffect(){

    if(index < text.length){

        title.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);

    }

}

title.innerHTML = "";

typeEffect();
```
