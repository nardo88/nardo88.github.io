$(document).ready(function(){

	// Slick слайдер
	$('.slider_wraper').slick({
	arrows:false,
	dots: true
	});


	// OWL карусель
	var slider = $(".owl-carousel");
	slider.owlCarousel({

	items: 3,
	dots: false,
	smartSpeed: 1000,
	center: true,
	loop:true,
	responsive: {
        0 : {
          items: 1,
          center: true,
          loop:true,
        },
        665 : {
          items: 1,
          center: true,

        },
        970 : {
          items: 3
        },
        
      }

	});
});


$('[data-scrol]').on('click', function (event) {
	event.preventDefault();

	let elementId = $(this).data('scrol');
	let elementOffset = $(elementId).offset().top;

	$('html, body').animate({
		scrollTop: elementOffset
	}, 700);
});



// Бургер

let nav = $('#nav');
let burger = $('.burger');
let nav_link = $('.nav_link');


burger.on('click', function(){
	nav.toggleClass('open');
});

nav_link.on('click', function(){
	nav.removeClass('open');
});