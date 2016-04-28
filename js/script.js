$(document).ready(function(){
	var w1 = $('#img_1');
	var w2 = $('#img_2');
	var w3 = $('#img_3');
	var w4 = $('#img_4');
	var cur = $('#w_img');
	var btn = $('.btn');
	var drop = $('.drop');
	var cw = $('.cw'); 
    var ce = $('#cE');
	var c2 = $('#c2');
	
    	
	/* var carousel=$(".main-carousel"); */
	cur.resizable().draggable();
	
	btn.click(function(){
        drop.slideToggle("slow");
				
    });
//light sensor api	
	window.addEventListener('devicelight', function(event) {
			
       var val = event.value;		
       if (val < 50) {
         // dark or dim
		  //ce.innerHTML = ('<p style="text-align: center; font-color: #fffff;">"seems like a dim or dark light"</p>');
		  ce.html('<p style="color: #ffffff; font-size: 16pt;">Dark'+val+'</p>');
		} 
	   else {
		 // bright or light
		  //ce.innerHTML = ('<p style="text-align: center; font-color: #fffff;">"seems like a dim or dark light"</p>');
		  ce.html('<p style="color: #ffffff; font-size: 16pt;">Bright'+val+'</p>');
		}
     		
     console.log(val);
	 
	});
//device orientation api	
/*   window.addEventListener("devicemotion", handleMotionEvent, true);
  function handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    var set;
    if(x>0 || x<0){
		set = '<p style="font-size: 16pt; color: #ffffff; font-weight: ;">'+x+ 'ms/2''</p>';
		c2.html(x);
	}
    if(y>0 || y<0){
		set = '<p style="font-size: 16pt; color: #ffffff; font-weight: ;">'+y+ 'ms/2''</p>';
		c2.html(y);
	}	
   if(z>0 || z<0){
	   set = '<p style="font-size: 16pt; color: #ffffff; font-weight: ;">'+z+ 'ms/2''</p>';
		c2.html(z);
	}		
    
	console.log('Rotation on the x-axis:'+x+'ms/2');
	console.log('Rotation on y-axis'+y+'ms/2');
	console.log('Rotation on z-axis'+z+'ms/2');
} */




//weather api
	
	$.simpleWeather({
    location: 'Wellington, NZ',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2 '+weather.code+'>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul style="list-style-type: none; line-height: 1.5;"><li>'+weather.city+', '+weather.country+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
	  html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      cw.html(html);
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