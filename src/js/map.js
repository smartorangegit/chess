	    
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
        mapFilter(data);
    },
    error: function(data){
       console.log(data);
    }
});

function mapFilter(data) {
	$(".filter__button-js").on("click", function(e) {
		e.preventDefault();
		var fullDataProjects = data.data;
		var projects = [];
		for(var key in fullDataProjects) {
			var project = fullDataProjects[key];
			for(var key2 in project) {
				var a = [];
				if(key2 == "price") {
					// delete project.key2;
					// console.log(key2);
					// a.push(key2);
				}
				console.log(a);
			}
		}

		// console.log(data);
	});	
}





function initMap() {
	var lat = 50.465477;
	var lng = 30.513899;
    var uluru = {lat: +lat, lng: +lng};
    var el = document.getElementById('map');
    if(el) {
    	var map = new google.maps.Map(el, {
	        zoom: 12,
	        center: uluru,
	        gestureHandling: 'greedy'
		});
	    
	    var icon = {
	        url: "img/map-marker.png", // url
	        // size: new google.maps.Size(200, 150),
	        // scaledSize: new google.maps.Size(200, 150), // scaled size
	        origin: new google.maps.Point(0, 0) // origin
	        // anchor: new google.maps.Point(87, 232) // anchor
	    };

	    var markersData = [
			{
				lat: 50.445728,     
				lng: 30.536572,   
				name: "Название 1",
				address:"Адрес 1" 
			},
			{
				lat: 50.445667,
				lng: 30.482662,
				name: "Название 2",
				address:"Адрес 2"
			},
			{
				lat: 50.465477,
				lng: 30.525899,
				name: "Название 3",
				address:"Адрес 3"
			}
		];

		for(var i = 0; i < markersData.length; i++) {
			var marker = new google.maps.Marker({
		        position: {lat: markersData[i].lat, lng: markersData[i].lng},
		        map: map
		        // icon: icon
		    });	
		}
    }
}

initMap();