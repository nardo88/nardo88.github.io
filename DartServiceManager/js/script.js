$('.statistics_head').bind('click', function () {
	$('.statistic_content').slideToggle();
	
});

$('.inbox_head').bind('click', function () {
	$('.inbox_contant').slideToggle();
	
});


$('.team_head').bind('click', function () {
	$('.team_contant').slideToggle();
	
});

$('.setting_head').bind('click', function () {
	$('.setting_contant').slideToggle();
	
});

$('.feed_head').bind('click', function () {
	$('.feed_contant').slideToggle();
	
});


// Слайдер testimonials

$('.slider').slick({
	
	infinite: true,
	slidesToShow: 2,
	slideToScroll: 1,
	vertical: true,
	verticalSwiping: true,
	prevArrow: '<button class="prew"></button>',
	nextArrow: '<button class="next"></button>',
});

// Слайдер team с фотографиями

$('.team_slider_photo').slick({
  infinite: true,
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
  arrows: false,
  focusOnSelect: true,
  asNavFor: '.team_slider_descr'
});

// слайдер с описанием


$('.team_slider_descr').slick({
  infinite: true,
  slideoShow: 1,
  arrows: false,
  asNavFor: '.team_slider_photo'
  
});

let burger = $('.burger');
let nav = $('#nav');

burger.on('click', function () {
	nav.toggleClass('open');
})
