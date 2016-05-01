$(document).ready(function(){
	var w1 = $('#img_1'); var w2 = $('#img_2');	var w3 = $('#img_3'); var w4 = $('#img_4');
	var cur = $('#w_img');var btn = $('.btn');var drop = $('.drop');var cw = $('#cw');
	var li1 =$('#li1');	var li2 =$('#li2');
    var geo1 = $('#geo1');var geo2 = $('#geo2');var geo3 = $('#geo3');
	var o1 = $('#o1'); var o2 = $('#o2'); var o3 = $('#o3');
	var wc1 = $('#wc1');var wc2 = $('#wc2');var wc3 = $('#wc3');var wc4 = $('#wc4');
    var ce = $('#cE');	var c2 = $('#c2');	var c4 = $('#c4');
	var s1 = $('#s1'); var s2 = $('#s2'); var s3 = $('#s3'); var s4 = $('#s4');
    var log = $('#log'); var sign = $('#sign');	var logm = $('#logm'); var signm = $('#signm');

	cur.resizable().draggable();
//slide function for selectors	
	btn.click(function(){
        drop.slideToggle("slow");
				
    });
//modal initialisation
log.click(function() {
	logm.modal('show');
});	

sign.click(function() {
	signm.modal('show');
});	
	
//light sensor api	
	window.addEventListener('devicelight', function(event) {
			
       var val = event.value;	
       var dis;	   
       if (val < 50) {
         // dark or dim
		  li1.html("You're in a dimly lit environment (outside or inside):");
		  li2.html(val + " lx");
		} 
	   else if (val < 100) {
		 // indoors or outside in low light
		  li1.html("You're either outside (sunset) or inside a building (low light):");
		  li2.html(val+ " lx");
		}
		else if (val < 2000) {
		 // cloudy
		  li1.html("Must be cloudy or you're in a brightly lit building:");
		  li2.html(val+ " lx");
		}
		else if (val < 10000) {
		 // some cloud cover
		  li1.html("You're probably outside in a partially cloudy day:");
		  li2.html(val+ " lx");
		}
		else if (val < 25000) {
		 // hazy day
		  li1.html("You're outside in a sunny day:");
		  li2.html(val+ " lx");
		}
		else if (val < 100000) {
		 // bright sunny day
		  li1.html("You're outside in a very bright sunny day:");
		  li2.html(val+ " lx");
		}
     		
    	 
	});
	
//geolocation api

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  geo1.html("Latitude: " + crd.latitude);
  geo2.html("Longitude: " + crd.longitude);
  geo3.html("Accuracy of this is about " + crd.accuracy + " metres");

};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);
	
//device orientation api	
  
/* function handleMotionEvent(event) {

    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;
	var x1 = event.accelerationIncludingGravity.x;
    var y1 = event.accelerationIncludingGravity.y;
    var z1 = event.accelerationIncludingGravity.z;
	
 	
    o1.html("Moving Left/Right by: "+x1+" ms/2");	
	o2.html("Moving Forward/Back by: "+y1+" ms/2");
	o3.html("Moving Up or Down by: "+z1+" ms/2");

	window.addEventListener("devicemotion", handleMotionEvent, true);
  }*/
window.addEventListener('devicemotion', function(event) {
    var x = event.acceleration.x;
    var y = event.acceleration.y;
    var z = event.acceleration.z;
	var x1 = event.accelerationIncludingGravity.x;
    var y1 = event.accelerationIncludingGravity.y;
    var z1 = event.accelerationIncludingGravity.z;
	
    o1.html("Moving Left/Right by: "+x1+" ms/2");	
	o2.html("Moving Forward/Back by: "+y1+" ms/2");
	o3.html("Moving Up or Down by: "+z1+" ms/2");
});

//weather api
	
	$.simpleWeather({
    location: 'Wellington, NZ',
    woeid: '',
    unit: 'c',
    success: function(weather) {
  /*     html = '<h2 '+weather.code+'>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul style="list-style-type: none; line-height: 1.5;"><li>'+weather.city+', '+weather.country+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
	  html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>'; */
	  
      wc1.html(+weather.temp+'&deg;'+weather.units.temp);
      wc2.html("Location: " +weather.city+', '+weather.country);
      wc3.html("Current Weather: "+weather.currently);
	  wc4.html("Wind: " +weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed);
      
    },
    error: function(error) {
      cw.html('<p>'+error+'</p>');
    }
	});
	
/* 	carousel.flickity({
		cellAlign: 'left';
		wrapAround: true;
		contain: true;
		
	}); */

});	
