$(document).ready(function(){
	var w1 = $('#img_1');
	var w2 = $('#img_2');
	var w3 = $('#img_3');
	var w4 = $('#img_4');
	var cur = $('#w_img');
	var btn = $('.btn');
	var drop = $('.drop');
	
	
    
	/* var carousel=$(".main-carousel"); */
	
  	w1.resizable();
	w2.resizable();
	w3.resizable();
	w4.resizable();
	cur.resizable().draggable();
	
	
	btn.click(function(){
        drop.slideToggle("slow");
				
    });
	
/* 	carousel.flickity({
		cellAlign: 'left';
		wrapAround: true;
		contain: true;
		
	}); */

});		
