// Слайдер для шапки

$(document).ready(function(){

 var slider = $("#headerSlider");
 
 slider.on('initialized.owl.carousel changed.owl.carousel', function(event){
 	$('.active_number').text(event.item.index + 1);
 	$('.total_number').text(event.item.count);
 });

 slider.owlCarousel({

  		items: 1,
  		dots: false,
  		smartSpeed: 1000,
  		
  });

  $('#customNextBtn').click(function() {
    slider.trigger('next.owl.carousel');
	})

	$('#customPrevBtn').click(function() {
	  slider.trigger('prev.owl.carousel');
	})


// Слайдер для магазина
 var sliderShop = $("#shopSlider");
 
 sliderShop.owlCarousel({

      items: 3,
      dots: false,
      smartSpeed: 500,
      loop: true
      
  });


  $('#ShopNextBtn').click(function() {
    sliderShop.trigger('next.owl.carousel');
  })

  $('#ShopPrevBtn').click(function() {
    sliderShop.trigger('prev.owl.carousel');
  })
	
});



