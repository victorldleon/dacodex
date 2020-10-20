$(document).ready(function () {
  // $(".slick-container").slick({
  //   dots: true,
  //   arrows: false,
  //   autoplay: false,
  //   centerPadding: 0,
  // });

$('.slick-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slick-container',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
		
});
