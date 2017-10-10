$(document).ready(function(){
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({
  	scrollOffset:0
  });
  $(".button-collapse").sideNav();
  $('.slider').slider();
  $('#main-nav').pushpin({
      top: $('#main-nav').offset().top 
    });
    $('.scrollspy').scrollSpy({
      scrollOffset: 0
    });
});