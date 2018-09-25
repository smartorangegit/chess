	    
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
        showAllProjectOnMap(data);
        showFilteredProjectOnMap(data)
    },
    error: function(data){
       console.log(data);
    }
});

function showAllProjectOnMap(data) {
	var fullDataProjects = data.data;
	var dataRrojects = createObjWithNecessaryProperties(fullDataProjects);
	initMap(dataRrojects);
}

function showFilteredProjectOnMap(data) {
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

			// delete unsuitable elements from project array
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
			// console.log(projects);

			projects.forEach(function(el, i) {
				for(var prop in selectProp) {
					if(selectProp[prop] != "") {
						if(selectProp[prop] == el[prop]) {
							result.push(el);
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

		var filteredProject = filteringBySelect(filter);
		initMap(filteredProject);
		// return alert("dlfv");
	});	
}

function createObjWithNecessaryProperties(data) {
	var dataProjects = [];
	var propertys = ["all_room", "projects_coor", "price", "rooms", "project_price", "project_city", "project_region", "types", "development_id"];
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
	// console.log(data);
	return dataProjects;
}

function initMap(proj) {
    var el = document.getElementById('map');
    if(el) {
    	var map = new google.maps.Map(el, {
	        zoom: 11,
	        center: {lat: 50.465477, lng: 30.513899},
	        gestureHandling: 'greedy'
		});
	    
	    var icon = {
	        url: "img/map-marker.png", // url
	        origin: new google.maps.Point(0, 0) // origin
	    };

	    var markersData = [];

	    proj.forEach(function(item) {
	    	var coordinates = {};
	    	coordinates.lat = +item.projects_coor[0];
	    	coordinates.lng = +item.projects_coor[1];
			markersData.push(coordinates);	    	
	    });

		for(var i = 0; i < markersData.length; i++) {
			var marker = new google.maps.Marker({
		        position: {lat: markersData[i].lat, lng: markersData[i].lng},
		        map: map,
		        icon: icon
		    });	
		}
    }
}
