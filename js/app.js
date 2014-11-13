$( document ).ready(function() {
  console.log( "ready!" );
    
  $(document).foundation();

  $(function() {
    var BV = new $.BigVideo();
    BV.init();
    BV.show('videos/bg_vid.mp4',{ambient:true});
	});

	$('#logo-container').hover(function(){
		console.log('hover, clickity click');
	})
});
	