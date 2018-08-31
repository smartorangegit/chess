

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


// functions_for_filter
    function getDefaulValue(el) {
        var valueArr = [];
        var min = +el.attr("min");
        var max = +el.attr("max");

        valueArr.push(min);
        valueArr.push(max);

        return valueArr;
    }

    function objClone(src) {
      return JSON.parse(JSON.stringify(src));
    }

    // get_ranges_value
    function rangesValue() {
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
    function onRangeChange(e) {
        var target = e.input;
        for(var i = 0; i < target.length; i++) {
            var name = target.siblings('.js-filter__hidden-values').attr('name');
            target.siblings('.js-filter__text_min').html(e.from);
            target.siblings('.js-filter__text_max').html(e.to);
            filter.option[name][0] = +e.from;
            filter.option[name][1] = +e.to;
        }
    }
    // end__get_ranges_value

    // get_number_of_rooms
   function getRoomsNumber() {
     $(".filter-checkbox").on("click", function() {
        var roomsArr = filter.option["rooms"];
        var roomNumber = $(this).attr("value");
        var checked = $(this).prop("checked");

        if(checked) {
            roomsArr.push(+roomNumber);
        } else {
            roomsArr.forEach(function(item, i) {
                if(item == +roomNumber) {
                    roomsArr.splice(i, 1);
                }
            });
        }
    });
   }
    // end__get_number_of_rooms

    // reset_filter_values
    $('.filter__button_clear-js').on("click", function(e) {
        e.preventDefault();
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

        // reset checkbox
        $(".filter-checkbox").prop("checked", false);

        // reset filter obj
        var filter = objClone(filterDefautl);
        console.log(filter);
    });
    // end__reset_filter_values

// end__functions_for_filter

// pagination
    function showFilterPagination() {
        if($(".result-tile-wrap").hasClass("result-tile_active-js")) {
            $(".filter-pagination").css("display", "none");
        } else {
            $(".filter-pagination").css("display", "block");
        }
    };

    function paginationItemShow(quantity, planBuild, tableBuild) {
        $(".pagination-num-list__item").remove();
        var quantityToShow = 12;
        var intengerResult = Math.floor(quantity / quantityToShow);
        var list = $('.pagination-num-list');

        if(quantity / quantityToShow > 1) {
            showFilterPagination();
        }

        for(var i = 0; i <= intengerResult; i++) {
            list.append(
                "<li class='pagination-num-list__item'>" +
                    "<a href='#' class='pagination-num-list__link pagination__button'>" + (i+1) + "</a>" +
                "</li>"
            );
        }
        $($(".pagination-num-list__link")[0]).addClass("pagination-num-list__link_active");

        showDefaultDots($(".pagination-num-list__item"));

        paginationSendData(planBuild, tableBuild);
    }

    function showDefaultDots(items) {
        var listLength = items.length;

        if(listLength > 5) {
            for(var i = 3; i < listLength-1; i++) {
                $(items[i]).css("display", "none");
            }
            $(items[listLength-1]).addClass("pagination-num-list__dot_left")
                                   .css("display", "block");
        }
    }

    function paginationSendData(planBuild, tableBuild) {
        var links = $(".pagination-num-list__link");

        var paginAjaxObj = {
            url: "http://apivime.smarto.com.ua/ajax",
            type: "POST",
            dataType: "json",
            data: filter,
            success: function(data){
                planBuild(data.dataList);
                tableBuild(data.dataList);
                console.log(data.dataList);
            },
            error: function(err){
               console.log('Error ',err);
            }
        }

        links.on("click", function(e) {
            e.preventDefault();
            links.removeClass("pagination-num-list__link_active");
            $(this).addClass("pagination-num-list__link_active");

            var pageNum = $(this).html();
            filter.page = pageNum;

            nextShowDots();
            $.ajax(paginAjaxObj);
        });
        $(".pagination-prev").on("click", function(e) {
            e.preventDefault();
            var activeIndex = links.index($(".pagination-num-list__link_active"));
            links.removeClass("pagination-num-list__link_active");

            if(+filter.page >= 2) {
                $(links[activeIndex-1]).addClass("pagination-num-list__link_active");
                filter.page = (+filter.page - 1).toString(); // adding 0.5 because pagination function called 2times
            } else {
                $(links[0]).addClass("pagination-num-list__link_active");
            }

            prevShowDots();

            $.ajax(paginAjaxObj);
        });
        $(".pagination-next").on("click", function(e) {
            e.preventDefault();
            var activeIndex = links.index($(".pagination-num-list__link_active"));

            if(+filter.page < links.length) {
                links.removeClass("pagination-num-list__link_active");
                $(links[activeIndex+1]).addClass("pagination-num-list__link_active");
                filter.page = (+filter.page + 1).toString(); // adding 0.5 because pagination function called 2times
            }

            nextShowDots();

            $.ajax(paginAjaxObj);
        });
    };

    function nextShowDots() {
        var items = $(".pagination-num-list__item");
        var activeItem = $(".pagination-num-list__link_active").closest(".pagination-num-list__item");
        var indexActiveItem = items.index(activeItem);
        var listLength = items.length;

        if(indexActiveItem >= 3 && indexActiveItem <= (listLength - 2)) {
            clearItems(items, listLength);
            $(items[indexActiveItem+1]).css("display", "block");                       
            $(activeItem).addClass("pagination-num-list__dot_left")
                           .css("display", "block");
            if(indexActiveItem == (listLength - 2)) {
                $(items[listLength - 1]).removeClass("pagination-num-list__dot_left");
            } else {
                $(items[listLength - 1]).addClass("pagination-num-list__dot_left");
            }
        } 
    };

    function prevShowDots() {
        var items = $(".pagination-num-list__item");
        var activeItem = $(".pagination-num-list__link_active").closest(".pagination-num-list__item");
        var indexActiveItem = items.index(activeItem);
        var listLength = items.length;

        if(indexActiveItem >= 3 && indexActiveItem < (listLength - 2)) {
            clearItems(items, listLength);
            $(items[indexActiveItem-1]).addClass("pagination-num-list__dot_left")
                                       .css("display", "block");                      
            $(activeItem).css("display", "block");
            $(items[listLength - 1]).addClass("pagination-num-list__dot_left");
        } else if(indexActiveItem == 2) {
            $(items[3]).css("display", "none");
            clearItems(items, listLength);
            $(items[2]).css("display", "block");
        }

        $(items[2]).removeClass("pagination-num-list__dot_left");
    };

    function clearItems(el, listLength) {
        for(var i = 2; i <= (listLength - 2); i++) {
            $(el[i]).removeClass("pagination-num-list__dot_left")
                    .css("display", "none");  
        }
    };
// end__pagination


