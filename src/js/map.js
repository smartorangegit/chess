	    
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
	        zoom: 12,
	        center: {lat: 50.465477, lng: 30.513899},
	        gestureHandling: 'greedy'
		});

	    var iconActive = {
	        url: "img/map-marker-blue.png",
	        scaledSize: new google.maps.Size(20, 30),
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
		e.preventDefault();
		var fullDataProjects = data.data;
		var allProjects = createObjWithNecessaryProperties(fullDataProjects);
		var rangesProp = filter.option;

		function filteringByRange(recivedData) {
			var unsuitableElementsIndex = [];

			allProjects.forEach(function(project, i) {
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

			// delete repeatet elements in unsuitableElements
			function unique(arr) {
			  var obj = {};
			  for (var i = 0; i < arr.length; i++) {
			    var str = arr[i];
			    obj[str] = true;
			  }
			  return Object.keys(obj);
			}
			unsuitableElementsIndex = unique(unsuitableElementsIndex);

			// delete unsuitable elements from projects array
			for (var i = unsuitableElementsIndex.length -1; i >= 0; i--) {
	   			allProjects.splice(unsuitableElementsIndex[i],1);
			}

			var result = allProjects;
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
			var result = [];

			projects.forEach(function(proj, i) {
				for(var prop in selectProp) {
					if(selectProp[prop] != "") {
						if(selectProp[prop] == proj[prop]) {
							result.push(proj);
						}
					}
				}
			});

			if(result.length != 0) {
				return result;
			} else {
				return projects;
			}
		}
		var filterResult = filteringBySelect(filter);
		
		var allProj = getAllProject(data);
		showResultOnMap(map, allProj, filterResult, icon);

		return filterResult;
	});	
}

function createObjWithNecessaryProperties(data) {
	var dataProjects = [];
	var propertys = ["project_site", "project_name_mini", "all_room", "projects_coor", "price", "rooms", "project_price", "project_city", "project_region", "types", "development_id"];
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
	console.log(dataProjects);
	return dataProjects;
}

function markersShow(map, proj, icon) {
	var markersData = [];

    proj.forEach(function(item) {
    	var info = {};
    	info.lat = +item.projects_coor[0];
    	info.lng = +item.projects_coor[1];
    	info.name = item.project_name_mini;
    	info.site = item.project_site;

		markersData.push(info);	    	
    });

	markersData.forEach(function(item) {
		var marker = new google.maps.Marker({
	        position: {lat: item.lat, lng: item.lng},
	        url: item.site,
	        title: item.name,
	        map: map,
	        icon: icon
	    });	
	    // marker.setMap(map);
	    google.maps.event.addListener(marker, 'click', function() {
            window.location.href = marker.url;
        });
	});
}

function showResultOnMap(map, allProj, filterResult, icon) {
	var iconFalse = {
        url: "img/map-marker.png",
        scaledSize: new google.maps.Size(20, 30),
        origin: new google.maps.Point(0, 0)
    };

    markersShow(map, allProj, iconFalse);
    markersShow(map, filterResult, icon);
}
