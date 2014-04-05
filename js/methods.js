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
	$("#b11").click(function(){
		$("#p5").wrap("<div class='pinky'></div>  ");
	});
		 
	//addClass
	$("#b12").click(function(){
		$("#p5").addClass("pinky  ");
	});
		 
	//clone
	$("#b13").click(function(){
		$("li").clone().appendTo("ul");

	});
		 
	//fadeOut
	$("#b14").click(function(){
		$("#p6").fadeOut(1000);
	});
		 
	//fadeIn
	$("#b15").click(function(){
		$("#p6").fadeIn(1000);
	});
		  
	//fadeToggle
	$("#b16").click(function(){
		$("#p6").toggle(1000);
	});
		  
	//slideUp
	$("#b17").click(function(){
		$(".box-content").slideUp(1000);
	});
		 
	//slideDown
	$("#b18").click(function(){
		$(".box-content").slideDown(1000);
	})

	 //slideToggle
	 $(".box-header").click(function(){
	 	$(".box-content").slideToggle(1000);
	 })
		  
	//animate
	$("#b19").click(function(){
		$(".box-animate").animate( {height:"200px"}, 500);
	});
		 
});