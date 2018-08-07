$('.js-filter__range').ionRangeSlider({
    min: 0,
    max: 600,
    type: 'double',
    prettify: true,
    hide_min_max: true,
    hide_from_to: true
});

$(".form__phone").mask("+38(0_ _) _ _ _ _ _ _ _");

// location-active-link
$(".location-list__link").on("click", function() {
	$(".location-list__link").removeClass("location-list__link_active");
	$(".location-list__item").removeClass("location-list__item_active");

	$(this).closest(".location-list__item").addClass("location-list__item_active");
	$(this).addClass("location-list__link_active");
});

if($(".location-list__item").length == 1) {
    $(".location-list__item").css("border-radius", "5px");
}
// end__location-active-link

// change other content when change current slide (described function)
function changeText(slider, textBlock) {
    var text = textBlock.find(".text-element-js");

    text[0].style.display="block";

    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        text.css("display", "none");
        text[nextSlide].style.display="block";
    });
};
// end__change other content when change current slide

