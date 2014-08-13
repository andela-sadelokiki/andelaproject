//code fo the menu
// $(document).ready(function(){
// 	$('.menu > li').bind('mouseover', openSubMenu);
// 		function openSubMenu(){
// 			$(this).find('menu li ul').css('visibility', 'visible');
// 		};
// });


$(function(){

    $("ul.menu li").hover(function(){
    
        //$(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        //$(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    //$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});

$(document).ready(function(){
	$('.submit').hover(function(){
		$(this).fadeOut(2000);

	});

});