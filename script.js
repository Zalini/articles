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


// $('.multiple-items').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });



$(".multiple-items").slick({
  infinite: true,
  speed: 200,
  fade: true,
  cssEase: 'linear',
  swipe: true,
  mobileFirst: true,
  accessibilty: true
});


// $(".thirdCarousel").slick({
// 	infinite: true,
// speed: 200,
//   fade: true,
//   cssEase: 'linear',
//   swipe: true,
//   mobileFirst: true,
//   accessibilty: true
// });



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







// $(document).ready(function(){
// //first box test
// $(".tester:eq(0)").on("click", function(){
// // $("#coverBox, #exitBtn, #articleContent").fadeIn(3000);
// $(".tester:gt(0)").hide(100);
// $("#mainContent").slideUp(1000);
// $("#articleContent, #exitBtn").show();
// var article1 = $(".article-one").show();
// $("#articleContent").html(article1);

// var article1 = $(".article-one").show();
// $("#articleContent").html(article1);

// var indexArticle = 0; 

// $(".article-one li").eq(indexArticle).show();
// $(".article-one li").next().hide();
// $(".article-one li").click(function(){
// $(".article-one li").eq(indexArticle).hide();
// indexArticle = (indexArticle + 1) % $(".article-one li").length;
// $(".article-one li").eq(indexArticle).fadeIn(700);
// });

// $("#exitBtn").on("click", function(){
// 	$("#articleContent").toggle();
// });
// });
// });


// for the slideshow
// $(document).ready(function(){
// //first box test
// $(".oneBox, .twoBox, .threeBox").on("click", function(){
// $("#coverBox, #exitBtn, .articleContent").show();
// var numbers = $(this).attr("data-title");
// var contentClicked = $("#" + numbers).show();
// $(".articleContent contentClicked").html(contentClicked);


// $("#exitBtn").on("click", function(){
// 	$("#coverBox, #exitBtn, .articleContent").fadeOut();
// });

// var indexArticle = 0; 

// $("#one li").eq(indexArticle).show();
// $("#one li").next().toggle();

// $("#one li").click(function(){
// $("#one li").eq(indexArticle).toggle();
// indexArticle = (indexArticle + 1) % $("#one li").length;
// $("#one li").eq(indexArticle).fadeIn(700);
// });


// });
// });




// var article1 = $(".article-one").show();
// $("#articleContent").html(article1);

// var indexArticle = 0; 

// $(".article-one li").eq(indexArticle).show();
// $(".article-one li").next().hide();
// $(".article-one li").click(function(){
// $(".article-one li").eq(indexArticle).hide();
// indexArticle = (indexArticle + 1) % $(".article-one li").length;
// $(".article-one li").eq(indexArticle).fadeIn(700);
// });



// $("#exitBtn").on("click", function(){
// 	$("#coverBox, #exitBtn, #articleContent").fadeOut(3000);
// });

// });

// //second box test
// $(".tester").eq(1).on("click", function(){
// $("#coverBox, #exitBtn, #articleContent").fadeIn(100);
// var article2 = $(".article-two").show();
// $("#articleContent").html(article2);

// $("#articleContent").on("click", function(){
// 	$("#coverBox, #exitBtn, #articleContent").hide(100);
// });
// });



// var indexArticle = 0; 

// $(".article-two li").eq(indexArticle).show();
// $(".article-two li").next().hide();
// $(".article-two li").click(function(){
// $(".article-two li").eq(indexArticle).hide();

// indexArticle = (indexArticle + 1) % $(".article-two li").length;

// $(".article-two li").eq(indexArticle).fadeIn(700);
// });


// var numbers = $(this).attr("data-title");
// var contentClicked = $('.article-' + numbers).fadeIn(700);
// $("#articleContent").html(contentClicked);

// $("#exitBtn").on("click", function(){
// 	$("#coverBox, #exitBtn, #articleContent").fadeOut();
// });


// var indexArticle = 0; 

// $(".article-one li").eq(indexArticle).show();
// $(".article-one li").next().hide();

// $(".article-one li").click(function(){
// $(".article-one li").eq(indexArticle).hide();

// indexArticle = (indexArticle + 1) % $(".article-one li").length;

// $(".article-one li").eq(indexArticle).fadeIn(700);
// });

// $("#exitBtn").on("click", function(){
// 	$("#coverBox, #exitBtn, #articleContent").fadeOut();
// });

