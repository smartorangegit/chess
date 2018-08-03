$('.js-filter__range').ionRangeSlider({
    min: 0,
    max: 600,
    type: 'double',
    prettify: true,
    hide_min_max: true,
    hide_from_to: true
});

// location-active-link
$(".location-list__link").on("click", function() {
	$(".location-list__link").removeClass("location-list__link_active");
	$(".location-list__item").removeClass("location-list__item_active");

	$(this).closest(".location-list__item").addClass("location-list__item_active");
	$(this).addClass("location-list__link_active");
});
// end__location-active-link

