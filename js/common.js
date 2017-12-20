$(document).ready(function () {

  $(".owl-1").owlCarousel({
  	responsive: {
      0: {
        nav: false,
      },
      992: {
    		nav: true,
      }
    },
    items: 1,
    dots: true,
    smartSpeed : 1000,
    margin: 15,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
  });

  function scrolling () {
		if ($(window).scrollTop() > $(window).height()) {
      $('.navbar').addClass("fixed-top");
    } else {
      $('.navbar').removeClass("fixed-top");
    }
  };

  $(window).on("scroll", function() {
		scrolling ();
	});
	scrolling ();

});