$(document).ready(function() {
    $('#showHide').click(function() {
            $('.ShowHide').slideToggle("slide");
    });
});
			  $(document).ready(function() {
    $('#showHide1').click(function() {
            $('.ShowHide1').slideToggle("slide");
    });
});
			  $(document).ready(function() {
    $('#showHide2').click(function() {
            $('.ShowHide2').slideToggle("slide");
    });
});
			  
			  $(document).ready(function() {
    $('#showHide3').click(function() {
            $('.ShowHide3').slideToggle("slide");
    });
});



$(document).ready(function(){
	var offset=350;
	var duration=1000;
	
	$(window).scroll(function(){
		if($(this).scrollTop() > offset){
			$('.to-top').fadeIn(duration);
		}
		else{
			$('.to-top').fadeOut(duration);
		}
	});
	
	
	
	
});