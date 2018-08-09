$('.residence-slider').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 500,
    // infinite: false,
    arrows: true,
  	prevArrow: '.residence-slider__button-prev',
	nextArrow: '.residence-slider__button-next'
});

// show-hide residence-slider__button-prev
$(".residence-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$(".residence-slider__button-prev").css("opacity", "1");
	var currrentIndex = $(".residence-slider").find('.slick-current').index();
	var itemsNumber = ($(".residence-slider__item").length-1)/2;
	if(currrentIndex == itemsNumber) {
		$(".residence-slider__button-prev").css("opacity", "0");
	}
});
// end__show-hide residence-slider__button-prev

// show-hide-fullscreen-image
$(".many-image-box__image_hover").on("click", function() {
	var residenceImages = $(".many-image-box__image");
	var currentImageSrc = $(this).siblings(".many-image-box__image").attr("src");
	var currentIndex = $(".many-image-box__image_hover").index(this);

	function rewriteSlider(sliderClassName) {
		$('.' + sliderClassName).remove();
		var slider = $('.full-image-slider-wrap').append(
			"<ul class=" + sliderClassName + ">" + "</ul>"
		);
		return slider;
	}

	function addSliderItems(sliderClassName) {
		rewriteSlider(sliderClassName);

		var slider = $("." + sliderClassName);

		for(var i = 0; i < residenceImages.length; i++) {
			var imageSrc = $(residenceImages[i]).attr("src");

			var result = slider.append(
					'<li class=' + sliderClassName + '__item' + '>' +
		                "<img src=" + imageSrc + " class=" + sliderClassName + "__image" + ">" + 
		            "</li>"
			);
		}

		return result;
	}

	addSliderItems('full-image-slider');
	addSliderItems('full-image-slider-nav');

	// initialize slick plugin
	$('.full-image-slider').slick({
	    autoplay: false,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    speed: 1000,
	    autoplaySpeed: 500,
	    arrows: true,
	  	prevArrow: '.full-image-slider__button-prev',
		nextArrow: '.full-image-slider__button-next',
		asNavFor: '.full-image-slider-nav'
	});

	$('.full-image-slider-nav').slick({
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  asNavFor: '.full-image-slider',
	  focusOnSelect: true,
	  arrows: false
	});
	// end__initialize slick plugin

	// function showSelectImage() {
	// 	var slides = $(".full-image-slider").find(".slick-slide");
	// 	for(var i = 0; i < slides.length; i++) {
	// 		$(slides[i]).removeClass("slick-active");
	// 		$(slides[i]).removeClass("slick-current");
	// 	}
	// 	// $(slides[currentIndex]).addClass(".slick-current");
	// 	// $(slides[currentIndex]).addClass(".slick-active");
	// 	// var a = $(".full-image-slider").find(".slick-current");
	// 	$(slides[currentIndex]).find(".full-image-slider__image").attr("src", currentImageSrc);
	// 	console.log($(slides[currentIndex+1]));
	// }
	// showSelectImage();
	$(".full-image-slider").find(".slick-current").find(".full-image-slider__image")
				.attr("src", currentImageSrc);
	$(".full-image").fadeIn();

});

$(".full-image__cancel").on("click", function() {
	$(this).closest(".full-image").fadeOut();
});
// end__show-fullscreen-image

