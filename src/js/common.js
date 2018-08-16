

$(".form__phone").mask('+38 (099) 999-99-99');

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
function changeSlideText(slider, textBlock) {
    var text = textBlock.find(".text-element-js");

    text[0].style.display="block";

    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        text.css("display", "none");
        text[nextSlide].style.display="block";
    });
};
// end__change other content when change current slide


// favorite-block
$(".favorites-button").on("click", function() {
    $(this).find(".favorites-button__icon").addClass("favorites-button__icon_active");
    $(this).find(".favorites-button__text").addClass("favorites-button__text_active");
    $(this).find(".favorites-button__count").addClass("favorites-button__count_active");

    $(".favorites").slideDown();
});

$(".favorites-close").on("click", function() {
    $(".favorites-button").find(".favorites-button__icon").removeClass("favorites-button__icon_active");
    $(".favorites-button").find(".favorites-button__text").removeClass("favorites-button__text_active");
    $(".favorites-button").find(".favorites-button__count").removeClass("favorites-button__count_active");

    $(this).closest(".favorites").slideUp();
});
// end__favorite-block

// TAB'S
$(".favorites-title-list__item").on("click", function() {
    var titleItems = $('.favorites-title-list__item');
    var activeTitleItem = $(this);
    var contentItems = $('.favorites-table-list__item');
    var index = titleItems.index(this);
    var activeContentItem = contentItems.eq(index);

    titleItems.removeClass('favorites-title-list__item_active');
    activeTitleItem.addClass('favorites-title-list__item_active');

    contentItems.removeClass('favorites-table-list__item_active');
    activeContentItem.addClass('favorites-table-list__item_active');
});
// end__TAB'S

