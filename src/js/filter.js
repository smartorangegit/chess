
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
        // change url
        var recursiveEncoded = $.param(filter);
        var url = window.location.href + '?';
        url = url.substr(0,url.indexOf('?'))
        window.history.pushState("", "", url+'?'+recursiveEncoded);

        // getParametersFromUrl();
        // end change url

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

// URL
// polyfil for searchParam
var URLSearchParams=URLSearchParams||function(){"use strict";function URLSearchParams(query){var index,key,value,pairs,i,length,dict=Object.create(null);this[secret]=dict;if(!query)return;if(typeof query==="string"){if(query.charAt(0)==="?"){query=query.slice(1)}for(pairs=query.split("&"),i=0,length=pairs.length;i<length;i++){value=pairs[i];index=value.indexOf("=");if(-1<index){appendTo(dict,decode(value.slice(0,index)),decode(value.slice(index+1)))}else if(value.length){appendTo(dict,decode(value),"")}}}else{if(isArray(query)){for(i=0,length=query.length;i<length;i++){value=query[i];appendTo(dict,value[0],value[1])}}else if(query.forEach){query.forEach(addEach,dict)}else{for(key in query){appendTo(dict,key,query[key])}}}}var isArray=Array.isArray,URLSearchParamsProto=URLSearchParams.prototype,find=/[!'\(\)~]|%20|%00/g,plus=/\+/g,replace={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},replacer=function(match){return replace[match]},secret="__URLSearchParams__:"+Math.random();function addEach(value,key){appendTo(this,key,value)}function appendTo(dict,name,value){var res=isArray(value)?value.join(","):value;if(name in dict)dict[name].push(res);else dict[name]=[res]}function decode(str){return decodeURIComponent(str.replace(plus," "))}function encode(str){return encodeURIComponent(str).replace(find,replacer)}URLSearchParamsProto.append=function append(name,value){appendTo(this[secret],name,value)};URLSearchParamsProto["delete"]=function del(name){delete this[secret][name]};URLSearchParamsProto.get=function get(name){var dict=this[secret];return name in dict?dict[name][0]:null};URLSearchParamsProto.getAll=function getAll(name){var dict=this[secret];return name in dict?dict[name].slice(0):[]};URLSearchParamsProto.has=function has(name){return name in this[secret]};URLSearchParamsProto.set=function set(name,value){this[secret][name]=[""+value]};URLSearchParamsProto.forEach=function forEach(callback,thisArg){var dict=this[secret];Object.getOwnPropertyNames(dict).forEach(function(name){dict[name].forEach(function(value){callback.call(thisArg,value,name,this)},this)},this)};URLSearchParamsProto.toJSON=function toJSON(){return{}};URLSearchParamsProto.toString=function toString(){var dict=this[secret],query=[],i,key,name,value;for(key in dict){name=encode(key);for(i=0,value=dict[key];i<value.length;i++){query.push(name+"="+encode(value[i]))}}return query.join("&")};var dP=Object.defineProperty,gOPD=Object.getOwnPropertyDescriptor,createSearchParamsPollute=function(search){function append(name,value){URLSearchParamsProto.append.call(this,name,value);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}function del(name){URLSearchParamsProto["delete"].call(this,name);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}function set(name,value){URLSearchParamsProto.set.call(this,name,value);name=this.toString();search.set.call(this._usp,name?"?"+name:"")}return function(sp,value){sp.append=append;sp["delete"]=del;sp.set=set;return dP(sp,"_usp",{configurable:true,writable:true,value:value})}},createSearchParamsCreate=function(polluteSearchParams){return function(obj,sp){dP(obj,"_searchParams",{configurable:true,writable:true,value:polluteSearchParams(sp,obj)});return sp}},updateSearchParams=function(sp){var append=sp.append;sp.append=URLSearchParamsProto.append;URLSearchParams.call(sp,sp._usp.search.slice(1));sp.append=append},verifySearchParams=function(obj,Class){if(!(obj instanceof Class))throw new TypeError("'searchParams' accessed on an object that "+"does not implement interface "+Class.name)},upgradeClass=function(Class){var ClassProto=Class.prototype,searchParams=gOPD(ClassProto,"searchParams"),href=gOPD(ClassProto,"href"),search=gOPD(ClassProto,"search"),createSearchParams;if(!searchParams&&search&&search.set){createSearchParams=createSearchParamsCreate(createSearchParamsPollute(search));Object.defineProperties(ClassProto,{href:{get:function(){return href.get.call(this)},set:function(value){var sp=this._searchParams;href.set.call(this,value);if(sp)updateSearchParams(sp)}},search:{get:function(){return search.get.call(this)},set:function(value){var sp=this._searchParams;search.set.call(this,value);if(sp)updateSearchParams(sp)}},searchParams:{get:function(){verifySearchParams(this,Class);return this._searchParams||createSearchParams(this,new URLSearchParams(this.search.slice(1)))},set:function(sp){verifySearchParams(this,Class);createSearchParams(this,sp)}}})}};upgradeClass(HTMLAnchorElement);if(/^function|object$/.test(typeof URL)&&URL.prototype)upgradeClass(URL);return URLSearchParams}();(function(URLSearchParamsProto){var iterable=function(){try{return!!Symbol.iterator}catch(error){return false}}();if(!("forEach"in URLSearchParamsProto)){URLSearchParamsProto.forEach=function forEach(callback,thisArg){var names=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(name){if(!name.length||name in names)return;(names[name]=this.getAll(name)).forEach(function(value){callback.call(thisArg,value,name,this)},this)},this)}}if(!("keys"in URLSearchParamsProto)){URLSearchParamsProto.keys=function keys(){var items=[];this.forEach(function(value,name){items.push(name)});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(!("values"in URLSearchParamsProto)){URLSearchParamsProto.values=function values(){var items=[];this.forEach(function(value){items.push(value)});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(!("entries"in URLSearchParamsProto)){URLSearchParamsProto.entries=function entries(){var items=[];this.forEach(function(value,name){items.push([name,value])});var iterator={next:function(){var value=items.shift();return{done:value===undefined,value:value}}};if(iterable){iterator[Symbol.iterator]=function(){return iterator}}return iterator}}if(iterable&&!(Symbol.iterator in URLSearchParamsProto)){URLSearchParamsProto[Symbol.iterator]=URLSearchParamsProto.entries}if(!("sort"in URLSearchParamsProto)){URLSearchParamsProto.sort=function sort(){var entries=this.entries(),entry=entries.next(),done=entry.done,keys=[],values=Object.create(null),i,key,value;while(!done){value=entry.value;key=value[0];keys.push(key);if(!(key in values)){values[key]=[]}values[key].push(value[1]);entry=entries.next();done=entry.done}keys.sort();for(i=0;i<keys.length;i++){this["delete"](keys[i])}for(i=0;i<keys.length;i++){key=keys[i];this.append(key,values[key].shift())}}}})(URLSearchParams.prototype);
//
function getParametersFromUrl() {
    var url_string = decodeURIComponent(window.location.href);
    var subStr = url_string.match(new RegExp("property_", "g"));
    if(subStr != null) {
        var propertyNum = subStr.length/2 || [];

        var url = new URL(url_string);
        var urlFilter = {
            price: url.searchParams.getAll("option[price][]"),
            all_room: url.searchParams.getAll("option[all_room][]"),
            rooms: url.searchParams.getAll("option[rooms][]"),
            floor: url.searchParams.getAll("option[floor][]")
        }
        for(var k = 0; k < propertyNum; k++) {
            var prop = "property_" + (k+1);
            prop = prop.toString();
            urlFilter[prop] = url.searchParams.getAll("option[properties][" + prop + "][]");
        }


        // set range parameters
        var rangesWrap = $(".range__item");
        var rangesInfoElements = rangesWrap.find(".js-filter__hidden-values");
        for(var i = 0; i < rangesInfoElements.length; i++) {
            var name = $(rangesInfoElements[i]).attr("name");

            for(var key in urlFilter) {
                if(name == key) {
                    var rangeElement = $(rangesInfoElements[i]).siblings(".js-filter__range").data('ionRangeSlider');
                    rangeElement.update({
                        from: urlFilter[key][0],
                        to: urlFilter[key][1]
                    });
                    $(rangesInfoElements[i]).siblings('.js-filter__text_min').html(urlFilter[key][0]);
                    $(rangesInfoElements[i]).siblings('.js-filter__text_max').html(urlFilter[key][1]);
                }
            }
        }
        // end__set range parameters

        // check rooms
        var roomsNumber = urlFilter.rooms;
        var checkbox = $(".filter-short .filter-checkbox");
        for(var j = 0; j < checkbox.length; j++) {
            roomsNumber.forEach(function(item, i) {
                if(+item == j+1) {
                   $(checkbox[j]).attr("checked", "checked");
                }
            });
        }
        // end__check rooms
    } 
}
getParametersFromUrl();
// end__URL



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

