// initialize jQuery command after all page elements load
	    			
$(function(){

//go to: http://api.jquery.com to read about each of the methods below and then set the apropriate button to apply the method to the content below it.

	//hide
	$("#b1").click(function(){
		$("#p1").hide(1000);
	});
		
	//show
	$("#b2").click(function(){
		$("#p1").show(1000);
	});
				
	//toggle
	
	$("#b3").click(function(){
		$("#p1").toggle(1000);
	});
		
	//css
	
	$("#b4").click(function(){
		$("#p2").css("background-color", "#99CCCC");
	});

	//css (multiple property changes)

	$("#b5").click(function(){
		$("#p2").css( {"background-color": "#99CCCC", "font-weight": "bold", "color": "#fff", "padding": "5px" } );
	});

	//html
	$("#b6").click(function(){
		$("#p3").html("I don't get the purpose??");
	});
	
		
	//prepend
	$("#b7").click(function(){
		$("#p3").prepend("<strong> Wassup!</strong>  ");
	});
	
	//append
	$("#b8").click(function(){
		$("#p3").append("<strong> See ya!</strong>  ");
	});
		 
	//before
	$("#b9").click(function(){
		$("#p4").before("<h1> This is cool </h1>  ");
	});
		 
	//after
	$("#b10").click(function(){
		$("#p4").after("<h1> Don't really understand why it's done this way </h1>  ");
	});
	
		 
	//wrap
	
		 
	//addClass
	
		 
	//clone
	
		 
	//fadeOut
	
		 
	//fadeIn
	
		  
	//fadeToggle
	
		  
	//slideUp
	
		 
	//slideDown
	

	 //slideToggle
	 
		  
	//animate
	
		 
});