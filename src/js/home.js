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
	nextArrow: '.home-slider__button-next',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        infinite: true,
        centerPadding: "100px"
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
});

// change other content when change current slide
    function changeSlideTextHome(slider, textBlock) {
        var text = textBlock.find(".text-element-js");
        var textArr = [];

        for(var i = 0; i < text.length; i++) {
            textArr.push($(text)[i]);
        }
        var lastElement = textArr.pop();
        textArr.unshift(lastElement);

        $(textArr[0]).css("display", "block");

        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(textArr).css("display", "none");
            $(textArr[nextSlide]).css("display", "block");
        });
    };
changeSlideTextHome($(".home-slider"), $(".slide-info-list"));
// end__change other content when change current slide

// popup
$(".home-popup__heading-icon").on('click', function() {
    $(this).closest(".home-popup-wrap").fadeOut();
});
// end__popup
