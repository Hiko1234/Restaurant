// burger

const navBtn = document.querySelector('.nav');
const navBurger = document.querySelector('.nav-burger');
const body = document.body

navBtn.addEventListener('click', function () {
    navBurger.classList.toggle('nav-burger-active');
    navBtn.classList.toggle('burger-close')
    body.classList.toggle('no-scroll')
})

// slider

$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        slidesToShow: 5,
        centerPadding: '60px',
        centerMode: true,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                arrows: true,
                centerPadding: '30px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1024,
              settings: {
                arrows: true,
                centerPadding: '20px',
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerPadding: '15px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 410,
              settings: {
                arrows: false,
                centerPadding: '5px',
                slidesToShow: 1
              }
            }
          ]
    })
})
