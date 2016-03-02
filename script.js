$(document).ready(function(){
$(".articlesCarousel").slick({
	infinite: true,
	arrows: true,
	fade: true,
	speed: 100,
	swipe: true,
	mobileFirst: true,
	accessibilty: true
});


$(".multiple-items").slick({
  infinite: true,
  speed: 200,
  fade: true,
  cssEase: 'linear',
  swipe: true,
  mobileFirst: true,
  accessibilty: true
});


 $('.thirdCarousel').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
 
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.thirdCarousel',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

});
