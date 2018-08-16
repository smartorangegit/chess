$('.profile-flat-slider').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 500,
    arrows: true,
  	prevArrow: '.profile-flat-slider__button-prev',
	nextArrow: '.profile-flat-slider__button-next'
});

// slider change text
    //this function locate in common.js
changeSlideText($(".profile-flat-slider"), $(".profile-flat-heading"));
changeSlideText($(".profile-flat-slider"), $(".profile-flat-info"));
// end__slider change text