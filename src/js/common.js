

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

(function customSelect() {
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("home-filter__select-wrap");
    for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.setAttribute("class", "select__item");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "select__item same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
          /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
      });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
      except the current select box:*/
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
}());

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

            // set default value
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
            if(filter.option[name] != undefined) {
                filter.option[name][0] = +e.from;
                filter.option[name][1] = +e.to;
            } else {
                filter.option.properties[name] = [];
                filter.option.properties[name][0] = +e.from;
                filter.option.properties[name][1] = +e.to;
            }
        }
    }
    // end__get_ranges_value

    // get_selects_value
    function getSelectsValue() {
        $(".select__item").on("click", function(e) {
            var parrent = $(this).closest(".home-filter__select-wrap");
            var value = parrent.find(".select-selected").html();
            var selectId = parrent.find("select").attr("id");

            switch (selectId) {
                    case "project_city":
                        return filter.selectValue["project_city"] = value;
                    case "project_region":
                        return filter.selectValue["project_region"] = value;
                    case "state":
                        return filter.selectValue["state"] = value;
                    case "development_id":
                        return filter.selectValue["development_id"] = value;
            }
        });
    }
    // end__get_selects_value


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
                tableBuild(data.dataList, data.dataTable);
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


