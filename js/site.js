/**************************************************
		
  		 Desenvolvido por Gabriel da Luz 
		
		 http://gabrieldaluz.com.br/
	
***************************************************/


/** Jquery Function */
$(function() { 

  	/* LOAD PAGE :D */
	window.onload = function () {
	
	 	fixAutoFirstSectionHeight();
	
	}
	
	/* Em caso da tela mudar de tamanho.. acionar esse evento! */
	$(window).resize(function() {

		/* Fix Auto Height first section do site */
		fixAutoFirstSectionHeight();

		    if($(window).width() >= 576) {

		    	$('nav.menu').prop('style',' ');

		    }
	
	});
	
	/* Função criada para setar height da imagem igual da tela do cliente */
	function fixAutoFirstSectionHeight() {
		$("section.slider .owl-item img").css('height', $(window).height());
	}


	setTimeout(function() {
		/* ♥ MenuParalax7 ♥ By Gabriel A. Barbosa */
		$("header").menuParalax7({ debug: false, mySelectorSection: 'section' });
	 },1000);

	/* NAV Menu mouse hover open menus e submenus */

	/* Open nav.menu > .menu-mobile * Only mobile responsive */
	$(".menu-mobile i, .menu-mobile span").on('click', function(){
		$("nav.menu").stop().slideToggle(500);
	});

	
	
	/* Adiciona Efeitos aos elementos com class .module conforme vai rolando a pagina ! */
    var win = $(window); var allMods = $(".module"); allMods.each(function(i, el) {   var el = $(el);   if (el.visible(true)) {     el.addClass("already-visible");   } });
	win.scroll(function(event) {     allMods.each(function(i, el) {     var el = $(el);     if (el.visible(true)) {       el.addClass("come-in");     }   });   });


	/* Slider */
	if($("section.slider .owl-carousel").length) { 
		$("section.slider .owl-carousel").owlCarousel({
			items: 1,
			loop:true,
			autoplay:true,
			nav: false,
			navText: ['<img src="img/icons/arrow-left-slide.png" />', '<img src="img/icons/arrow-right-slide.png" />'],
			autoplayTimeout:6000,
			dots: true,
			animateIn: 'fadeIn', // add this
			animateOut: 'fadeOut' // and this
		});
	}


	/* Cursos */
	if($("section.cursos .owl-carousel").length) { 
		$("section.cursos .owl-carousel").owlCarousel({
			items: 3,
			loop:false,
			autoplay:false,
			margin: 50,
			nav: false,
			navText: ['<img src="img/icons/arrow-left-slide2.png" />', '<img src="img/icons/arrow-right-slide2.png" />'],
			autoplayTimeout:6000,
			dots: true,
			 responsive:{
		        0:{
		            items:1
		        },
		        768: {
		        	items:2
		        },
		        990: { 
		        	items:3
		        },
		        1200: { 
		        	items:3
		        }
		    }
		});

	}


});

/* Examples */

	
	/* NAV Menu mouse hover open menus e submenus */

	/* Open nav.menu > .menu-mobile * Only mobile responsive */
	/*$("nav.menu > .menu-mobile").on('click', function(){
		// verifica se submenu esta aberto ou fechado.. 
		var isOpen = $(this).parent().find('ul').eq(0).hasClass('showing');
		if(!isOpen) {  
			$(this).parent().find('ul').eq(0).stop().slideDown(500).addClass('showing');
		} else { 
			$(this).parent().find('ul').eq(0).stop().slideUp(500).removeClass('showing');
		}
		console.log('isOpen '+isOpen);
	});

	if ($(window).width() > 585) { 
		//Open Submenu Event 
		$("li.tem-submenu > a").mouseenter(function(){
			$(this).parent().find('ul').eq(0).stop().slideDown(500);
		});
		//Close Submenu Event
		$("li.tem-submenu").mouseleave(function(){
			$(this).find('ul').stop().slideUp(500);
		});
	} else { 
		//Open Submenu Event
		$("li.tem-submenu > a").on('click',function(){			
			//verifica se submenu esta aberto ou fechado..
			var isOpen = $(this).parent().find('ul').eq(0).hasClass('showing');
			if(!isOpen) { 
				$(this).parent().find('ul').eq(0).stop().slideDown(500).addClass('showing');
			} else { 
				$(this).parent().find('ul').eq(0).stop().slideUp(500).removeClass('showing');
			}
			console.log('isOpen '+isOpen);
		});
		//Close All Submenus Event 
		$("header div.middle nav.menu > ul > li:not(.tem-submenu)").on('click',function(){
			$("li.tem-submenu").find('ul').stop().slideUp(500);
		});
	}
	*/

	
	/* Form file hidden upload */
	/*if($('.formPeruca #anexarArquivos').length) { 

		$('.formPeruca #anexarArquivos').on('click', function() { 
			$('.formPeruca form input[type=file]').click();
		});
		
		$('.formPeruca form input[type=file]').on('change',function() { 
			$('.formPeruca #anexarArquivos').html('ARQUIVO SELECIONADO!').css('background','#51bd3d');
		});
	}*/


	/* OwlCarrousel Examples*/
	/* Slider Single Carrousel */
	/*if($("section.slider .owl-carousel").length) { 
		$("section.slider .owl-carousel").owlCarousel({
			items: 1,
			loop:true,
			autoplay:true,
			nav: true,
			navText: ['<img src="img/icons/arrow-left-slide.png" />', '<img src="img/icons/arrow-right-slide.png" />'],
			autoplayTimeout:6000,
			dots: false
		});
	}*/

	/* Noticias Single Slider Carrousel */
	/*if($(".owlNoticias .owl-carousel").length) { 
		$(".owlNoticias .owl-carousel").owlCarousel({
			items: 1,
			loop:true,
			autoplay:true,
			nav: true,
			navText: ['<img src="img/icons/arrow-left-slide2.png" />', '<img src="img/icons/arrow-right-slide2.png" />'],
			autoplayTimeout:6000,
			dots: true,
			animateIn: 'fadeIn', // add this
			animateOut: 'fadeOut' // and this
		});
	}*/	

	/* Home Parceiros Logo Slider Carrousel */
	/*if($(".homeParceiros .owl-carousel").length) { 
		$(".homeParceiros .owl-carousel").owlCarousel({
			items: 6,
			loop:false,
			autoplay:true,
			margin: 30,
			nav: false,
			navText: ['<img src="img/icons/arrow-left-slide2.png" />', '<img src="img/icons/arrow-right-slide2.png" />'],
			autoplayTimeout:6000,
			dots: true,
			 responsive:{
		        0:{
		            items:2
		        },
		        767: {
		        	items:4
		        },
		        989: { 
		        	items:6
		        }
		    }
		});
	}*/



/***************************************************
*** Não remova os créditos pq eu vou saber! Õ_Õ. ***
****************************************************/
console.log(' ');
console.log('%c~~ Desenvolvido por http://gabrieldaluz.com.br ~~ ','background:black;color:#00ff08; padding:6px 10px; margin:0px; border:4px solid gray; font-size:14px;');
console.log(' ');
