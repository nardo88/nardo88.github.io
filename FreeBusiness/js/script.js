$(document).ready(function(){

    var slider = $(".owl-carousel");
    slider.owlCarousel({

    items: 1,
    loop: true,
    smartSpeed: 1000,
    dots: true
  });


$('#customNextBtn').click(function () {
    slider.trigger('next.owl.carousel');
})

$('#customPrevBtn').click(function () {
    slider.trigger('prev.owl.carousel');
})

});


var svg_imap = document.querySelectorAll('.svg_imap');
var svg_item = document.querySelectorAll('.svg_item');
var triangle = document.querySelectorAll('.triangle');
var filter_items = document.querySelectorAll('.filter_items');

for (var i = 0; i < svg_imap.length; i++) {
    svg_imap[i].addEventListener('click', addActive);
}

function addActive(event) {

    
    for (var i = 0; i < svg_item.length; i++) {
        svg_item[i].classList.remove("active_icon");
        filter_items[i].classList.add("hide");
        triangle[i].classList.add("hide");
    }

    var target = event.target;
   
    for(var a = 0; a < svg_imap.length; a++){
        if (target == svg_imap[a]){

            svg_item[a].classList.add("active_icon"); 
            triangle[a].classList.remove("hide");
            filter_items[a].classList.remove("hide");


        }
    }


}


let nav = $('#nav');
let burger = $('.burger');
let nav_links = $('.nav_links');

burger.on('click', function () {
    nav.toggleClass('open');
})

nav_links.on('click', function () {
    nav.removeClass('open');
})

