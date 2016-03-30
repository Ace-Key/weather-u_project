$(document).ready(function(){
	var w1=$("#img_1");
	var w2=$("#img_2");
	var w3=$("#img_3");
	var btn = $(".btn");
	var w4=$("#img_4");
	var drop=$(".drop");
	var cycle=$("");
	var carousel=$(".main-carousel")
/* 	var slide_1=$("#slider_1");
	var slide_2=$("#slider_2");
	var slide_3=$("#slider_3");
	var slide_4=$("#slider_4");
	var amt_1=$("#amt_2");
	var amt_2=$("#amt_2");
	var amt_3=$("#amt_3");
	var amt_4=$("#amt_4");
	
	slide_1.slider({
      value:0,
      min: 0,
      max: 5,
      step: 1,
      slide: function( event, ui ) {
        amt_1.val( "Number:" + ui.value );
      }
    });
    amt_1.val( "Number:" + slide_4.slider( "value" ) ); */
	
	/* slide_2.slider({
      value:0,
      min: 0,
      max: 5,
      step: 1,
      slide: function( event, ui ) {
      amt_2.val( "Number:" + ui.value );
      }
    });
    amt_2.val( "Number:" + slide_4.slider( "value" ) );
	
	slide_3.slider({
      value:0,
      min: 0,
      max: 5,
      step: 1,
      slide: function( event, ui ) {
     amt_3.val( "Number:" + ui.value );
      }
    });
    amt_3.val( "Number:" + slide_4.slider( "value" ) );
	
	slide_4.slider({
      value:0,
      min: 0,
      max: 5,
      step: 1,
      slide: function( event, ui ) {
        amt_4.val( "Number:" + ui.value );
      }
    });
    amt_4.val( "Number:" + slide_4.slider( "value" ) ); */
  
	
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