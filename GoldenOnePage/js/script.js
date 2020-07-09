$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
       }
    }]
  });
});

let navigation = $('.navigation');
let scrollPos = $(window).scrollTop();
let header = $('.header');
let headerH = header.innerHeight();
let burger = $('.burger');
let nav = $('.nav_links');
let nav_link = $('.nav_link');


$(window).on('scroll load resize', function () {
  let headerH = header.innerHeight();
  let scrollPos = $(this).scrollTop();

  if (scrollPos > headerH){
    navigation.addClass('fixed');
  } else {
    navigation.removeClass('fixed');

  }

});

$('.header_btn').click(function () {
  $("html, body").animate({
    scrollTop: $("#services").offset().top + 1
  }, 700);
});

$('[data-scrol]').click(function (event) {
  event.preventDefault();

  let elementId = $(this).data('scrol');
  let elementOffset = $(elementId).offset().top;
 
   $('html, body').animate({
      scrollTop: elementOffset + 1
    }, 700);

});

burger.on('click', function () {
  nav.toggleClass('open');
  
});

nav_link.on('click', function () {
  nav.removeClass('open');
});