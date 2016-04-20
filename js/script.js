$(document).ready(function(){
	var w1 = $('#img_1');
	var w2 = $('#img_2');
	var w3 = $('#img_3');
	var w4 = $('#img_4');
	var cur = $('#w_img');
	var btn = $('.btn');
	var drop = $('.drop');
	var cw = $('.cw');    
	/* var carousel=$(".main-carousel"); */
	
  	/* w1.resizable();
	w2.resizable();
	w3.resizable();
	w4.resizable(); */
	cur.resizable().draggable();
	btn.click(function(){
        drop.slideToggle("slow");
				
    });
	
	$.simpleWeather({
    location: 'Wellington, NZ',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<h2 '+weather.code+'>'+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul style="list-style-type: none; line-height: 1.5;"><li>'+weather.city+', '+weather.country+'</li>';
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
