$('.home-slider').slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 500,
    centerMode: true,
    centerPadding: "100px",
    arrows: true,
  	prevArrow: '.home-slider__button-prev',
	nextArrow: '.home-slider__button-next'
});

// change other content when change current slide
    //this function locate in common.js
changeText($(".home-slider"), $(".slide-info-list"));
// end__change other content when change current slide