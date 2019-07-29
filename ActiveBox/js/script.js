let header = $('#header');
let head_bg = $('#head_bg');
let head_bgH = head_bg.innerHeight(); //получаем высоту блока headBG
let scrollPos = $(window).scrollTop(); // получаем значение скрола
let header_inner = document.querySelector('.header_inner');

$(window).on('scroll load resize', function () {
	head_bgH = head_bg.innerHeight();
	scrollPos = $(this).scrollTop();

	if (scrollPos > head_bgH){
		header.addClass('fixed');
		header_inner.style.padding = '0';
	} else {
		header.removeClass('fixed');
		header_inner.style.padding = '40px 0';
	}
});

let nav = $('.nav');
let burger = $('.burger');

burger.on('click', function(){
	nav.toggleClass('open');
});





$('[data-scrol]').on('click', function(event){
	event.preventDefault();

	let elementId = $(this).data('scrol');
	let elementOffset = $(elementId).offset().top;
	nav.removeClass('open');
	$('html, body').animate({
		scrollTop: elementOffset - 70
	}, 700);
});

