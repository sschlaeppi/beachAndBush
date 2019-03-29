(function($) {
		
	'use strict';	
	
	// CHECK WINDOW RESIZE
	var is_windowresize = false;
	$(window).resize(function(){
		is_windowresize = true;
	});
	
	
	//INITIALIZE MAP
	function initialize() {
		
		
		// Create an array of styles.
  		var styles = [
    		{
      			stylers: [
        			{ hue: "#f08080" },
        			{ saturation: -50 }
      			]
    		},{
      			featureType: "road",
      			elementType: "geometry",
      			stylers: [
        			{ lightness: 100 },
        			{ visibility: "simplified" }
      			]
    		},{
      			featureType: "road",
      			elementType: "labels",
      			stylers: [
        			{ visibility: "off" }
      			]
    		}
  		];

  		// Create a new StyledMapType object, passing it the array of styles,
  		// as well as the name to be displayed on the map type control.
  		var styledMap = new google.maps.StyledMapType(styles,
   			{name: "Styled Map"});

		
		//DEFINE MAP OPTIONS
		//=======================================================================================
  		var mapOptions = {
    		zoom: 5,		
			mapTypeId: google.maps.MapTypeId.ROADMAP,	
    		center: new google.maps.LatLng(-16.260399, 39.879545),
  			zoomControl: true,
  			mapTypeControl: true,
  			//scaleControl: false,
  			streetViewControl: true,
  			overviewMapControl: true,
			//rotateControl:true,
			scrollwheel: false,
			
  		};

		//CREATE NEW MAP
		//=======================================================================================
  		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
		
		//Associate the styled map with the MapTypeId and set it to display.
 		 map.mapTypes.set('map_style', styledMap);
 		 map.setMapTypeId('map_style');
		
		//MARKER ICON
		//=======================================================================================
		//var image = 'facebook30.svg';
		
		//ADD NEW MARKER
		//=======================================================================================
  		/*var marker = new google.maps.Marker({
    		position: map.getCenter(),
   		 	map: map,
    		title: 'Click to zoom',
			icon: image
  		});
		
		var marker1 = new google.maps.Marker({
    		position: new google.maps.LatLng(-12.042559, -77.027426),
   		 	map: map,
    		title: 'Click to zoom'
  		});*/
		
		
		//ADD NEW MARKER WITH LABEL
		//=======================================================================================
		// var marker1 = new MarkerWithLabel({
       	// 	position: new google.maps.LatLng(-17.931012, 25.829519),
       	// 	draggable: false,
       	// 	raiseOnDrag: false,
       	// 	icon: ' ',
       	// 	map: map, 
        //  	labelContent: '<div id="wedding-marker" class="main-icon-wrapper"><div class="big-circle scale-animation"></div><div class="main-icon-text">Wedding</br>Location</div></div>',
       	// 	labelAnchor: new google.maps.Point(90, 90),
       	// 	labelClass: "labels" // the CSS class for the label
     	// 	});
    
		var marker2 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-17.931012, 25.829519),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="taxi-marker" class="de-icon circle small-size animation fadeIn" style="background-color:rgba(255, 255, 255, 0.8); color:#333333; font-size:24px;"><i class="de-icon-location-1"></i></div>',
       		labelAnchor: new google.maps.Point(35, 35),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		var marker3 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-17.793967, 25.232481),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="restaurant-marker" class="de-icon circle small-size animation fadeIn" style="background-color:rgba(255, 255, 255, 0.8); color:#333333; font-size:24px;"><i class="de-icon-location-1"></i></div>',
       		labelAnchor: new google.maps.Point(35, 35),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		var marker4 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-18.922013, 22.774572),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="shop-marker" class="de-icon circle small-size animation fadeIn" style="background-color:rgba(255, 255, 255, 0.8); color:#333333; font-size:24px;"><i class="de-icon-location-1"></i></div>',
       		labelAnchor: new google.maps.Point(35, 35),
       		labelClass: "labels" // the CSS class for the label
     		});
			
		var marker5 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-26.092536, 28.269839),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="park-marker" class="de-icon circle small-size animation fadeIn" style="background-color:rgba(255, 255, 255, 0.8); color:#333333; font-size:24px;"><i class="de-icon-location-1"></i></div>',
       		labelAnchor: new google.maps.Point(35, 35),
       		labelClass: "labels" // the CSS class for the label
     		});	
		
		var marker6 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-4.747089, 55.515515),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="toy-marker" class="de-icon circle small-size animation fadeIn" style="background-color:rgba(255, 255, 255, 0.8); color:#333333; font-size:24px;"><i class="de-icon-location-1"></i></div>',
       		labelAnchor: new google.maps.Point(35, 35),
       		labelClass: "labels" // the CSS class for the label
     		});	
			
		var marker7 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-4.310205, 55.736275),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="coffee-marker" class="de-icon circle small-size animation fadeIn" style="background-color:rgba(255, 255, 255, 0.8); color:#333333; font-size:24px;"><i class="de-icon-location-1"></i></div>',
       		labelAnchor: new google.maps.Point(35, 35),
       		labelClass: "labels" // the CSS class for the label
     		});			

		var marker8 = new MarkerWithLabel({
       		position: new google.maps.LatLng(-4.345116, 55.830303),
       		draggable: false,
       		raiseOnDrag: false,
       		icon: ' ',
       		map: map, 
         	labelContent: '<div id="coffee-marker" class="de-icon circle small-size animation fadeIn" style="background-color:rgba(255, 255, 255, 0.8); color:#333333; font-size:24px;"><i class="de-icon-location-1"></i></div>',
       		labelAnchor: new google.maps.Point(35, 35),
       		labelClass: "labels" // the CSS class for the label
     		});
			 //marker.setMap( map );
		
		
		//INFO WINDOWS
		//=======================================================================================
		// var contentString1 = ''+
		// '<div class="info-window-wrapper">'+
		// 	'<h5>Wedding Ceremony</h5>'+
		// 	'<div class="info-window-desc">Lorem ipsum dolor sit amet, consectetur.<br/><a href="#" class="with-underline">Click Here</a></div>'+
      	// '</div>';
		
		var contentString2 = ''+
		'<div class="info-window-wrapper">'+
			'<h5>Victoria Falls</h5>'+
			'<div class="info-window-desc">Cresta Sprayview Hotel</div>'+
      	'</div>';
		
		var contentString3 = ''+
		'<div class="info-window-wrapper">'+
			'<h5>Chobe Nationalpark River Front</h5>'+
			'<div class="info-window-desc">River View Lodge</div>'+
      	'</div>';
		
		var contentString4 = ''+
		'<div class="info-window-wrapper">'+
			'<h5>Okavango Delta</h5>'+
			'<div class="info-window-desc">Bushman Plains Camp</div>'+
      	'</div>';
		
		var contentString5 = ''+
		'<div class="info-window-wrapper">'+
			'<h5>Johannesburg</h5>'+
			'<div class="info-window-desc">Safari Club SA</div>'+
      	'</div>';
		
		var contentString6 = ''+
		'<div class="info-window-wrapper">'+
			'<h5>Mahe Island</h5>'+
			'<div class="info-window-desc">Le Nautique Luxury Beachfront Apartments</div>'+
      	'</div>';
		
		var contentString7 = ''+
		'<div class="info-window-wrapper">'+
			'<h5>Praslin Island</h5>'+
			'<div class="info-window-desc">Le Domaine De La Reserve</div>'+
		  '</div>';

		var contentString8 = ''+
		'<div class="info-window-wrapper">'+
			'<h5>La Digue Island</h5>'+
			'<div class="info-window-desc">Le Domaine De l\'Orangeraie</div>'+
		  '</div>';


 	 	// var marker1_infowindow = new google.maps.InfoWindow({
      	// 	content: contentString1,
		// 	maxWidth: 300,
		// 	pixelOffset: new google.maps.Size(0,-50)
  		// });		
		
		var marker2_infowindow = new google.maps.InfoWindow({
      		content: contentString2,
			maxWidth: 300,
			pixelOffset: new google.maps.Size(0,0)
  		});	
		
		var marker3_infowindow = new google.maps.InfoWindow({
      		content: contentString3,
			maxWidth: 300,
			pixelOffset: new google.maps.Size(0,0)
  		});	
		
		var marker4_infowindow = new google.maps.InfoWindow({
      		content: contentString4,
			maxWidth: 300,
			pixelOffset: new google.maps.Size(0,0)
  		});	
		
		var marker5_infowindow = new google.maps.InfoWindow({
      		content: contentString5,
			maxWidth: 300,
			pixelOffset: new google.maps.Size(0,0)
  		});	
		
		var marker6_infowindow = new google.maps.InfoWindow({
      		content: contentString6,
			maxWidth: 300,
			pixelOffset: new google.maps.Size(0,0)
  		});	
		
		var marker7_infowindow = new google.maps.InfoWindow({
      		content: contentString7,
			maxWidth: 300,
			pixelOffset: new google.maps.Size(0,0)
  		});		

		  var marker8_infowindow = new google.maps.InfoWindow({
			content: contentString8,
		  maxWidth: 300,
		  pixelOffset: new google.maps.Size(0,0)
		});			  
		
		
		//OPEN INFO WINDOWS ON LOAD
		//=======================================================================================
  		//marker1_infowindow.open(map,marker1);
		

		//ON MARKER CLICK EVENTS
		//=======================================================================================		
		//google.maps.event.addListener(marker1, 'click', function() {
		//	marker1_infowindow.open(map,marker1);		
  		//});
		
		google.maps.event.addListener(marker2, 'click', function() {   	 	
			marker2_infowindow.open(map,marker2);
  		});	
		
		google.maps.event.addListener(marker3, 'click', function() {   	 	
			marker3_infowindow.open(map,marker3);
  		});
		
		google.maps.event.addListener(marker4, 'click', function() {   	 	
			marker4_infowindow.open(map,marker4);
  		});
		
		google.maps.event.addListener(marker5, 'click', function() {   	 	
			marker5_infowindow.open(map,marker5);
  		});
		
		google.maps.event.addListener(marker6, 'click', function() {   	 	
			marker6_infowindow.open(map,marker6);
  		});
		
		google.maps.event.addListener(marker7, 'click', function() {   	 	
			marker7_infowindow.open(map,marker7);
  		});
		
		google.maps.event.addListener(marker8, 'click', function() {   	 	
			marker8_infowindow.open(map,marker8);
  		});		
		
		//ON INFO WINDOW CLOSE CLICK EVENTS
		//=======================================================================================	
		google.maps.event.addListener(marker3_infowindow, 'closeclick', function() {   	 	
			window.setTimeout(function() {
      			map.panTo(marker1.getPosition());
    		}, 500);
  		});
		
		
		//ON BOUND EVENTS AND WINDOW RESIZE
		//=======================================================================================
		google.maps.event.addListener(map, 'bounds_changed', function() {  		
			if (is_windowresize)
			{
				//map.setCenter(marker.getPosition());
				window.setTimeout(function() {
      				map.panTo(marker1.getPosition());
    			}, 500);
			}
			is_windowresize=false;
		});
	}

	// LOAD GMAP
	google.maps.event.addDomListener(window, 'load', initialize);	
	
})(jQuery);