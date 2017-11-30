$(document).ready(function(){

	// PARALLAX HEADER
  $('.parallax').parallax();
  // SCROLLSPY
  $('.scrollspy').scrollSpy({
  	scrollOffset: 70
  });
  
  // SIDE NAVIGATION
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();

  // PROJECT SLIDER
  $('.slider').slider();
  // STICKY NAVIGATION
  $('#main-nav').pushpin({
    top: $('#main-nav').offset().top 
  });
  // PICTURE CAROUSEL
  $('.carousel').carousel({
  	dist: -25
  });

});