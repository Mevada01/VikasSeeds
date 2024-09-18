    // JavaScript Document

var main = function() { 
	// Push the body and the nav over by 285px over 	 
	// Menu1  default
	$('.icon-menu').click(function() {  

		$('#nav').animate({ left: "0px" }, 200);			

		$('#wrapper').animate({ left: "285px" }, 200); 

		//$('#wrapper').addClass('active-aside');

		$('.icon-menu').css({"display":"none"});	

		$('.icon-menu2').css({"display":"block"});	

	});	

	// Menu1 with active aside
	$('.icon-menu2').click(function() {   

		$('#nav').animate({ left: "-285px" }, 200);		

		$('#wrapper').animate({ left: "0px" }, 200); 

		//$('#wrapper').removeClass('active-aside');

		$('.icon-menu2').css({"display":"none"});

		$('.icon-menu').css({"display":"block"});		 

	});	  

	// Onclick Close icon push body back 
	$('.icon-close').click(function() {   

		$('#nav').animate({ left: "-285px" }, 200);		

		$('#wrapper').animate({ left: "0px" }, 200);

		//$('#wrapper').removeClass('active-aside');  

		$('.icon-menu').css({"display":"block"});

		$('.icon-menu2').css({"display":"none"});	

	});	

	// Toggle link for Header Top Aside section
	$('.toggle-top-aside').click(function() { 

		$('.top-aside-row .toggle-div').toggleClass('open');

	});		

};

$(document).ready(main);

//Fixed Header
if ($(window).width() >= 992){

$(function() {

   $(window).on("scroll", function(){

		if

      ($(window).scrollTop() > 100){

		  $("#header").addClass("shrink");

		}

		else

		{

			$("#header").removeClass("shrink");

		}

	});

});

}/*--shrink header End--*/


// Header Background Parallax Scrolling 
	if ($(window).width() >= 992){

	$(document).scroll(function () {  

	  // parallaxing

	  var $movebg = $(window).scrollTop() * -0.4;

	  $('.parallax').css('background-positionY', ($movebg) + 'px'); 

	});

}

// Parallax Scrolling Background End

//Counter

$('.counting').each(function () {

	$(this).prop('Counter',0).animate({

	Counter: $(this).text()

	}, {

	duration: 4000,

	easing: 'swing',

	step: function (now) {

	$(this).text(Math.ceil(now));

	}

	});

});

// End Counter

//select-language

function DropDown(el) {

	this.dd = el;

	this.initEvents();

}

DropDown.prototype = {

	initEvents : function() {

		var obj = this;

		obj.dd.on('click', function(event){

			$(this).toggleClass('active');

			event.stopPropagation();

		});	

	}

}

$(function() {

	var dd = new DropDown( $('#language') );

	$(document).click(function() {

		// all dropdowns

		$('.wrapper-dropdown-5').removeClass('active');

	});

});

//End select-language

//owlCarousel
$(".testimonail-slides").owlCarousel({
	margin:10,
	responsiveClass:true,
	autoplay:false,
	pagination:true,
	navigation:true,
	responsive:{
		0:{
			items:1
		},
		992:{
			items:2
		},
	}
});
//End owlCarousel

//scrolling
$(".scrolling").click(function() {
	$('html,body').animate({
	scrollTop: $(".our-crops").offset().top - 80},
	'slow');
});

//Support Tab navigation scrolling
//scrolling
$(".cotton-tab").click(function() {
    $('html,body').animate({
    scrollTop: $("#cotton").offset().top - 90},
    'slow');
});

$(".chilli-tab").click(function() {
    $('html,body').animate({
    scrollTop: $("#chilli").offset().top - 90},
    'slow');
});

$(".paddy-tab").click(function() {
    $('html,body').animate({
    scrollTop: $("#paddy").offset().top - 90},
    'slow');
});

$(".soyabean-tab").click(function() {
    $('html,body').animate({
    scrollTop: $("#soyabean").offset().top - 90},
    'slow');
});

//End scrolling
//scrollup in footer
  $(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});
$('.scrollup').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 600);
	return false;
});

/*-- Toggle Menu Start--*/
$(document).ready(function() {
  jQuery( ".has-submenu > a,.has-submenu > span").after( "<div class='expand-collapse'></div>" );						 
		jQuery('#nav li.has-submenu>div.expand-collapse').on('click', function(){
			//jQuery(this).removeAttr('href');
			//alert('hello');
			var element = jQuery(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp();
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown();
				element.siblings('li').children('ul').slideUp();
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp();
			}
		});
 		$(window).resize(function(){if(window.innerWidth>1025){$("#nav .sub-menu").removeAttr("style");}
	});

 	$( "#nav .sub-menu a" ).hover(
	  function() {
	  	$('.has-submenu > a').addClass( "selected" );
	  }, function() {
	    $('.has-submenu > a').removeClass( "selected" );
	  }
	);
 	
 });
 /*-- Toggle Menu End--*/

// disable ctr+u
	/*document.onkeydown = function(e) {
		if (event.keyCode == 123) {
			return false;
		}
		if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
			return false;
		}
		if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
			return false;
		}
		if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
			return false;
		}
	}*/ 