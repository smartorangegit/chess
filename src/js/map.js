	    
// some of function describe in common.js 
var filterDefautl = {
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
getSelectsValue();
getRoomsNumber();

$.ajax({
    url: "http://apivime.smarto.com.ua/ajax",
    type: "POST",
    dataType: "json",
    data: {typ: "1", page: "1"},
    success: function(data){
        initMap(data);
    },
    error: function(data){
       console.log(data);
    }
});

function initMap(data) {
    var allProj = getAllProject(data);
	
    var el = document.getElementById('map');
    if(el) {
    	var map = new google.maps.Map(el, {
	        zoom: 11,
	        center: {lat: 50.390137, lng: 30.588201},
	        gestureHandling: 'greedy'
		});

	    var iconActive = {
	        url: "/img/marker-gray.png",
	        scaledSize: new google.maps.Size(12, 12),
	        origin: new google.maps.Point(0, 0)
	    };

	    var project = filterProj(data, map, iconActive);

	    if(project == undefined) {
	    	markersShow(map, allProj, iconActive); // when page are loaded
	    } else {
	    	project;
	    }
    }
}

function getAllProject(data) {
	var fullDataProjects = data.data;
	var dataRrojects = createObjWithNecessaryProperties(fullDataProjects);
	return dataRrojects;
}

function filterProj(data, map, icon) {
	$(".filter__button-js").on("click", function(e) {
		getRoomsNumber($(".home-filter-checkbox-wrap"));
		e.preventDefault();
		var fullDataProjects = data.data;
		var allProjects = createObjWithNecessaryProperties(fullDataProjects);
		var rangesProp = filter.option;

		function filteringByRange(recivedData) {
			var unsuitableElementsIndex = [];

			allProjects.forEach(function(project, i) {
			// select unsuitable elements
				for(var prop in recivedData) {
					var min = recivedData[prop][0];
					var max = recivedData[prop][1];
					if(prop == "rooms") {
						continue;
					} else if(+project[prop] >= min == false || +project[prop] <= max == false) {
						unsuitableElementsIndex.push(i);
					}
				}
			});

			var result = unsuitableArrToSuitableArr(allProjects, unsuitableElementsIndex);
			return result;
		}

		function filteringByRoom(recivedData) {
			var projects = filteringByRange(recivedData);
			var rooms = recivedData.rooms;
			var result = [];

			if(rooms.length != 0) {
				projects.forEach(function(el, i) {
					rooms.forEach(function(item) {
						if(el.rooms == item) {
							result.push(el);
						}
					}); 
				});
				return result;
			} else {
				return projects;
			}
		}
		
		function filteringBySelect(filter) {
			var projects = filteringByRoom(filter.option);
			var selectProp = filter.selectValue;
			var unsuitableElementsIndex = [];

			for(var prop in selectProp) {
				projects.forEach(function(proj, i) {
					if(selectProp[prop] != "") {
						if(selectProp[prop] != proj[prop]) {
							unsuitableElementsIndex.push(i);
						}
					}
				});
			}

			var result = unsuitableArrToSuitableArr(projects, unsuitableElementsIndex);
			return result;
		}
		var filterResult = filteringBySelect(filter);
		
		var allProj = getAllProject(data);
		showResultOnMap(map, allProj, filterResult, icon);

		return filterResult;
	});	
}

function createObjWithNecessaryProperties(data) {
	var dataProjects = [];
	var propertys = ["project_adress", "url_project", "project_name_mini", 
					"all_room", "projects_coor", "price", 
					"rooms", "project_price", "project_city", 
					"project_region", "types", "development_id",
					"development_img", "project_img", "project_metro",
					"project_price_flat"];
	for(var key in data) {
		var fullProject = data[key];
		var project = {};
		propertys.forEach(function(element) {
			for(var key2 in fullProject) {
				if(key2 == element) {
					project[element] = fullProject[key2];
				}
			}
		});
		dataProjects.push(project);
	}
	return dataProjects;
}

function unsuitableArrToSuitableArr(proj, unsuitableArr) {
	var uniqueEl = [];
	// delete repeatet elements in unsuitableElements
	function unique(arr) {
	  var obj = {};
	  for (var i = 0; i < arr.length; i++) {
	    var str = arr[i];
	    obj[str] = true;
	  }
	  return Object.keys(obj);
	}
	uniqueEl = unique(unsuitableArr);

	// delete unsuitable elements from projects array
	for (var i = uniqueEl.length -1; i >= 0; i--) {
			proj.splice(uniqueEl[i],1);
	}

	return proj;
}

function markersShow(map, proj, icon) {
	var markersData = [];

    proj.forEach(function(item) {
    	var info = {};
    	info.lat = +item.projects_coor[0];
    	info.lng = +item.projects_coor[1];
    	info.name = item.project_name_mini;
    	info.site = item.url_project;
    	info.str = item.project_adress;
    	info.devLogo = item.development_img;
    	info.img = item.project_img;
    	info.subway = item.project_metro;
    	info.minPrice = item.project_price_flat;

		markersData.push(info);	    	
    });

	markersData.forEach(function(item) {
		var marker = new google.maps.Marker({
	        position: {lat: item.lat, lng: item.lng},
	        url: item.site,
	        map: map,
	        icon: icon
	    });	
	    google.maps.event.addListener(marker, 'click', function() {
	    	$(".map-tooltip").remove();
            
            $(".map-page__map-wrap").append(
            		'<div class="map-tooltip">' + 
		                '<h4 class="map-tooltip__heading">' +
		                    item.name +
		                '</h4>' +
		                '<div class="map-tooltip__image-wrap">' +
		                    '<img src="' + item.img + '" alt="image" class="map-tooltip__image">' +
		                    // '<span class="residence-list__price">от 10 000 грн. м<sup>2</sup></span>'
		                '</div>' +
		                '<img src="' + item.devLogo + '" alt="logo" class="map-tooltip__logo">' +
		                '<ul class="map-tooltip-info">' +
		                    '<li class="map-tooltip-info__item">' +
		                        '<svg class="map-tooltip-info__icon map-tooltip-info__icon_small"><use xlink:href="#placeholder"></use></svg>' +
		                        '<p class="map-tooltip-info__text">' + item.subway + '<span class="map-tooltip__text-info_medium">' + item.str + '</span></p>' +
		                    '</li>' +
		                    '<li class="map-tooltip-info__item">' +
		                        '<svg class="map-tooltip-info__icon"><use xlink:href="#price"></use></svg>' +
		                        '<p class="map-tooltip-info__text">Cтоимость квартиры – <br> <span class="map-tooltip-info__text_medium">от ' + item.minPrice + ' грн.</span></p>' +
		                    '</li>' +
		                '</ul>' +
		                '<a href="' + item.site + '" class="button booking-button map-tooltip__button">' +
		                    'Страница объекта' +
		                '</a>' +
		                '<button class="map-tooltip-close">' +
		                    '<svg class="map-tooltip-close__icon"><use xlink:href="#cancel"></use></svg>' +
		                '</button>' +
		            '</div>'
            );

            $(".map-tooltip-close").on("click", function() {
            	$(this).closest(".map-tooltip").remove();
            });
        });

        var contentString = '<div id="content" class="map-tooltip_small">' +
        		"<p class='map-tooltip_small__name'>" + item.name + "</p>" + 
        		"<p class='map-tooltip_small__str'>" + item.str + "</p>" + 
	        '</div>';

	    var infowindow = new google.maps.InfoWindow({
	      content: contentString
	    });

        google.maps.event.addListener(marker, 'mouseover', function() { 	
            infowindow.open(map, marker);

            // customise tooltip style 
            var wrap = $(".gm-style-iw");
            wrap.siblings().remove();
            // end__customise tooltip style 
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
    		infowindow.close();
  		});
	});
}

function showResultOnMap(map, allProj, filterResult, icon) {
	var iconFalse = {
        url: "/img/marker.png",
        scaledSize: new google.maps.Size(12, 12),
        origin: new google.maps.Point(0, 0)
    };

    markersShow(map, allProj, iconFalse);
    markersShow(map, filterResult, icon);
}
