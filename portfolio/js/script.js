


// АНИМАЦИЯ КНОПКИ ЯКОРЯ

$("#animation_link").click(function (event) {
	event.preventDefault();
	$("html,body").animate({
         scrollTop: $("#top").offset().top
     }, 700);
})

$("#button_skil").click(function (event) {
	event.preventDefault();
	$("html,body").animate({
         scrollTop: $("#contact_me").offset().top - 70
     }, 700);
})

$('[data-scrol]').on('click', function(event){
	event.preventDefault();

	let elementId = $(this).data('scrol');
	let elementOffset = $(elementId).offset().top;
	$('html, body').animate({
		scrollTop: elementOffset - 70
	}, 700);
});




// Фиксация меню

let menu = $('#top');
let menuH = menu.innerHeight();  //получили высоту меню
let scrollPos = $(window).scrollTop();
let home = $('#home_wr');
let homeH = home.innerHeight();
let nav = $('.main_nav_menu');
let burger = $('.burger');
let nav_links = $('.nav_links');

$(window).on('scroll load resize', function () {
	
	menuH = menu.innerHeight();
	scrollPos = $(this).scrollTop();

	if (scrollPos > homeH ){
		menu.addClass('fixed');
		nav.addClass('marg_top');

	} else {
		menu.removeClass('fixed');
		nav.removeClass('marg_top');
	}
});

// скрытие бургера после нажатия по ссылке

nav_links.on('click', function(){
	nav.removeClass('open');
});

// Бургер

burger.on('click', function(){
	nav.toggleClass('open');
});



// Заполнение прогрессбаров

$(document).bind('scroll', function () {

	if ($(window).scrollTop() > 1700) {

		$('#html_val').animate({
	width: $('#html_val').text()
	}, 1200, "linear" ) ;

	$('#css_val').animate({
		width: $('#css_val').text()
	}, 1200, "linear" ) ;

	$('#js_val').animate({
		width: $('#js_val').text()
	}, 1200, "linear" ) ;

	$('#jquery_val').animate({
		width: $('#jquery_val').text()
	}, 1200, "linear" ) ;

	$('#boot_val').animate({
		width: $('#boot_val').text()
	}, 1200, "linear" ) ;

	$('#wp_val').animate({
		width: $('#wp_val').text()
	}, 1200, "linear" ) ;

	$('#php_val').animate({
		width: $('#php_val').text()
	}, 1200, "linear" ) ;

	}

	
});



// МОДАЛЬНЫЕ ОКНА


window.onload = function () {

	var imgArr = document.getElementsByClassName('portfolio_item_wr');
	var modalImg = document.getElementById('item_modal');
	var modal_block = document.getElementById('modal_block');
	var span = document.getElementById('close');
	var img01 = document.getElementById('img01');
	var portfolio_item = document.getElementsByClassName('portfolio_item');



	for (i=0; i<imgArr.length; i++){

		var picture = imgArr[i];
		picture.onclick = function (event) {
			var target = event.target;
			var id = target.id;
			openImg(id)
		
		}

	}

	function openImg(pic) {

		modalImg.style.display = 'block';
		
		modal_block.style.transform = 'translateY(0%)';
		if (pic == 1){
			img01.src = "images/portfolio_item1.png";
		}
		if (pic == 2){
			img01.src = "images/portfolio_item2.png";
		}
		if (pic == 3){
			img01.src = "images/portfolio_item3.png";
		}
		if (pic == 4){
			img01.src = "images/portfolio_item4.png";
		}
		if (pic == 5){
			img01.src = "images/portfolio_item5.png";
		}
		if (pic == 6){
			img01.src = "images/portfolio_item6.png";
		}
	}

	function close() {
		modalImg.style.display = 'none';
		
	}

	span.onclick = function () {
		modal_block.style.transform = 'translateY(-500%)';
		setTimeout(close, 500);
	}



	
}





