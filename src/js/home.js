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

// slider change text
function changeText(slider, textBlock) {
    var text = textBlock.find(".text-element-js");
    var heading = textBlock.find(".heading-element-js");

    text[0].style.display="block";
    if(heading.length != 0) {
        heading[0].style.display="block";
    }


    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        text.css("display", "none");
        if(heading.length != 0) {
            heading.css("display", "none");
            heading[nextSlide].style.display="block";
        }
        text[nextSlide].style.display="block";
    });
};

changeText($(".home-slider"), $(".slide-info-list"));
// end__slider change text