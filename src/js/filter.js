
$(".filter-top__button_more").on("click", function() {
    $(this).toggleClass("filter-top__button_more_active");
    $(this).find(".filter-top__button-icon").toggleClass("filter-top__button-icon_active");
    $(".filter-full").slideToggle();
     $(".filter-settings").slideUp();
});
$(".filter-full__button_more").on("click", function() {
    $(this).toggleClass("filter-full__button_more_active");
    $(this).find(".filter-full__button-icon").toggleClass("filter-full__button-icon_active");
    $(".filter-settings").slideToggle();
});

// cahnge color-box color
document.querySelectorAll(".color-box").forEach(function(item) {
    var data = item.getAttribute("data-color");
    if(data == "green") {
        $(item).addClass("color-box_green");
    } else if(data == "yellow") {
        $(item).addClass("color-box_yellow");
    } else if(data == "gray") {
        $(item).addClass("color-box_gray");
    } else if(data == "dark-gray") {
        $(item).addClass("color-box_dark-gray");
    } 
});
// end__cahnge color-box color


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
        $(".result-list").css("display", "none");
    } else if(index === 2) {
        $(".result-tile-wrap").fadeIn();
        $(".result-list").css("display", "none");
        $(".result-plan").css("display", "none");
    } else if(index === 1) {
        $(".result-list").fadeIn();
        $(".result-tile-wrap").css("display", "none");
        $(".result-plan").css("display", "none");
    }
});
// end__change-view

// flat-tooltip-show
$(".entrance-flats__item").hover(
    function() {
        var wrapperTop = $(".result-tile-wrap").offset().top,
            wrapperLeft = $(".result-tile-wrap").offset().left;

        var elemenTop = $(this).offset().top,
            elementLeft = $(this).offset().left;

        var diffTop = elemenTop - wrapperTop,
            diffLeft = elementLeft - wrapperLeft;

        var tooltip = $('.entrance-tooltip'),
            tooltipHeight = tooltip.height(),
            tooltipWidth = tooltip.width();

        tooltip.css({
            top: diffTop - tooltipHeight - 25,
            left: diffLeft - 2*tooltipWidth - 25,
            opacity: "1"
        });
    },
    function() {
        $('.entrance-tooltip').css({
            opacity: "0",
            left: "-999px"
        });
    }
);
// end__flat-tooltip-show


// filter
var filter = {
    count: "12",
    typ: "1",
    page: "1",
    option: {
        price: [0, 1000000],
        all_room: [0, 20000],
        rooms: []
    }
}
var myJSON = {};

// get_ranges_value
function ranges() {
    var rangeItem = $('.range__item');
    for(var i = 0; i < rangeItem.length; i++) {
        var inputInfo = $(rangeItem[i]).find('.js-filter__hidden-values');
        var rangesSlaider = $(rangeItem[i]).find('.js-filter__range');
        var min = inputInfo.attr("min"),
            max = inputInfo.attr("max");

        // set defoult value
        inputInfo.siblings('.js-filter__text_min').html(min);
        inputInfo.siblings('.js-filter__text_max').html(max);

        // initialize rangeSlider
        rangesSlaider.ionRangeSlider({
            min: min,
            max: max,
            type: 'double',
            prettify: true,
            onChange: onRangeChange
        });
    }
};
ranges();
function onRangeChange(e) {
    var target = e.input;
    for(var i = 0; i < target.length; i++) {
        target.siblings('.js-filter__text_min').html(e.from);
        target.siblings('.js-filter__text_max').html(e.to);
        var name = target.siblings('.js-filter__hidden-values').attr('name');
        // console.log(name);
        filter.option[name][0] = +e.from;
        filter.option[name][1] = +e.to;
    }
}
// end__get_ranges_value

// get_selects_value
function citySelect() {
    var value = document.getElementById("city").value;
    filter.option["city"] = value;
}
function districtSelect() {
    var value = document.getElementById("district").value;
    filter.option["district"] = value;
}
function stateSelect() {
    var value = document.getElementById("state").value;
    filter.option["state"] = value;
}
function developerSelect() {
    var value = document.getElementById("developer").value;
    filter.option["developer"] = value;
    console.log(filter);
}
// end__get_selects_value


// get_number_of_rooms
$(".filter-checkbox").on("click", function() {
    var roomNumber = $(this).attr("value");
    filter.option["rooms"].push(+roomNumber);
});
// end__get_number_of_rooms

// show_selected_residance
function residenceShow(residence) {
    function info (residenceArr) {
        var markup = "";
        residenceArr.forEach(function(item, i) {
            markup += "<li class='residence-list__item'>" + 
                    "<a href='residence.php'>" +
                        "<h4 class='residence-list__heading'>" + item.project_name + "</h4>" +
                        "<p class='residence-list__link'>" + item.project_site + "</p>" +
                        "<div class='residence-list__image-wrap'>" +
                            "<img src='" + item.project_img + "' alt='image' class='residence-list__image'>" +
                            "<span class='residence-list__price'>от " + item.project_price + "грн. м<sup>2</sup></span>" +
                        "</div>" +
                        "<ul class='residence-list-info'>" +
                            "<li class='residence-list-info__item'>" +
                                "<svg class='residence-list-info__icon'><use xlink:href='#placeholder'></use></svg>" +
                                "<p class='residence-list-info__text'>" + item.project_metro + "<br><span class='residence-list-info__text_medium'>" + item.project_adress + "</span></p>" +
                            "</li>" +
                            "<li class='residence-list-info__item'>" +
                                "<svg class='residence-list-info__icon'><use xlink:href='#price'></use></svg>" +
                                "<p class='residence-list-info__text'>Минимальная стоимость квартиры – <span class='residence-list-info__text_medium'>от " + item.project_price_flat + "грн.</span></p>" +
                            "</li>" +
                            "<li class='residence-list-info__item'>" +
                                "<svg class='residence-list-info__icon residence-list-info__icon_rotate'><use xlink:href='#print'></use></svg>" +
                                "<p class='residence-list-info__text'>Помещений – <span class='residence-list-info__text_medium'>" +item.project_rooms +"</span></p>" +
                            "</li>" +
                            "<li class='residence-list-info__logo-wrap'>" +
                                "<img src='" + item.development_img + "' alt='logo' class='residence-list-info__logo'>" +
                            "</li>" +
                        "</ul>" +
                    "</a>" +
                "</li>"
        });
        return markup;
    }

    $(".residence-list").append(info(residence));
};
// end__show_selected_residance

// show_selected_flats
function flatsShow(flats) {
    function info (flatsArr) {
        var markup = "";
        flatsArr.forEach(function(item, i) {
           markup += "<li class='result-plan-list__item'>" +
                        "<img src='img/filter/plan/plan_1.png' alt='plan-image' class='result-plan-list__image'>" +
                        "<div class='result-plan-info'>" +
                            "<div class='result-plan-info__price'>" +
                                "<p class='result-plan-info__text'>" + item.common_cost + " грн</p>" +
                                "<p class='result-plan-info__text'>" + item.meters + "м<sup>2</sup> – " + item.meter_cost + " грн/м<sup>2</sup></p>" +
                                "<div class='color-box result-plan__color-box color-box_" + item.status + "'></div>" +
                            "</div>" +
                            "<div class='result-plan-info__floor'>" +
                                "<p class='result-plan-info__text'>" + item.floor + " этаж</p>" +
                                "<p class='result-plan-info__text'>№ " + item.flat_num + "</p>" +
                            "</div>" +
                        "</div>" +
                        "<a href='#' class='rooms__link result-plan__rooms-link'>" + item.rooms_num +"K</a>" +
                        "<a href='#' class='button result-plan__button'>Подробнее</a>" +
                    "</li>"
        });
        return markup;
    }

    $(".result-plan-list").append(info(flats));
};
// flatsShow();
// end__show_selected_flats

// pagination
var paginAjaxObj = {
    url: "/ajax",
    type: "POST",
    dataType: "json",
    data: myJSON,
    success: function(){
       console.log("success");
    },
    error: function(){
       alert("Error");
    }
}

function paginationItemShow(quantity) {
    var quantityToShow = 12;
    var intengerResult = Math.floor(quantity / quantityToShow);
    var list = $('.pagination-num-list');

    if(quantity / quantityToShow > 1) {
        $('.home-pagination').css("display", "block");
    }

    for(var i = 0; i <= intengerResult; i++) {
        list.append(
            "<li class='pagination-num-list__item'>" +
                "<a href='#' class='pagination-num-list__link pagination__button'>" + (i+1) + "</a>" +
            "</li>"
        );
    }
    // console.log(intengerResult);
}

$(".pagination-num-list__link").on("click", function(e) {
    e.preventDefault();
    var pageNum = $(this).html();
    filter.page = pageNum;
    myJSON = JSON.stringify(filter);

    $.ajax(paginAjaxObj);
});
$(".pagination-next").on("click", function(e) {
    e.preventDefault();
    filter.page = +filter.page + 1;
    myJSON = JSON.stringify(filter);

    $.ajax(paginAjaxObj);
});
$(".pagination-prev").on("click", function(e) {
    e.preventDefault();
    if(+filter.page >= 2) {
        filter.page = +filter.page - 1;
    }
    myJSON = JSON.stringify(filter);

    $.ajax(paginAjaxObj);
});
// end__pagination

// submit_home
$('.filter__form').submit(function(e) {
    e.preventDefault();
    $(".residence-list__item").remove();
    console.log(filter);

    $.ajax({
        url: "http://apivime.smarto.com.ua/ajax",
        type: "POST",
        dataType: "json",
        data: filter,
        success: function(data){
            console.log(data);
            residenceShow(data.data);
            paginationItemShow(data.quantity);
        },
        error: function(data){
           console.log(data);
        }
    });
});
// end__submit_home

$('.filter-full__button_apply').on("click", function(e) {
    e.preventDefault();
    console.log(filter);
    myJSON = JSON.stringify(filter);

    $.ajax({
        url: "http://apivime.smarto.com.ua/ajax",
        type: "POST",
        dataType: "json",
        data: myJSON,
        success: function(data){
            flatsShow(data);
            // console.log(data);
        },
        error: function(data){
           console.log(data);
        }
    });
});

// reset
$('.filter__button_clear-js').on("click", function() {
    // range reset
    var ranges = $(".range__item");
    for(var i = 0; i < ranges.length; i++) {
        var min = $(ranges[i]).find(".js-filter__hidden-values").attr("min");
        var max = $(ranges[i]).find(".js-filter__hidden-values").attr("max");
        $(ranges[i]).find(".js-filter__text_min").html(min);
        $(ranges[i]).find(".js-filter__text_max").html(max);
        $(ranges[i]).find(".irs-bar").css({
            width: "100%",
            left: "0"
        });
        $(ranges[i]).find(".from").css("left", "0");
        $(ranges[i]).find(".to").css("left", "100%");
    }

    // checkbox reset
    $(".filter-checkbox").prop("checked", false);

    // reset filter obj
    // for(key in filter) {
    //     var element = filter[key];
    //     var type = typeof element;

    //     if(type == "string") {
    //         element = "";
    //     } else if(type == "object") {
    //         for(subkey in element) {
    //             element[subkey] = "";
    //         }
    //     }
    // }
});

// end__filter







// OLD_CODE

// function debounce(func, wait, immediate) {
//     var timeout;
//     return function() {
//         var context = this, args = arguments;
//         var later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };
// var debouncedRanges = debounce(onRangeChange, 200);

//test array
    // var residence = [
    //               {
    //                 name: "Rybalsky",
    //                 site: "rybalsky.com.ua",
    //                 meter_cost: "12 000",
    //                 metro: "Дружбы Народов",
    //                 street: "Рибальського, 21",
    //                 min_cost: "750 000",
    //                 rooms: "1455",
    //                 img: "",
    //                 logo: ""
    //               },
    //               {
    //                 name: "Arsenal",
    //                 site: "rybalsky.com.ua",
    //                 meter_cost: "12 000",
    //                 metro: "Дружбы Народов",
    //                 street: "Рибальського, 21",
    //                 min_cost: "750 000",
    //                 rooms: "155"
    //               },
    //               {
    //                 name: "Happy House",
    //                 site: "rybalsky.com.ua",
    //                 meter_cost: "12 000",
    //                 metro: "Дружбы Народов",
    //                 street: "Рибальського, 21",
    //                 min_cost: "750 000",
    //                 rooms: "155"
    //               }
    //             ];



//test array
    // var flats = [
    //               {
    //                 common_cost: "3 031 681",
    //                 meters: "83.16",
    //                 meter_cost: "36 456",
    //                 status: "green",
    //                 floor: "9",
    //                 flat_num: "56",
    //                 rooms_num: "2"
    //               },
    //               {
    //                 common_cost: "3 031 681",
    //                 meters: "83.16",
    //                 meter_cost: "36 456",
    //                 status: "green",
    //                 floor: "10",
    //                 flat_num: "56",
    //                 rooms_num: "4"
    //               },
    //               {
    //                 common_cost: "3 031 681",
    //                 meters: "83.16",
    //                 meter_cost: "36 456",
    //                 status: "green",
    //                 floor: "10",
    //                 flat_num: "56",
    //                 rooms_num: "4"
    //               }
    //             ];