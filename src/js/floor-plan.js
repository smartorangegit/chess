// open expandet settings
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
// end__open expandet settings


 var filterDefautl = {
    count: "12",
    typ: "4",
    page: "1",
    order: [],
    option: {
        price: getDefaulValue($("input[name='price']")),
        all_room: getDefaulValue($("input[name='all_room']")),
        rooms: [],
        floor: 5,
        house: 1,
        project_id: 1,
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
getRoomsNumber();


function request() {
	$.ajax({
	    url: "http://apivime.smarto.com.ua/ajax",
	    type: "POST",
	    dataType: "json",
	    data: filter,
	    success: function(data){
	        planDraw(data);
	    },
	    error: function(data){
	       console.log(data);
	    }
	});
}
request();

// submit
$('.filter__button-js').on("click", function(e) {
    e.preventDefault();
    var recursiveEncoded = $.param(filter);
    var url = window.location.href + '?';
    url = url.substr(0,url.indexOf('?'))
    window.history.pushState("", "", url+'?'+recursiveEncoded);

    request();
});
// end__submit


function planDraw(data) {
	var coordinates = getCoord(data);
	var parameters = getParam(data);
	var imgWidth = data.img[0];
	var imgHeigth = data.img[1];
	var imgLoc = data.img[name];

	console.log(data);

	$(".svg-wrap").css({
		width: imgWidth+"px",
		height: imgHeigth+"px"
	});

	(function buildSVG(middle) {
		var wrapper = $(".svg-wrap");
		var polygons = "";
		var flatsCenterCoord = getPolygonsCenter(coordinates);

		function colorPolygon(item, param, num) {
			var horizontal = flatsCenterCoord[num].mid[0];
			var vertical = flatsCenterCoord[num].mid[1];
			var sale = param[num].sale;

			switch (sale) {
                case "1":
                    return "<g class='floor-svg__grup'>" +
							"<a href='#'>" +
								"<polygon class='floor-svg__polygon' points='" + item + "'/>" +
								"<g>" + 
									"<rect x='" + horizontal + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_green' width='20' height='20'/>" +
									"<text x='" + (horizontal+7) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_white'>" +
										parameters[num].rooms +
									"</text>" +
								"</g>" +
								"<g>" + 
									"<rect x='" + (horizontal+20) + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_green floor-svg__rect_light' width='65' height='20'/>" +
									"<text x='" + (horizontal+26) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_black'>" +
										parameters[num].square + " м<tspan class='sup'>2</tspan>" +
									"</text>" +
								"</g>" +
							"</a>" +
						"</g>";	
                case "2":
                    return "<g class='floor-svg__grup'>" +
							"<a href='#'>" +
								"<polygon class='floor-svg__polygon' points='" + item + "'/>" +
								"<g>" + 
									"<rect x='" + horizontal + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_yellow' width='20' height='20'/>" +
									"<text x='" + (horizontal+7) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_white'>" +
										parameters[num].rooms +
									"</text>" +
								"</g>" +
								"<g>" + 
									"<rect x='" + (horizontal+20) + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_yellow floor-svg__rect_light' width='65' height='20'/>" +
									"<text x='" + (horizontal+26) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_black'>" +
										parameters[num].square + " м<tspan class='sup'>2</tspan>" +
									"</text>" +
								"</g>" +
							"</a>" +
						"</g>";	
                case "3":
                    return "<g class='floor-svg__grup'>" +
							"<a href='#'>" +
								"<polygon class='floor-svg__polygon' points='" + item + "'/>" +
								"<g>" + 
									"<rect x='" + horizontal + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_gray' width='20' height='20'/>" +
									"<text x='" + (horizontal+7) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_white'>" +
										parameters[num].rooms +
									"</text>" +
								"</g>" +
								"<g>" + 
									"<rect x='" + (horizontal+20) + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_gray floor-svg__rect_light' width='65' height='20'/>" +
									"<text x='" + (horizontal+26) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_black'>" +
										parameters[num].square + " м<tspan class='sup'>2</tspan>" +
									"</text>" +
								"</g>" +
							"</a>" +
						"</g>";	
                case "0":
                    return "<g class='floor-svg__grup'>" +
							"<a href='#'>" +
								"<polygon class='floor-svg__polygon' points='" + item + "'/>" +
								"<g>" + 
									"<rect x='" + horizontal + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_dark-gray' width='20' height='20'/>" +
									"<text x='" + (horizontal+7) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_white'>" +
										parameters[num].rooms +
									"</text>" +
								"</g>" +
								"<g>" + 
									"<rect x='" + (horizontal+20) + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_dark-gray floor-svg__rect_light' width='65' height='20'/>" +
									"<text x='" + (horizontal+26) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_black'>" +
										parameters[num].square + " м<tspan class='sup'>2</tspan>" +
									"</text>" +
								"</g>" +
							"</a>" +
						"</g>";	
                default:
                    return "<g class='floor-svg__grup'>" +
							"<a href='#'>" +
								"<polygon class='floor-svg__polygon' points='" + item + "'/>" +
								"<g>" + 
									"<rect x='" + horizontal + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_dark-gray' width='20' height='20'/>" +
									"<text x='" + (horizontal+7) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_white'>" +
										parameters[num].rooms +
									"</text>" +
								"</g>" +
								"<g>" + 
									"<rect x='" + (horizontal+20) + "' y='" + vertical + "' class='floor-svg__rect floor-svg__rect_dark-gray floor-svg__rect_light' width='65' height='20'/>" +
									"<text x='" + (horizontal+26) + "' y='" + (vertical+14) + "' class='floor-svg__text floor-svg__text_black'>" +
										parameters[num].square + " м<tspan class='sup'>2</tspan>" +
									"</text>" +
								"</g>" +
							"</a>" +
						"</g>";	
            }
		}

		coordinates.forEach(function(item, i) {
			polygons += colorPolygon(item, parameters, i);
		});

		var svg = "<svg id='ball' class='floor-svg' width='100%' height='100%' version='1.0' xmlns='http://www.w3.org/2000/svg'>" +
					"<image xlink:href='img/floor.png' x='0' y='0' height='100%' width='100%' />" +
						polygons +
				   "</svg>";

		wrapper.append(svg);

		polygonHover();
		zooming();
	}());
};

function getCoord(data) {
	var flats = data.dataList;
	var coordinates = [];
	var finalArr = [];
	
	flats.forEach(function(flat, i) {
		if(flat.sorts != null) {
			coordinates.push(flat.sorts);
		}
	});
	return coordinates;
}

function getParam(data) {
	var flats = data.dataList;
	var finalArr = [];
	
	flats.forEach(function(flat, i) {
		var param = {};
		if(flat.sorts != null) {
			param.rooms = flat.rooms;
			param.square = flat.all_room;
			param.sale = flat.sale;
			param.id = flat.id;

			finalArr.push(param);
		}
	});

	return finalArr;
}

function getPolygonsCenter(coordinatesAll) {
	var	coordinatesFlat = [];
	var coordinatesAllNum = [];

	coordinatesAll = coordinatesAll.map(function(item) {
  		return	item.split(',');
	});

	coordinatesAll.forEach(function(item) {
		item = item.map(function(el) {
	  		return	el = +el;
		});
		coordinatesAllNum.push(item);
	});


	function flatsRangeSize(coord) {
		var all = [];
		coord.forEach(function(item) {
			var flatAllCoord = {};
			var arrX = [];
			var arrY = [];

			// separate X and Y coordinate
			for(var i = 0; i < item.length; i++) {
				if(i%2 == 0) {
					arrX.push(item[i]);
				} else {
					arrY.push(item[i]);
				}
			}

			//max coordinates
			var flatMaxCoord = [];
			var maxX = Math.max.apply( Math, arrX);
			var maxY = Math.max.apply( Math, arrY);
			flatMaxCoord.push(maxX);
			flatMaxCoord.push(maxY);

			//min coordinates
			var flatMinCoord = [];
			var minX = Math.min.apply( Math, arrX);
			var minY = Math.min.apply( Math, arrY);
			flatMinCoord.push(minX);
			flatMinCoord.push(minY);

			//middle coordinates
			var flatMidCoord = [];
			var midX = maxX - ((maxX - minX) / 2) - 10; // 10 - half width of center tooltip rect
			var midY = maxY - ((maxY - minY) / 2) - 10; // 10 - half height of center tooltip rect
			flatMidCoord.push(midX);
			flatMidCoord.push(midY);

			flatAllCoord.min = flatMinCoord;
			flatAllCoord.max = flatMaxCoord;
			flatAllCoord.mid = flatMidCoord;

			all.push(flatAllCoord);
		});
		return all;
	}
	
	return flatsRangeSize(coordinatesAll);
};

function polygonHover() {
	$(".floor-svg__polygon").hover(
		function(e) {
			var target = this;
			var targetX = target.getBoundingClientRect().left,
				targetY = target.getBoundingClientRect().top;

			var wrapper = document.getElementsByClassName("svg-wrap")[0];
			var wrapperX = wrapper.getBoundingClientRect().left,
				wrapperY = wrapper.getBoundingClientRect().top;

			var diffTop = targetY - wrapperY,
				diffLeft = targetX - wrapperX;

			var tooltip = $('.flat-tooltip_big'),
                tooltipHeight = tooltip.height(),
                tooltipWidth = tooltip.width();

            tooltip.css({
                top: diffTop - 0.3*tooltipHeight + "px",
                left: diffLeft + 0.3*tooltipWidth + "px",
                opacity: "1"
            });

            $(target).siblings().css("display", "none");
		},
        function(e) {
        	var target = this;
            $(target).siblings().css("display", "block");

            $('.flat-tooltip_big').css({
                opacity: "0",
                left: "-999px"
            });
        }
	);
}

// zooming
function zooming() {
	var count = 1;
	$(".zoom-button__button_plus").on("click", function() {
		if(count < 1.8) {
			count += 0.2;
			imageDrag();
		}
		$(".floor-svg").css("transform", "scale(" + count + ")");
	});
	$(".zoom-button__button_minus").on("click", function() {
		if(count > 1) {
			count -= 0.2;
			imageDrag();
		} else if(count == 1) {
			$(".floor-svg").css({
				left: 0,
				top: 0
			});
		}
		$(".floor-svg").css("transform", "scale(" + count + ")");
	});
};
// end__zooming


function imageDrag() {
	var image = document.getElementsByClassName("floor-svg")[0];
	var bigContainer = document.getElementsByTagName("body")[0];
	var wrapper = document.getElementsByClassName("svg-wrap")[0],
		wrapperX = wrapper.getBoundingClientRect().right,
		wrapperY = wrapper.getBoundingClientRect().bottom;


	image.onmousedown = function(e) {
		var wrapperX = wrapper.getBoundingClientRect().left,
			wrapperY = wrapper.getBoundingClientRect().top;

		$(bigContainer).mousemove(function(e) {
			$(this).css("cursor", "grab");

			var mouseX = e.clientX,
				mouseY = e.clientY;
			var horizontal = mouseX - wrapperX-100,
				vertical = mouseY - wrapperY-100;

			$(image).css({
				left: horizontal + "px",
				top: vertical + "px"
			});

			globalH = horizontal;
			globalV = vertical;
		});
	};

	bigContainer.ondragstart = function() {
	  return false;
	};

	bigContainer.onmouseup = function() {
		$(bigContainer).off("mousemove");
		$(bigContainer).css("cursor", "default");
	};
};





















// CANVAS

// function canvas(data) {
// 	var coordinates = getParam(data);
// 	var imgWidth = data.img[0];
// 	var imgHeigth = data.img[1];
// 	var imgLoc = data.img[name];

// 	var el = $(".floor-svg");
// 	el.attr("width", imgWidth);
// 	el.attr("height", imgHeigth);

	// draw SVG
	
	// end__draw SVG

	// var el =document.getElementById("floor-canvas");
	// var c = el.getContext("2d");

	// $(el).attr("width", imgWidth);
	// $(el).attr("height", imgHeigth);

	// // insert image in canvas
	// var img = new Image();
	// img.src = "img/floor.png";
	// img.onload = function() {
	// 	c.drawImage(img, 0, 0);
	// };


	// draw flat contour
	// coordinates.forEach(function(flat) {
	// 	c.beginPath();
	// 	c.fillStyle = "rgba(0, 0, 0, 1)";
	// 	c.globalCompositeOperation="destination-over"; // emulation z-index
	// 	c.moveTo(flat[0][0], flat[0][1]);

	// 	flat.forEach(function(item, i) {
	// 		c.lineTo(item[0], item[1]);
	// 		if(i != flat.length-1) {
	// 			c.lineTo(item[0], item[1]);
	// 		} else {
	// 			c.lineTo(flat[0][0], flat[0][1]);
	// 		}
	// 	});
	// 	c.closePath();
	// 	c.fill();
	// });
	// end__draw flat contour

	// hoverEffect(el, coordinates);
// };

// function getParam(data) {
// 	var flats = data.dataList;
// 	var coordinates = [];
// 	var finalArr = [];
	
// 	flats.forEach(function(flat, i) {
// 		if(flat.sorts != null) {
// 			coordinates.push(flat.sorts);
// 		}
// 	});

// 	coordinates = coordinates.map(function(item) {
//   		return item.split(',');
// 	});

// 	coordinates.forEach(function(item) {
// 		var outerArr = [];
// 		for(var i = 0; i < item.length; i++) {
// 			var innerArr = [];
// 			if(i%2 == 0) {
// 				innerArr.push(item[i]);
// 				innerArr.push(item[i+1]);
// 			} else {
// 				continue;
// 			}
// 			outerArr.push(innerArr);
// 		}
// 		finalArr.push(outerArr);
// 	});

// 	return finalArr;
// }

// function hoverEffect(el, coord) {
// 	var elementX = el.getBoundingClientRect().left,
// 		elementY = el.getBoundingClientRect().top;

// 	$(el).mousemove(function(e) {
// 		var mouseX = e.clientX,
// 			mouseY = e.clientY;
// 		var horizontal = mouseY - elementY,
// 			vertical = mouseX - elementX;
// 	});
// }

// function flatsCoord(coord) {
// 	// console.log(coord);
// 	var result = [];

// 	coord.forEach(function(flat) {
// 		var flatResult = [];
// 		var arrMaxXY = [];
// 		var arrMinXY = [];
// 		var arrX = [];
// 		var arrY = [];

// 		// create arrays with all X or Y coordinates
// 		flat.forEach(function(point) {
// 			arrX.push(+point[0]);
// 			arrY.push(+point[1]);
// 		});
// 		// max coordinates
// 		var maxX = Math.max.apply( Math, arrX);
// 		var maxY = Math.max.apply( Math, arrY);
// 		arrMaxXY.push(maxX);
// 		arrMaxXY.push(maxY);

// 		// min coordinates
// 		var minX = Math.min.apply( Math, arrX);
// 		var minY = Math.min.apply( Math, arrY);
// 		arrMinXY.push(minX);
// 		arrMinXY.push(minY);

// 		flatResult.push(arrMinXY);
// 		flatResult.push(arrMaxXY);

// 		result.push(flatResult);

// 	});
// 	console.log(result);
// }




