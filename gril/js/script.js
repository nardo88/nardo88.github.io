$(document).ready(function(){



	// Инициализация слайдера

 	  $('.slider_new_gril').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  asNavFor: '.slider_nav',
 
	});

 	//Инициализация навигации слайдера

	$('.slider_nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  variableWidth: true,
	  asNavFor: '.slider_new_gril',
	  centerMode: true,
	  focusOnSelect: true,
	  centerPadding: '80px',
	  prevArrow: '<button class="prev"></button>',
      nextArrow: '<button class="next"></button>',
	});


	

});


	// Табы

	const tabNavItem = document.querySelectorAll('.tab_nav_item');
	const tabContentItem = document.querySelectorAll('.tab_content_item');
	
		
	for ( var ind = 0; ind < tabNavItem.length; ind++) {
		tabNavItem[ind].addEventListener('click', addActive);
	}


	

	function addActive(event) {

		for ( var ind = 0; ind < tabNavItem.length; ind++) {
			tabNavItem[ind].classList.remove("active_tab");
			tabContentItem[ind].classList.remove("active_tab_contant");
		}

		var target = event.target;
		for (var i = 0; i < tabNavItem.length; i++) {
			if (target == tabNavItem[i]){
				tabNavItem[i].classList.add("active_tab");
				tabContentItem[i].classList.add("active_tab_contant");
			}
		}
		
		
	}


 var slider = $(".owl-carousel");
	slider.owlCarousel({
	loop: true,
	items: 5,
	dots: false,
	center: true,
	margin: 5,
	// mouseDrag: false,
 });

$('.dop_slider_prev').click(function(){
	
	slider.trigger('prev.owl.carousel');
})

$('.dop_slider_next').click(function(){
	
	slider.trigger('next.owl.carousel');
})



$('.first_choise_img').click(function(){
	$('.first_choise_block').toggleClass('first-head-wr-active');
})