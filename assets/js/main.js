$(document).ready(function () {

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

$('.view-more-card').click(function(event) {
  event.preventDefault();
  let cardID = this.getAttribute('data-target');
  $(cardID).toggleClass('card-overflow');
})
		
});
