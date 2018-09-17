$('.residence-slider').slick({
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 500,
    arrows: true,
  	prevArrow: '.residence-slider__button-prev',
	nextArrow: '.residence-slider__button-next'
});

// show-hide residence-slider__button-prev
$(".residence-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
	$(".residence-slider__button-prev").css("opacity", "1");
	var currrentIndex = $(".residence-slider").find('.slick-current').index();
	if(currrentIndex == 0) {
		$(".residence-slider__button-prev").css("opacity", "0");
	}
});
// end__show-hide residence-slider__button-prev

// show-hide-fullscreen-image-popup
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
		// create array width elements in right direction(first element is clicked image)
		var imageArr = [], 
			newImageArr = [],
			newImageArrBegining = [], 
			newImageArrEnding = [];

		residenceImages.each(function(i, item) {
			imageArr.push(item);
		});

		newImageArrEnding = imageArr.slice(0, currentIndex);
		newImageArrBegining = imageArr.slice(currentIndex);
		newImageArr = newImageArrBegining.concat(newImageArrEnding);
		// end__create array...

		for(var i = 0; i < newImageArr.length; i++) {
			var imageSrc = $(newImageArr[i]).attr("src");
			var imageId = $(newImageArr[i]).attr("id");

			if(imageId == undefined) {
				imageId = "image";
			} else {
				imageId = "full-size-map";
			};

			var result = slider.append(
					"<li class=" + sliderClassName + "__item" + ">" +
		                "<img id=" + imageId +" src=" + imageSrc + " class=" + sliderClassName + "__image" + ">" + 
		            "</li>"
			);
		};  

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

	(function addingGoogleMap() {
		var mapImage = $("#full-size-map");
		var mapItem = mapImage.closest(".full-image-slider__item");
		mapImage.remove();

		$(mapItem).append(
			"<div id='map' class='big-map'</div>"
		);

		initMap();
	}());

	$(".full-image").fadeIn();
});

$(".full-image__cancel").on("click", function() {
	$(this).closest(".full-image").fadeOut();
});
// end__show-fullscreen-image-popup


function initMap() {
	var lat = document.getElementsByClassName("residence-main")[0].getAttribute("data-lat");
	var lng = document.getElementsByClassName("residence-main")[0].getAttribute("data-lng");
    var uluru = {lat: +lat, lng: +lng};
    var el = document.getElementById('map');
    if(el) {
    	var map = new google.maps.Map(el, {
	        zoom: 14,
	        center: uluru,
	        gestureHandling: 'greedy'
		});
	    
	    var icon = {
	        url: "img/map-marker.png", // url
	        // size: new google.maps.Size(200, 150),
	        // scaledSize: new google.maps.Size(200, 150), // scaled size
	        origin: new google.maps.Point(0, 0) // origin
	        // anchor: new google.maps.Point(87, 232) // anchor
	    };
	    
	    var marker = new google.maps.Marker({
	        position: uluru,
	        map: map
	        // icon: icon
	    });
    }
}


