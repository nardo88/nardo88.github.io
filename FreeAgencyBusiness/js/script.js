// ФИКСИРОВАННОЕ МЕНЮ

let header = $('#header');
let headH = header.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on('scroll load resize', function () {
	headH = header.innerHeight();
	scrollPos = $(this).scrollTop();

	if (scrollPos > headH){
		header.addClass('fixed');
	} else {
		header.removeClass('fixed');
	}
});

// ЯКОРНЫЕ ССЫЛКИ

$('[data-scrol]').on('click', function (event) {
	event.preventDefault();

	let elementId = $(this).data('scrol');
	let elementOffset = $(elementId).offset().top;


	
	if($("#header").hasClass("fixed")){

			$('html, body').animate({
			scrollTop: elementOffset - 57
		}, 700);

	} else {
		$('html, body').animate({
			scrollTop: elementOffset - 194
		}, 700);
	}

});


// Бургер

let burger = $('.burger');
let nav_links = $('.nav_link');
let nav = $('.nav');

burger.on('click', function(){
	
	nav.toggleClass('open');
});

nav_links.on('click', function(){
	nav.removeClass('open');
});


