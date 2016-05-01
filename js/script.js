$(document).ready(function(){
	var w1 = $('#img_1'); var w2 = $('#img_2');	var w3 = $('#img_3'); var w4 = $('#img_4');
	var cur = $('#w_img');var btn = $('.btn');var drop = $('.drop');var cw = $('#cw');
	var li1 =$('#li1');	var li2 =$('#li2');
    var geo1 = $('#geo1');var geo2 = $('#geo2');var geo3 = $('#geo3');
	var o1 = $('#o1'); var o2 = $('#o2');
	var wc1 = $('#wc1');var wc2 = $('#wc2');var wc3 = $('#wc3');var wc4 = $('#wc4');
    var ce = $('#cE');	var c2 = $('#c2');	var c4 = $('#c4');
	
    	

	cur.resizable().draggable();
//slide function for selectors	
	btn.click(function(){
        drop.slideToggle("slow");
				
    });
//light sensor api	
	window.addEventListener('devicelight', function(event) {
			
       var val = event.value;	
       var dis;	   
       if (val < 50) {
         // dark or dim
		  li1.html("Your in a dim or dark lighting environment:");
		  li2.html(val + " lux");
		} 
	   else {
		 // bright or light
		  li1.html("Your in a bright lighting environment:");
		  li2.html(val+ " lux");
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
  
  function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
 	
    o1.html("Moving Left/Right by: "+x+" ms/2");	
	o2.html("Moving Forward/Back by: "+y+" ms/2");
	o3.html("Moving Up or Down by: "+z+" ms/2");
    
	/* console.log('Rotation on the x-axis:'+x+'ms/2');
	console.log('Rotation on y-axis'+y+'ms/2');
	console.log('Rotation on z-axis'+z+'ms/2'); */
	window.addEventListener("devicemotion", handleMotionEvent, true);
  }




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
      //cw.html(html);
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