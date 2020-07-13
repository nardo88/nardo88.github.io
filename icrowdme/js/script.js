
$(document).ready(function(){
  $('.slider').slick({
   	prevArrow: '<button class="prev"></button>',
   	nextArrow: '<button class="next"></button>'
  });


   $('.projects_slider').slick({
   	slidesToShow: 3,
   	arrows: false,
   	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        
        
       }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

]
   
  });
})


let tab_control_item = document.querySelectorAll('.tab_control_item');
let tab_control_item_name = document.querySelectorAll('.tab_control_item_name');

let tab_control_item_number = document.querySelectorAll('.tab_control_item_number');
let tab_contant_item = document.querySelectorAll('.tab_contant_item');


for (var i = 0; i < tab_control_item.length; i++) {
	tab_control_item[i].addEventListener('click', addActive);
}

function addActive(event) {

	for(var i = 0; i < tab_control_item.length; i++){
		tab_control_item_number[i].classList.remove("active_item");
		tab_contant_item[i].classList.remove("active_tab_contant");

	}

	var target = event.target;
	
	for (var a = 0; a < tab_control_item.length; a++){
		if (target == tab_control_item_name[a] || target == tab_control_item[a] || target == tab_control_item_number[a]){
			tab_control_item_number[a].classList.add("active_item");
			tab_contant_item[a].classList.add("active_tab_contant");
		}
	}
}


let modal_window = document.querySelector('.modal_window');
let login_btn = document.querySelector('.login_btn');
let body = document.querySelector('.body');
let close_modal = document.querySelectorAll('.close_modal');
let forget_pass = document.querySelector('.forget_pass');
let log_in_wind = document.querySelector('.log_in_wind');
let back = document.querySelector('.back');
let window_wrapper = document.querySelector('.window_wrapper');
let autorizate = document.querySelector('.autorizate');
let registration = document.querySelector('.registration');
let forget_window = document.querySelector('.forget_window');
let registr = document.querySelector('.registr');
let autorizate_from_reg = document.querySelector('.autorizate_from_reg');


login_btn.addEventListener('click', function () {
  modal_window.classList.add("open_modal");
  body.style.overflow = 'hidden';
});

for(var i = 0; i < close_modal.length; i++){
  close_modal[i].addEventListener('click', close_modal_win);
}


function close_modal_win() {
  modal_window.classList.remove("open_modal");
  body.style.overflow = 'auto';
}

forget_pass.addEventListener('click', function () {
  window_wrapper.style.transform = "rotateY(180deg)";
    
});

registration.addEventListener('click', function () {
  window_wrapper.style.transform = "rotateY(180deg)";
  forget_window.style.display = "none";
  registr.style.display = "block";
      
});


autorizate_from_reg.addEventListener('click', function () {

  window_wrapper.style.transform = "rotateY(360deg)";
  forget_window.style.display = "block";
  registr.style.display = "none";
      
});



autorizate.addEventListener('click', function () {
  window_wrapper.style.transform = "rotateY(360deg)";
   
});


let nav = $('.nav');
let burger = $('.burger');
let nav_link = $('.nav_link');

burger.on('click', function () {
  nav.toggleClass('open');
});

nav_link.on('click', function () {
  nav.removeClass('open');
});