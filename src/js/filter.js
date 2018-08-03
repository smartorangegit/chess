
$(".filter-top__button_more").on("click", function() {
    $(this).toggleClass("filter-top__button_more_active");
    $(this).find(".filter-top__button-icon").toggleClass("filter-top__button-icon_active");
    $(".filter-full").slideToggle();
});
$(".filter-full__button_more").on("click", function() {
    $(this).toggleClass("filter-full__button_more_active");
    $(this).find(".filter-full__button-icon").toggleClass("filter-full__button-icon_active");
    $(".filter-settings").slideToggle();
});


// document.querySelectorAll(".entrance-flats__item").forEach(function(item) {
//     var data = item.getAttribute("data-color");
//     var box = $(item).find(".entrance-flats__color-box");
//     if(data == "green") {
//         box.addClass("color-box_green");
//     } else if(data == "yellow") {
//         box.addClass("color-box_yellow");
//     } else if(data == "gray") {
//         box.addClass("color-box_gray");
//     } else if(data == "dark-gray") {
//         box.addClass("color-box_dark-gray");
//     } 
// });


(function entranceShow() {
    
    //test array
    var third = [
                   [
                        [
                            {
                                status: 0,
                                rooms: 3
                            },
                            {
                                status: 1,
                                rooms: 3
                            },
                            {
                                status: 2,
                                rooms: 3
                            }
                        ],
                        [
                            {
                                status: 0,
                                rooms: 3
                            },
                            {
                                status: 1,
                                rooms: 3
                            },
                            {
                                status: 2,
                                rooms: 3
                            }
                        ],
                        [
                            {
                                status: 0,
                                rooms: 3
                            },
                            {
                                status: 1,
                                rooms: 3
                            },
                            {
                                status: 2,
                                rooms: 3
                            }
                        ],
                        [
                            {
                                status: 0,
                                rooms: 3
                            },
                            {
                                status: 1,
                                rooms: 3
                            },
                            {
                                status: 2,
                                rooms: 3
                            }
                        ],
                    ],
                    [
                        [
                            {
                                status: 0,
                                rooms: 3
                            },
                            {
                                status: 1,
                                rooms: 3
                            },
                            {
                                status: 2,
                                rooms: 3
                            }
                        ],
                        [
                            {
                                status: 0,
                                rooms: 3
                            },
                            {
                                status: 1,
                                rooms: 3
                            },
                            {
                                status: 2,
                                rooms: 3
                            }
                        ],
                        [
                            {
                                status: 0,
                                rooms: 1
                            },
                            {
                                status: 1,
                                rooms: 2
                            },
                            {
                                status: 3,
                                rooms: 3
                            }
                        ],
                    ] 
                ];

    function getAppartment(appart) {
        switch (appart.status) {
            case 0:
                return "<li class='entrance-flats__item'>" +
                            "<div class='entrance-flats__color-box color-box_green'>" + appart.rooms + "</div>" + 
                        "</li>";
            case 1:
                return "<li class='entrance-flats__item'>" +
                            "<div class='entrance-flats__color-box color-box_yellow'>" + appart.rooms + "</div>" + 
                        "</li>";
            case 2:
                return "<li class='entrance-flats__item'>" +
                            "<div class='entrance-flats__color-box color-box_gray'>" + appart.rooms + "</div>" + 
                        "</li>";
            case 3:
                return "<li class='entrance-flats__item'>" +
                            "<div class='entrance-flats__color-box color-box_dark-gray'>" + appart.rooms + "</div>" + 
                        "</li>";
            default:
                return;
        }
    }

    function maxValue(arr) {
        var max = arr.reduce(function(a, b) {
            return Math.max(a, b);
        });

        return max;
    }

    function entrance(entranceArr) {
        var finalMarkup = "";
        var floorsNum = [];
        entranceArr.forEach(function(item, i) {
            finalMarkup += "<div class='entrance'>" + 
                                "<p class='entrance__num'>" + (i+1) + "</p>" + 
                                "<div class='entrance-flats-wrap'>" +
                                    floor(item) +
                                "</div>" + 
                            "</div>";

            floorsNum.push(item.length); 
        });
        var maxFloor = maxValue(floorsNum);

        // return finalMarkup;
        return {
            finalMarkup: finalMarkup,
            maxFloor: maxFloor
        }
    }

    function floor(floorArr) {
        var floorMarkup = "";

        floorArr.forEach(function(item, i) {
            floorMarkup += "<ul data-link='dfvb' class='entrance-flats'>" +
                                    flat(item) +
                           "</ul>";
        });

        return floorMarkup;
    }

    function flat(first) {
        var flatMarkup = "";

        first.forEach(function(item) {
            flatMarkup += getAppartment(item);
        });

        return flatMarkup;
    }

    $(".entrance-wrap").append(entrance(third).finalMarkup);


    function floorsNum(floors) {
        for(var i = 0; i < floors; i++) {
            $(".entrance-floor").append(
               "<li class='entrance-floor__item'>" + (i+1) + "</li>" 
            );
        }
    }
    floorsNum(entrance(third).maxFloor);
}());

// show-floor-plan
$(".entrance-flats").hover(
    function() {
        var targetTop = $(this).offset().top;
        var wrapperTop = $(this).closest(".result-tile").offset().top;
        var diffrent = targetTop - wrapperTop - 3;
        var link = $(this).data();

        $(".floor-plan").css({
            top: diffrent,
            display: "block"
        });

        $(".floor-plan__link").attr("href", link);
    },
    function() {
        $(".floor-plan").css("display", "none");
    }
);

$(".floor-plan").hover(
    function() {
        $(this).css("display", "block");
    },
    function() {
        $(this).css("display", "none");
    }
);
// end__show-floor-plan

// change-view
$(".result-short__select").on("click", function() {
    $(this).siblings(".view-list").slideToggle();
});

$(".view-list__item").on("click", function() {
    var text = $(this).find(".view-list__text").html();
    var iconId = "#" + $(this).find(".view-list__icon").attr("id");
    var mainIcon = $(this).closest(".result-short__select-wrap")
                          .find(".result-short__select-icon");
    var mainText = $(this).closest(".result-short__select-wrap")
                          .find(".result-short__select");

    mainText.html(text);
    mainIcon.find("use").attr("xlink:href", iconId);
    $(this).closest(".view-list").css("display", "none");

    var index = $(this).index();
    if(index === 0) {
        $(".result-plan").fadeIn();
        $(".result-tile-wrap").css("display", "none");
    } else if(index === 2) {
        $(".result-tile-wrap").fadeIn();
        $(".result-plan").css("display", "none");
    }
});
// end__change-view



