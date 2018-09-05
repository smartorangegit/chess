$('.home-slider').slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 0,
    centerMode: true,
    centerPadding: "100px",
    arrows: true,
  	prevArrow: '.home-slider__button-prev',
	nextArrow: '.home-slider__button-next',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: false,
        infinite: true,
        centerPadding: "100px"
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        infinite: true,
        centerPadding: "100px"
      }
    }
    ]
});

// change other content when change current slide
    function changeSlideTextHome(slider, textBlock) {
        var text = textBlock.find(".text-element-js");
        var textArr = [];

        for(var i = 0; i < text.length; i++) {
            textArr.push($(text)[i]);
        }
        var lastElement = textArr.pop();
        textArr.unshift(lastElement);

        $(textArr[0]).css("display", "block");

        slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(textArr).css("display", "none");
            $(textArr[nextSlide]).css("display", "block");
        });
    };
    changeSlideTextHome($(".home-slider"), $(".slide-info-list"));
// end__change other content when change current slide

// popup
    $(".home-popup__heading-icon").on('click', function() {
        $(this).closest(".home-popup-wrap").fadeOut();
    });
// end__popup


// filter
    // some of function describe in common.js 

    var filterDefautl = {
        count: "12",
        typ: "1",
        page: "1",
        option: {
            price: getDefaulValue($("input[name='price']")),
            all_room: getDefaulValue($("input[name='all_room']")),
            project_price: getDefaulValue($("input[name='project_price']")),
            rooms: []
        },
        selectValue: {
            project_city: "",
            project_region: "",
            state: "",
            development_id: ""
        }
    };

    var filter = objClone(filterDefautl);

    rangesValue();

    // get_selects_value
    function citySelect() {
        var value = document.getElementById("project_city").value;
        filter.selectValue["project_city"] = value;
    }
    function districtSelect() {
        var value = document.getElementById("project_region").value;
        filter.selectValue["project_region"] = value;
    }
    function stateSelect() {
        var value = document.getElementById("state").value;
        filter.selectValue["state"] = value;
    }
    function developerSelect() {
        var value = document.getElementById("development_id").value;
        filter.selectValue["development_id"] = value;
    }
    // end__get_selects_value

    getRoomsNumber();

    // show_selected_residance (home-page)
    function residenceShow(residence) {
        function info (residenceArr) {
            var markup = "";
            residenceArr.forEach(function(item, i) {
                markup += "<li class='residence-list__item'>" + 
                        "<a href='" + item.url_project + "'>" +
                            "<h4 class='residence-list__heading'>" + item.project_name + "</h4>" +
                            // "<p class='residence-list__link'>" + item.project_site + "</p>" +
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
                residenceShow(data.data);
                paginationItemShow(data.quantity, residenceShow);
            },
            error: function(data){
               console.log(data);
            }
        });
    });
    // end__submit
// end__filter

