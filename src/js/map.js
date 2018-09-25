	    
// some of function describe in common.js 
var filterDefautl = {
    option: {
        price: getDefaulValue($("input[name='price']")),
        all_room: getDefaulValue($("input[name='all_room']")),
        project_price: getDefaulValue($("input[name='project_price']"))
        // rooms: []
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
// getRoomsNumber();

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
		var unsuitableElements = [];

		allProjects.forEach(function(project, i) {
			for(var prop in rangesProp) {
				var min = rangesProp[prop][0];
				var max = rangesProp[prop][1];
				// if(prop == "rooms") {
				// 	if(rangesProp[prop].length != 0) {
				// 		rangesProp[prop].forEach(function(el) {
				// 			if(project[prop] != el) {
				// 				console.log(i);
				// 				unsuitableElements.push(i);
				// 				break;
				// 			}
				// 		});
				// 	} else {
				// 		console.log(i);
				// 		unsuitableElements = [];
				// 	}
				// } else {
				// 	if(+project[prop] >= min == false || +project[prop] <= max == false) {
				// 		unsuitableElements.push(project);
				// 	}
				// }

				if(+project[prop] >= min == false || +project[prop] <= max == false) {
					unsuitableElements.push(i);
				}
			}
		});

		// delete repeatet elements in unsuitableElements
		function unique(unsuitableElements) {
		  var obj = {};
		  for (var i = 0; i < unsuitableElements.length; i++) {
		    var str = unsuitableElements[i];
		    obj[str] = true;
		  }
		  return Object.keys(obj);
		}
		unsuitableElements = unique(unsuitableElements);
		// console.log(unsuitableElements);

		// delete unsuitable elements from project array
		for (var i = unsuitableElements.length -1; i >= 0; i--) {
   			allProjects.splice(unsuitableElements[i],1);
		}

		console.log(allProjects);


		// console.log(allProjects, rangesProp);
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
		        map: map
		        // icon: icon
		    });	
		}
    }
}
