$(document).ready(function(){

	// PARALLAX HEADER
  $('.parallax').parallax();

  // SCROLLSPY
  $('.scrollspy').scrollSpy({
  	scrollOffset: 70
  });

  // MOBILE NAVIGATION
  $(".button-collapse").sideNav({
    menuWidth: 150,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });

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