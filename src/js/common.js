// fixed_menu
window.addEventListener("scroll", function() {
    if(window.pageYOffset > 0) {
        document.querySelector(".header").classList.add('header_scroll');
    } else {
        document.querySelector(".header").classList.remove('header_scroll');
    }
});
// end__fixed_menu

// animation on scroll
var animationsArr = ["fade", "slide-left", "slide-right",  
                "slide-top", "slide-bottom", "letter-draw",
                "border-draw_white", "border-draw_black", "home-line-2", 
                "home-line-3", "home-line-4", "home-line-5_1",
                "home-line-5_2", "home-line-6", "home-line-7", "flip",
                "height"];

function animationOnScroll(animationsList) { 
    var elements = document.querySelectorAll(".animation-wrapper-js");
    var arrElement = [];
    var arrDescendants = [];

    elements.forEach(function(item, i) {
        arrElement.push(elements[i]);
    });

    function addAnimations() {
        window.addEventListener("scroll", function() {
            arrElement.forEach(function(item, i) {
                if(item.getBoundingClientRect().top < 500 && item.getBoundingClientRect().top > 100) {

                    var colDescendants = item.getElementsByTagName('*');

                    for(var k = 0; k < colDescendants.length; k++) {
                        if(colDescendants[k].classList.contains("animated-block-js")) {
                            arrDescendants.push(colDescendants[k]);
                        }
                    }

                    //add class for animation
                    for (var j = 0; j < animationsList.length; j++) {
                        arrDescendants.forEach(function(item, i) {
                            if(item.classList.contains(animationsList[j])) {
                                item.classList.add(animationsList[j] + "-in");
                            }
                        });
                    }

                }
            });
        });
    }

    function removeAnimations() {
        arrElement.forEach(function(item, i) {
            var colDescendants = item.getElementsByTagName('*');

            for(var k = 0; k < colDescendants.length; k++) {
                if(colDescendants[k].classList.contains("animated-block-js")) {
                    arrDescendants.push(colDescendants[k]);
                }
            }

            //remove class for animation
            for (var j = 0; j < animationsList.length; j++) {
                arrDescendants.forEach(function(item, i) {
                    if(item.classList.contains(animationsList[j])) {
                        item.classList.remove(animationsList[j]);
                    }
                });
            }
        });
    }

    return {
        addAnimations: addAnimations,
        removeAnimations: removeAnimations
    }
}

if(document.documentElement.clientWidth > 599) {
    animationOnScroll(animationsArr).addAnimations();
} else {
    animationOnScroll(animationsArr).removeAnimations();
}
// end__animation on scroll

// page-slider
$('.page-slider').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 500,
    arrows: true,
    prevArrow: '.page-slider__button_prev',
	nextArrow: '.page-slider__button_next',
    dots: true
});
// end__page-slider

// popup-form
$(".popup-form__input_phone").mask("+38 (099) 999-9999");
$('.popup-form__input_date').pickadate({
    format: 'yyyy-mm-dd',
    formatSubmit: 'yyyy-mm-dd',
    selectYears: true,
    selectMonths: true
});
$('.popup-form__input_time').pickatime({
    format: 'HH:i',
    min: [8,0],
    max: [20,0]
});


$(".form-show-js").on("click", function(e) {
    e.preventDefault();
    $(".popup-form-container").fadeIn(); 

});
$(".popup-form__icon").on("click", function(e) {
    $(".popup-form-container").fadeOut(); 
});
// end__popup-form

// open_sub-list
$(".page-block-1-list__text").on("click", function() {
    function slideElement(list, current) {
        var allSubList = $(list);
        var currentSubList = current.siblings(list);
        var parentSubList = current.closest(".page-block-1-sublist");

        allSubList.removeClass("sublist-open-js");
        currentSubList.addClass("sublist-open-js");
        parentSubList.addClass("sublist-open-js");

        for(var i = 0; i < allSubList.length; i++) {
            if(!$(allSubList[i]).hasClass("sublist-open-js")) {
                $(allSubList[i]).slideUp();
            }
        }
          
        currentSubList.slideToggle();
    }

    slideElement(".page-block-1-sublist", $(this));
    slideElement(".page-block-1-list__info", $(this));

    // $(".page-block-1-list__text").removeClass("triangle_top");
    // $(this).toggleClass("triangle_top");
});
// end__open_sub-list

// slow scroll
    // for many link
    $(".js-anchor__button").on("click", function(e) {
        e.preventDefault();
        var elementIndex = $(".js-anchor__button").index(this);
        var section = $(".people-section");
        var headerHeight = $(".header").height();

        for(var i = 0; i < section.length; i++) {
            var scrollValue = $(section[i]).offset().top - headerHeight - 15;
            if(elementIndex == i) {
                $('body,html').animate({scrollTop: scrollValue}, 500);
            }
        }
    });

    // for one link
    function oneAnchor(button, anchor) {
        button.on("click", function(e) {
            e.preventDefault();
            var section = anchor;
            var headerHeight = $(".header").height();
            var scrollValue = section.offset().top-headerHeight-15;

            $('body,html').animate({scrollTop: scrollValue}, 500);
        });
    }
    oneAnchor($(".js-massage-specialist__button"), $(".massage-specialist"));
    oneAnchor($(".js-cosmetology-specialist__button"), $(".cosmetology-specialist"));
// end__slow scroll


// header-mobile
$(".menu-open").on("click", function() {
    $(".nav-wrapper").slideDown();
    $(".header-mobile__icon").fadeIn();
    $(".menu-open__text").css("font-size", "1rem");
    $(".menu-line-wrap").css("display", "none");
    $(".home-header").css("background-color", "#000");
    $(".header__link").fadeOut();
    $(".menu-open__text_black").css("color", "#fff");
});
$(".header-mobile__icon").on("click", function() {
    $(".nav-wrapper").slideUp();
    $(this).fadeOut();
    $(".menu-line-wrap").css("display", "block");
    $(".menu-open__text").css("font-size", "6px");
    $(".home-header").css("background-color", "rgba(0,0,0,0.3)");
    $(".header__link").fadeIn();
    $(".menu-open__text_black").css("color", "#000");
});
// end__header-mobile

//preloader
function preloader() {
    $(window).on("load", function() {
       setTimeout(function() {
          $(".preloader-wrap").fadeOut();
        }, 1000);
    });
}

if(!sessionStorage.getItem('preloaderRan')) {
    preloader();
} else {
    $(".preloader-wrap").css("display", "none");
}
sessionStorage.setItem('preloaderRan', true);
//end__preloader



