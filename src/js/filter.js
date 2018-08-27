
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

// show-floor-plan
    function showFlorPlan() {
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
    };
    showFlorPlan()
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
    function tooltipShow() {
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

                if(!$(this).hasClass("entrance-flats__item_not_available")) {
                    tooltip.css({
                        top: diffTop - tooltipHeight - 25,
                        left: diffLeft - 2*tooltipWidth - 25,
                        opacity: "1"
                    });

                    $(".entrance-tooltip__num").html($(this).data("num"));
                    $(".entrance-tooltip__price").html($(this).data("price"));
                    $(".entrance-tooltip__square").html($(this).data("square"));
                    $(".entrance-tooltip__price_meter").html($(this).data("price_m"));
                    $(".entrance-tooltip__rooms").html($(this).data("rooms"));
                    $(".entrance-tooltip__image").attr("src", $(this).data("image"));
                }
            },
            function() {
                $('.entrance-tooltip').css({
                    opacity: "0",
                    left: "-999px"
                });
            }
        );
    };

    tooltipShow();
            
// end__flat-tooltip-show

// filter
    // some of function describe in common.js

    var filterDefautl = {
        count: "12",
        typ: "3",
        page: "1",
        option: {
            price: getDefaulValue($("input[name='price']")),
            all_room: getDefaulValue($("input[name='all_room']")),
            rooms: [],
            floor: getDefaulValue($("input[name='floor']")),
            house: $(".building").data("house"),
            project_id: $(".building").data("id")
        }
    };

    var filter = objClone(filterDefautl);

    rangesValue();

    getRoomsNumber();

    function getFlats(data, flatsQuantity) {
        var flats = [];
        var freeFlats = [];

        for(var key in data) {
            var item1 = data[key];
            flats.push(item1);
        }

        flats.forEach(function(item) {
            if(item.sale == "1") {
                    freeFlats.push(item);
            }
        });

        $(".result-short_all-js").html(flatsQuantity);
        $(".result-short_free-js").html(freeFlats.length);

        return flats;
    };

    // show_selected_flats
    function flatsShow(data, flatsQuantity) {
        $(".result-plan-list__item").remove();

        var flatsArr = getFlats(data, flatsQuantity);

        function appartmentStatus(flatsArr) {
            switch (flatsArr.sale) {
                case "1":
                    return "<li class='result-plan-list__item'>" +
                               "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                "</a>" +
                                "<div class='result-plan-info'>" +
                                    "<div class='result-plan-info__price'>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.price + " грн</p>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup> – " + flatsArr.price_m2 + " грн/м<sup>2</sup></p>" +
                                        "<div class='color-box result-plan__color-box color-box_green'></div>" +
                                    "</div>" +
                                    "<div class='result-plan-info__floor'>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                        "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                    "</div>" +
                                "</div>" +
                                "<a href='#' class='rooms__link result-plan__rooms-link'>" + flatsArr.rooms +"K</a>" +
                                "<a href='" + flatsArr.url + "' class='button result-plan__button border-gradient'>Подробнее</a>" +
                            "</li>";
                case "2":
                    return "<li class='result-plan-list__item'>" +
                                "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                "</a>" +
                                "<div class='result-plan-info'>" +
                                    "<div class='result-plan-info__price'>" +
                                        "<p class='result-plan-info__text'>Бронь</p>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup></p>" +
                                        "<div class='color-box result-plan__color-box color-box_yellow'></div>" +
                                    "</div>" +
                                    "<div class='result-plan-info__floor'>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                        "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                    "</div>" +
                                "</div>" +
                                "<a href='#' class='rooms__link result-plan__rooms-link'>" + flatsArr.rooms +"K</a>" +
                                "<p class='result-plan-info__text result-plan-info__text_center'>Помещение недоступно для покупки</p>" +
                            "</li>";
                case "3":
                    return "<li class='result-plan-list__item'>" +
                               "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                "</a>" +
                                "<div class='result-plan-info'>" +
                                    "<div class='result-plan-info__price'>" +
                                        "<p class='result-plan-info__text'>Бронь</p>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup></p>" +
                                        "<div class='color-box result-plan__color-box color-box_gray'></div>" +
                                    "</div>" +
                                    "<div class='result-plan-info__floor'>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                        "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                    "</div>" +
                                "</div>" +
                                "<a href='#' class='rooms__link result-plan__rooms-link'>" + flatsArr.rooms +"K</a>" +
                                "<p class='result-plan-info__text result-plan-info__text_center'>Помещение недоступно для покупки</p>" +
                            "</li>";
                case "0":
                    return "<li class='result-plan-list__item'>" +
                                "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                "</a>" +
                                "<div class='result-plan-info'>" +
                                    "<div class='result-plan-info__price'>" +
                                        "<p class='result-plan-info__text'>Бронь</p>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup></p>" +
                                        "<div class='color-box result-plan__color-box color-box_dark-gray'></div>" +
                                    "</div>" +
                                    "<div class='result-plan-info__floor'>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                        "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                    "</div>" +
                                "</div>" +
                                "<a href='#' class='rooms__link result-plan__rooms-link'>" + flatsArr.rooms +"K</a>" +
                                "<p class='result-plan-info__text result-plan-info__text_center'>Помещение недоступно для покупки</p>" +
                            "</li>";
                default:
                    return "<li class='result-plan-list__item'>" +
                                "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                "</a>" +
                                "<div class='result-plan-info'>" +
                                    "<div class='result-plan-info__price'>" +
                                        "<p class='result-plan-info__text'>Бронь</p>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup></p>" +
                                        "<div class='color-box result-plan__color-box color-box_gray'></div>" +
                                    "</div>" +
                                    "<div class='result-plan-info__floor'>" +
                                        "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                        "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                    "</div>" +
                                "</div>" +
                                "<a href='#' class='rooms__link result-plan__rooms-link'>" + flatsArr.rooms +"K</a>" +
                                "<p class='result-plan-info__text result-plan-info__text_center'>Помещение недоступно для покупки</p>" +
                            "</li>";
            }
        }

        function appartmentsItem(flats) {
            var markup = "";
            flats.forEach(function(item, i) {
               markup += appartmentStatus(item);
            });
            return markup;
        }

        return $(".result-plan-list").append(appartmentsItem(flatsArr));
    };
    // end__show_selected_flats

    // show_selected_flats_table
    function flatsShowTable(data, flatsQuantity) {
        var flatsArr = getFlats(data, flatsQuantity);
        var bathroom, hall, kitchen, livingRoom, bedroom, balcony, livingSpace;

        function appartmentStatus(appart) {
            switch (appart.sale) {
                case "1":
                    return "<div class='color-box color-box_green filter-table__color-box'></div>"
                case "2":
                    return "<div class='color-box color-box_yellow filter-table__color-box'></div>"
                case "3":
                    return "<div class='color-box color-box_gray filter-table__color-box'></div>"
                case "0":
                    return "<div class='color-box color-box_dark-gray filter-table__color-box'></div>"
                default:
                    return "<div class='color-box filter-table__color-box'></div>"
            }
        }

        function appartmentsTableItem(flats) {
            $(".filter-table__row").remove();
            var markup = "";
            flats.forEach(function(item) {
                // get flat rooms meters
                var prop = item.properties;
                for(var key in prop) {
                    var rooms = prop[key];
                    for(var key2 in rooms) {
                        if(rooms.property_name == "Прихожая") {
                            hall = rooms.property_flat; 
                        } else if(rooms.property_name == "Кухня") {
                            kitchen = rooms.property_flat; 
                        } else if(rooms.property_name == "Гостиная") {
                            livingRoom = rooms.property_flat; 
                        } else if(rooms.property_name == "Лоджия 2") {
                            balcony = rooms.property_flat; 
                        } else if(rooms.property_name == "Спальня") {
                            bedroom = rooms.property_flat;
                        } else if(rooms.property_name == "Санузел") {
                            bathroom = rooms.property_flat; 
                        } else if(rooms.property_name == "Жилая площадь") {
                            livingSpace = rooms.property_flat;
                            // console.log("skfvdk");
                        } 
                    }
                }

               markup += "<tr class='filter-table__row'>" +
                            "<td class='filter-table__col'>" + item.floor + "</td>" +
                            "<td class='filter-table__col'>" + appartmentStatus(item) + "</td>" +
                            "<td class='filter-table__col'>" + livingSpace + "</td>" +
                            "<td class='filter-table__col'>" + hall + "</td>" +
                            "<td class='filter-table__col'>" + kitchen + "</td>" +
                            "<td class='filter-table__col'>" + livingRoom + "</td>" +
                            "<td class='filter-table__col'>" + balcony + "</td>" +
                            "<td class='filter-table__col'>" + bedroom + "</td>" +
                            "<td class='filter-table__col'>" + bathroom + "</td>" +
                        "</tr>"
            });
            return markup;
        }
        return $(".filter-table__body").append(appartmentsTableItem(flatsArr));
    };
    // end__show_selected_flats_table

    // show_selected_entrance
    function entranceShow(data) {
        $(".entrance").remove();

        var third = data.data;

        function getAppartment(appart) {
            switch (appart.sale) {
                case "1":
                    return "<li class='entrance-flats__item'" +
                                "data-image='" + appart.img + "'" +
                                "data-square='" + appart.all_room + "'" +
                                "data-price_m='" + appart.price_m2 + "'" +
                                "data-price='" + appart.price + "'" +
                                "data-rooms='" + appart.rooms + "'" +
                                "data-num='" + appart.number + "'>" +
                                "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_green'>" + appart.rooms + "</a>" + 
                            "</li>";
                case "2":
                    return "<li class='entrance-flats__item'" +
                                "data-image='" + appart.img + "'" +
                                "data-square='" + appart.all_room + "'" +
                                "data-price_m='" + appart.price_m2 + "'" +
                                "data-price='" + appart.price + "'" +
                                "data-rooms='" + appart.rooms + "'" +
                                "data-num='" + appart.number + "'>" +
                                "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_yellow'>" + appart.rooms + "</a>" + 
                            "</li>";
                case "3":
                    return "<li class='entrance-flats__item'" +
                                "data-image='" + appart.img + "'" +
                                "data-square='" + appart.all_room + "'" +
                                "data-price_m='" + appart.price_m2 + "'" +
                                "data-price='" + appart.price + "'" +
                                "data-rooms='" + appart.rooms + "'" +
                                "data-num='" + appart.number + "'>" +
                                "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_gray'>" + appart.rooms + "</a>" + 
                            "</li>";
                case "0":
                    return "<li class='entrance-flats__item'" +
                                "data-image='" + appart.img + "'" +
                                "data-square='" + appart.all_room + "'" +
                                "data-price_m='" + appart.price_m2 + "'" +
                                "data-price='" + appart.price + "'" +
                                "data-rooms='" + appart.rooms + "'" +
                                "data-num='" + appart.number + "'>" +
                                "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_dark-gray'>" + appart.rooms + "</a>" + 
                            "</li>";
                default:
                    return "<li class='entrance-flats__item entrance-flats__item_not_available'" +
                                "data-image='" + appart.img + "'" +
                                "data-square='" + appart.all_room + "'" +
                                "data-price_m='" + appart.price_m2 + "'" +
                                "data-price='" + appart.price + "'" +
                                "data-rooms='" + appart.rooms + "'" +
                                "data-num='" + appart.number + "'>" +
                                "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_gray'>" + "</a>" + 
                            "</li>";
            }
        }

        function entrance(entranceArr) {
            var finalMarkup = "";
            var maxFloor;
            for(var key in entranceArr) {
                finalMarkup += "<div class='entrance'>" + 
                                    "<p class='entrance__num'>" + key + "</p>" + 
                                    "<div class='entrance-flats-wrap'>" +
                                        floor(entranceArr[key]).floorMarkup +
                                    "</div>" + 
                                "</div>";
                maxFloor =  floor(entranceArr[key]).maxFloor;
            }

            return {
                finalMarkup: finalMarkup,
                maxFloor: maxFloor
            }
        }

        function floor(floorArr) {
            var floorMarkup = "";
            var maxFloor = 0;

            for(var key in floorArr) {
                maxFloor++;
                floorMarkup += "<ul class='entrance-flats'>" +
                                        flat(floorArr[key]) +
                               "</ul>";
            }

            return {
                floorMarkup: floorMarkup,
                maxFloor: maxFloor
            }
        }

        function flat(first) {
            var flatMarkup = "";
            for(var key in first) {
                flatMarkup += getAppartment(first[key]);
            }
            return flatMarkup;
        }

        $(".entrance-wrap").append(entrance(third).finalMarkup);

        function floorsNum(floors, rangeFloor) {
            $(".entrance-floor__item").remove();
            for(var i = +rangeFloor[0]; i <= +rangeFloor[1]; i++) {
                $(".entrance-floor").append(
                   "<li class='entrance-floor__item'>" + i + "</li>" 
                );
            }
        }
        floorsNum(entrance(third).maxFloor, data.setka);
        
        tooltipShow();
        showFlorPlan();
    };
    // end__show_selected_entrance

    // submit
    $('.filter__button-js').on("click", function(e) {
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
                entranceShow(data);
                flatsShow(data.dataList, data.quantity);
                flatsShowTable(data.dataList, data.quantity);
                
                paginationItemShow(data.quantity, flatsShow);
                paginationItemShow(data.quantity, flatsShowTable);
            },
            error: function(data){
               console.log(data);
            }
        });
    });
    // end__submit
// end__filter




// function selectHandler() {
//     var value = document.getElementById("table_rows").value;
//     console.log(value);
// } 



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


// var third = [
            //    [
            //         [
            //             {
            //                 status: 0,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 1,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 2,
            //                 rooms: 3
            //             }
            //         ],
            //         [
            //             {
            //                 status: 0,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 1,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 2,
            //                 rooms: 3
            //             }
            //         ],
            //         [
            //             {
            //                 status: 0,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 1,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 2,
            //                 rooms: 3
            //             }
            //         ],
            //         [
            //             {
            //                 status: 0,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 1,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 2,
            //                 rooms: 3
            //             }
            //         ],
            //     ],
            //     [
            //         [
            //             {
            //                 status: 0,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 1,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 2,
            //                 rooms: 3
            //             }
            //         ],
            //         [
            //             {
            //                 status: 0,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 1,
            //                 rooms: 3
            //             },
            //             {
            //                 status: 2,
            //                 rooms: 3
            //             }
            //         ],
            //         [
            //             {
            //                 status: 0,
            //                 rooms: 1
            //             },
            //             {
            //                 status: 1,
            //                 rooms: 2
            //             },
            //             {
            //                 status: 3,
            //                 rooms: 3
            //             }
            //         ],
            //     ] 
            // ];

// function entranceShow(data) {
//         var third = [
//             //    [
//             //         [
//             //             {
//             //                 status: 0,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 1,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 2,
//             //                 rooms: 3
//             //             }
//             //         ],
//             //         [
//             //             {
//             //                 status: 0,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 1,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 2,
//             //                 rooms: 3
//             //             }
//             //         ],
//             //         [
//             //             {
//             //                 status: 0,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 1,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 2,
//             //                 rooms: 3
//             //             }
//             //         ],
//             //         [
//             //             {
//             //                 status: 0,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 1,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 2,
//             //                 rooms: 3
//             //             }
//             //         ],
//             //     ],
//             //     [
//             //         [
//             //             {
//             //                 status: 0,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 1,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 2,
//             //                 rooms: 3
//             //             }
//             //         ],
//             //         [
//             //             {
//             //                 status: 0,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 1,
//             //                 rooms: 3
//             //             },
//             //             {
//             //                 status: 2,
//             //                 rooms: 3
//             //             }
//             //         ],
//             //         [
//             //             {
//             //                 status: 0,
//             //                 rooms: 1
//             //             },
//             //             {
//             //                 status: 1,
//             //                 rooms: 2
//             //             },
//             //             {
//             //                 status: 3,
//             //                 rooms: 3
//             //             }
//             //         ],
//             //     ] 
//             // ];


//         function getAppartment(appart) {
//             switch (appart.sale) {
//                 case "1":
//                     return "<li class='entrance-flats__item'>" +
//                                 "<div class='entrance-flats__color-box color-box_green'>" + appart.rooms + "</div>" + 
//                             "</li>";
//                 case "2":
//                     return "<li class='entrance-flats__item'>" +
//                                 "<div class='entrance-flats__color-box color-box_yellow'>" + appart.rooms + "</div>" + 
//                             "</li>";
//                 case "3":
//                     return "<li class='entrance-flats__item'>" +
//                                 "<div class='entrance-flats__color-box color-box_gray'>" + appart.rooms + "</div>" + 
//                             "</li>";
//                 case "0":
//                     return "<li class='entrance-flats__item'>" +
//                                 "<div class='entrance-flats__color-box color-box_dark-gray'>" + appart.rooms + "</div>" + 
//                             "</li>";
//                 default:
//                     return "<li class='entrance-flats__item'>" +
//                                 "<div class='entrance-flats__color-box color-box_gray'>" + "</div>" + 
//                             "</li>";
//             }
//         }

//         function maxValue(arr) {
//             var max = arr.reduce(function(a, b) {
//                 return Math.max(a, b);
//             });
//             return max;
//         }

//         function entrance(entranceArr) {
//             var finalMarkup = "";
//             var floorsNum = [];
//             console.log(entranceArr);
//             entranceArr.forEach(function(item, i) {
//                 finalMarkup += "<div class='entrance'>" + 
//                                     "<p class='entrance__num'>" + (i+1) + "</p>" + 
//                                     "<div class='entrance-flats-wrap'>" +
//                                         floor(item) +
//                                     "</div>" + 
//                                 "</div>";

//                 floorsNum.push(item.length); 
//             });

//             var maxFloor = maxValue(floorsNum);

//             // return finalMarkup;
//             return {
//                 finalMarkup: finalMarkup,
//                 maxFloor: maxFloor
//             }
//         }

//         function floor(floorArr) {
//             var floorMarkup = "";

//             floorArr.forEach(function(item, i) {
//                 floorMarkup += "<ul data-link='dfvb' class='entrance-flats'>" +
//                                         flat(item) +
//                                "</ul>";
//             });

//             return floorMarkup;
//         }

//         function flat(first) {
//             var flatMarkup = "";

//             first.forEach(function(item) {
//                 flatMarkup += getAppartment(item);
//             });
//             console.log(first);
//             return flatMarkup;
//         }

//         $(".entrance-wrap").append(entrance(third).finalMarkup);


//         function floorsNum(floors) {
//             for(var i = 0; i < floors; i++) {
//                 $(".entrance-floor").append(
//                    "<li class='entrance-floor__item'>" + (i+1) + "</li>" 
//                 );
//             }
//         }
//         floorsNum(entrance(third).maxFloor);
//     };