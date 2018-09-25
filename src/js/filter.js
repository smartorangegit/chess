
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
            $(".result-tile-wrap").removeClass("result-tile_active-js").css("display", "none");
            $(".result-list").css("display", "none");
        } else if(index === 2) {
            $(".result-tile-wrap").addClass("result-tile_active-js").fadeIn();
            $(".result-list").css("display", "none");
            $(".result-plan").css("display", "none");
        } else if(index === 1) {
            $(".result-list").fadeIn();
            $(".result-tile-wrap").removeClass("result-tile_active-js").css("display", "none");
            $(".result-plan").css("display", "none");
        }

        showFilterPagination();
    });

    function showFilterPagination() {
        if($(".result-tile-wrap").hasClass("result-tile_active-js")) {
            $(".filter-pagination").css("display", "none");
        } else {
            $(".filter-pagination").css("display", "block");
        }
    };
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
                        left: diffLeft - 1.4*tooltipWidth,
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
        order: [],
        option: {
            price: getDefaulValue($("input[name='price']")),
            all_room: getDefaulValue($("input[name='all_room']")),
            rooms: [],
            floor: getDefaulValue($("input[name='floor']")),
            house: $(".building").data("house"),
            project_id: $(".building").data("id"),
            properties: {}
        }
    };

    // add_expanded_settings_filter
    function addNewOptionToFilter(filterName, name) {
        filterName.option.properties[name] =  getDefaulValue($("input[name='" + name + "']"));
    }

    function rangeMarkup(splitNmae, id, name, min, max) {
        var markup = "<div id='" + splitNmae + "' class='range__item'>" +
                      "<span class='filter_name'>" + name + "</span >" + 
                        "<div class='filter__ranges filter__ranges_ta'>" +
                            "<input name='" + id + "' type='range' min='" + min + "' max='" + max + "' class='filter__hidden-values js-filter__hidden-values' style='display: none;'>" +
                            "<input class='filter__range js-filter__range'  type='text'>" +
                            "<span class='range__text range__text_min js-filter__text_min'></span>" +
                            "<span class='range__text range__text_max js-filter__text_max'></span>" +
                        "</div>" +
                    "</div>";
        return markup;
    }

    (function defaultFilterSettings() {
        var checkboxes = $(".filter-settings").find(".filter-checkbox");

        $(".filter-full-range").find(".range__item").remove();

        checkboxes.each(function(i, item) {
            var checked = $(item).prop("checked");
            var name = $(item).data("label");
            var splitName = name.split(' ').join('');
            var id = $(item).attr("id");
            var min = $(item).data("min"),
                max = $(item).data("max");
            var range = rangeMarkup(splitName, name, min, max);

            if(checked) {
                $(".filter-full-range").append(
                    rangeMarkup(splitName, id, name, min, max)
                );
            }
            addNewOptionToFilter(filterDefautl, id);
            rangesValue();
        });
    }());

    $(".filter-settings-list__label").on("click", function() {
        var checkbox = $(this).siblings(".filter-checkbox");
        var checked = checkbox.prop("checked");
        var name = checkbox.data("label");
        var splitName = name.split(' ').join('');
        var id = checkbox.attr("id");
        var min = checkbox.data("min"),
            max = checkbox.data("max");

        if(!checked) {
            $(".filter-full-range").append(
                rangeMarkup(splitName, id, name, min, max)
            );
            addNewOptionToFilter(filter, id);
            rangesValue();
        } else {
            $("#" + splitName + "").remove();
            filter.option.properties[id][0] = null;
            filter.option.properties[id][1] = null;
        }
    });
    // end__add_expanded_settings_filter


    var filter = objClone(filterDefautl);

    (function getDefaulCheckedCheckbox() {
        var roomsArr = filter.option["rooms"];
        var checkbox = $(".filter-short-checkbox-wrap").find(".filter-checkbox");
        for(var i = 0; i < checkbox.length; i++) {
            if($(checkbox[i]).prop("checked")) {
                roomsArr.push($(checkbox[i]).attr("value"));
            }
        }
        console.log(filter);
    }());

    rangesValue();
    // getDefaulCheckedCheckbox(filter);
    getRoomsNumber();

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
                flatsShow(data.dataList);
                flatsShowTable(data.dataList, data.dataTable);

                paginationItemShow(data.quantity, flatsShow, flatsShowTable);

                $(".result-short_all-js").html(data.quantity);
                $(".result-short_free-js").html(data.quantityFree);
            },
            error: function(data){
               console.log(data);
            }
        });
    });
    // end__submit

    function getFlats(data) {
        var flats = [];

        for(var key in data) {
            var item1 = data[key];
            flats.push(item1);
        }

        return flats;
    };


    // show_selected_flats
    function flatsShow(data) {
        $(".result-plan-list__item").remove();

        var flatsArr = getFlats(data);

        function appartmentStatus(flatsArr) {
            switch (flatsArr.sale) {
                case "1":
                    return "<li class='result-plan-list__item'>" +
                               "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
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
                                    "<span class='rooms__link result-plan__rooms'>" + flatsArr.rooms +"K</span>" +
                                    "<span class='button result-plan__button border-gradient'>Подробнее</span>" +
                                "</a>" +
                            "</li>";
                case "2":
                    return "<li class='result-plan-list__item'>" +
                                "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
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
                                    "<span class='rooms__link result-plan__rooms'>" + flatsArr.rooms +"K</span>" +
                                    "<p class='result-plan-info__text result-plan-info__text_center'>Помещение недоступно для покупки</p>" +
                                "</a>" +
                            "</li>";
                case "3":
                    return "<li class='result-plan-list__item'>" +
                               "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                    "<div class='result-plan-info'>" +
                                        "<div class='result-plan-info__price'>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.price + " грн</p>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup> – " + flatsArr.price_m2 + " грн/м<sup>2</sup></p>" +
                                            "<div class='color-box result-plan__color-box color-box_gray'></div>" +
                                        "</div>" +
                                        "<div class='result-plan-info__floor'>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                            "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<span class='rooms__link result-plan__rooms'>" + flatsArr.rooms +"K</span>" +
                                    "<span class='button result-plan__button border-gradient'>Подробнее</span>" +
                                "</a>" +
                            "</li>";
                case "0":
                    return "<li class='result-plan-list__item'>" +
                               "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                    "<div class='result-plan-info'>" +
                                        "<div class='result-plan-info__price'>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.price + " грн</p>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup> – " + flatsArr.price_m2 + " грн/м<sup>2</sup></p>" +
                                            "<div class='color-box result-plan__color-box color-box_dark-gray'></div>" +
                                        "</div>" +
                                        "<div class='result-plan-info__floor'>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                            "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<span class='rooms__link result-plan__rooms'>" + flatsArr.rooms +"K</span>" +
                                    "<span class='button result-plan__button border-gradient'>Подробнее</span>" +
                                "</a>" +
                            "</li>";
                default:
                    return "<li class='result-plan-list__item'>" +
                               "<a href='" + flatsArr.url + "' class='result-plan-list__image-link'>" + 
                                    "<img src='" + flatsArr.img + "' alt='plan-image' class='result-plan-list__image'>" + 
                                    "<div class='result-plan-info'>" +
                                        "<div class='result-plan-info__price'>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.price + " грн</p>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.all_room + "м<sup>2</sup> – " + flatsArr.price_m2 + " грн/м<sup>2</sup></p>" +
                                            "<div class='color-box result-plan__color-box color-box_dark-gray'></div>" +
                                        "</div>" +
                                        "<div class='result-plan-info__floor'>" +
                                            "<p class='result-plan-info__text'>" + flatsArr.floor + " этаж</p>" +
                                            "<p class='result-plan-info__text'>№ " + flatsArr.number + "</p>" +
                                        "</div>" +
                                    "</div>" +
                                    "<span class='rooms__link result-plan__rooms'>" + flatsArr.rooms +"K</span>" +
                                    "<span class='button result-plan__button border-gradient'>Подробнее</span>" +
                                "</a>" +
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

    // select-pagination
    function selectHandler() {
        var value = document.getElementById("select_pagination").value;
        filter.count = value;

        $.ajax({
            url: "http://apivime.smarto.com.ua/ajax",
            type: "POST",
            dataType: "json",
            data: filter,
            success: function(data){
                console.log(data);
                flatsShowTable(data.dataList, data.dataTable);

                paginationItemShow(data.quantity, flatsShow, flatsShowTable);
            },
            error: function(data){
                console.log(data);
            }
        });
    }
    // end__select-pagination

    // show_selected_flats_table
    function flatsShowTable(data, dataTableHeading) {
        var flatsArr = getFlats(data);

        function appartmentsTableHeading(dataTableHeading) {
            $(".filter-table__heading").remove();
            var markup = "";

            dataTableHeading.forEach(function(item, i) {
                markup += "<th data-sort='" + item[1] + "' class='filter-table__heading'>"+
                                item[0] +
                          "</th>"
            });

            return (markup);
        }
        $(".filter-table__head").append(appartmentsTableHeading(dataTableHeading));
        
        sendSortingData();

        function appartmentStatus(appart) {
            switch (appart) {
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

        function appartmentsTableRow(flats, tableHeading) {
            $(".filter-table__row").remove();

            var tableHeads = {};
            var customApartments = [];
            var total = '';

            function createTableHeadsObj(tableHeading) {
                tableHeading.forEach(function(app) {
                    tableHeads[app[1]] = app[0];
                });
            };

            function createCustomAppartmentObj(appartment) {
                for(var key in appartment.properties) {
                    appartment[key] = appartment.properties[key].property_flat;
                }
                customApartments.push(appartment);
            }

            createTableHeadsObj(tableHeading);
            flats.forEach(createCustomAppartmentObj);

            customApartments.forEach(function(app, index) {
                var t = "<tr onclick='location.href=&apos;http://apivime.smarto.com.ua" + app.url + "&apos;' class='filter-table__row'>" + 
                            "<td class='filter-table__col'>" + app.floor + "</td>" +
                            "<td class='filter-table__col'>" + appartmentStatus(app.sale) + "</td>" +
                            "<td class='filter-table__col'>" + app.life_room + "</td>";
                for(var key in tableHeads) {
                    if(key === 'floor' || key === 'sale' || key === 'life_room') {
                        continue;
                    }
                    t +="<td class='filter-table__col'>" + 
                            (app[key] != undefined ? app[key] : 'Нет значения')  +  
                        '</td>';           
                }
                t+='</tr>';
                total += t;
            });
            
            return total;
        }
        return $(".filter-table__body").append(appartmentsTableRow(flatsArr, dataTableHeading));
    };
    // end__show_selected_flats_table

    // sorting_table_data
    var tableHeadingCklickCount = 1;
    function sendSortingData() {
        $(".filter-table__heading").on("click", function() {
            $(this).toggleClass("filter-sort_top");;
            var paramName = $(this).data("sort");

            if(tableHeadingCklickCount%2 === 0) {
                filter.order = [paramName, "asc"];
            } else {
                filter.order = [paramName, "desc"];
            }
            tableHeadingCklickCount++;

            $.ajax({
                url: "http://apivime.smarto.com.ua/ajax",
                type: "POST",
                dataType: "json",
                data: filter,
                success: function(data){
                    console.log(data);
                    flatsShowTable(data.dataList, data.dataTable);
                    paginationItemShow(data.quantity, flatsShow, flatsShowTable);
                },
                error: function(data){
                   console.log(data);
                }
            });
        });
    }
    sendSortingData();
    // end__sorting_table_data

    // show_selected_entrance
    function entranceShow(data) {
        $(".entrance").remove();
        var third = data.data;

        function getAppartment(appart) {

            function selectionFlatType(saleType, itemClass) {
                switch (saleType.sale) {
                    case "1":
                        return "<li class='" + itemClass + "'" +
                                    "data-image='" + appart.img + "'" +
                                    "data-square='" + appart.all_room + "'" +
                                    "data-price_m='" + appart.price_m2 + "'" +
                                    "data-price='" + appart.price + "'" +
                                    "data-rooms='" + appart.rooms + "'" +
                                    "data-num='" + appart.number + "'>" +
                                    "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_green'>" + appart.rooms + "</a>" + 
                                "</li>";
                    case "2":
                        return "<li class='" + itemClass + "'" +
                                    "data-image='" + appart.img + "'" +
                                    "data-square='" + appart.all_room + "'" +
                                    "data-price_m='" + appart.price_m2 + "'" +
                                    "data-price='" + appart.price + "'" +
                                    "data-rooms='" + appart.rooms + "'" +
                                    "data-num='" + appart.number + "'>" +
                                    "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_yellow'>" + appart.rooms + "</a>" + 
                                "</li>";
                    case "3":
                        return "<li class='" + itemClass + "'" +
                                    "data-image='" + appart.img + "'" +
                                    "data-square='" + appart.all_room + "'" +
                                    "data-price_m='" + appart.price_m2 + "'" +
                                    "data-price='" + appart.price + "'" +
                                    "data-rooms='" + appart.rooms + "'" +
                                    "data-num='" + appart.number + "'>" +
                                    "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_gray'>" + appart.rooms + "</a>" + 
                                "</li>";
                    case "0":
                        return "<li class='" + itemClass + "'" +
                                    "data-image='" + appart.img + "'" +
                                    "data-square='" + appart.all_room + "'" +
                                    "data-price_m='" + appart.price_m2 + "'" +
                                    "data-price='" + appart.price + "'" +
                                    "data-rooms='" + appart.rooms + "'" +
                                    "data-num='" + appart.number + "'>" +
                                    "<a href='" + appart.url + "' class='entrance-flats__color-box color-box_dark-gray'>" + appart.rooms + "</a>" + 
                                "</li>";
                    default:
                        return "<li class='" + itemClass + " entrance-flats__item_not_available'" +
                                    "data-image='" + appart.img + "'" +
                                    "data-square='" + appart.all_room + "'" +
                                    "data-price_m='" + appart.price_m2 + "'" +
                                    "data-price='" + appart.price + "'" +
                                    "data-rooms='" + appart.rooms + "'" +
                                    "data-num='" + appart.number + "'>" +
                                    "<div class='entrance-flats__color-box color-box_gray'>" + "</div>" + 
                                "</li>";
                }
            }

            if(appart.filter == 1) {
               return selectionFlatType(appart, "entrance-flats__item");
            } else {
                return selectionFlatType(appart, "entrance-flats__item entrance-flats__item_active");
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

