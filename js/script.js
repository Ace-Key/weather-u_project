$(document).ready(function(){
	var w1=$("#img_1");
	var w2=$("#img_2");
	var w3=$("#img_3");
	var btn = $(".btn");
	var w4=$("#img_4");
	var drop=$(".drop");
	
	var carousel=$(".main-carousel")

    
        carousel.flickity({
		cellAlign: 'left';
		wrapAround: true;
		contain: true;
		
	});
	w1.draggable();
	w2.draggable();
	w3.draggable();
	w4.draggable();
	
	btn.click(function(){
        drop.slideToggle("slow");
				
    });
});	
