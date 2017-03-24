$(document).ready(function() {
/**/
	$('.h-nav__item').hover(function() {
		$(this).addClass('h-nav__item-hover');
		$(this).children('.h-nav__sub').stop(true, false).slideDown();
	}, function() {
		$(this).removeClass('h-nav__item-hover');
		$(this).children('.h-nav__sub').stop(true, false).slideUp();
	});

/**/
	$('.rproj-slider__img').on('click', function() {
		$('.call-popup-bg').fadeIn();
		$('.bestseller__popup').addClass('bestseller__show');
	});

/**/
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0)
				$('.button-up__wp').fadeIn(300);
			else
			$('.button-up__wp').fadeOut(300);
		});
	});
	$('.button-up').on('click', function() {
		$('html, body').animate({scrollTop:0}, 'slow');
	});

/**/
	$('.h-nav__mob-button').on('click', function() {
		$('.header__h-nav').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.header__h-nav').length) return;
				$('.header__h-nav').slideUp();
				event.stopPropagation();
			});
		return false;
	});

/**/
	$('.card__cement-item').on('click', function() {
		$('.card__cement-item').removeClass('card__cement-item-active');
		$(this).addClass('card__cement-item-active');
	});

/**/
	$('.mob-sidebar__button').on('click', function() {
		$('.sidebar').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.sidebar').length) return;
				$('.sidebar').slideUp();
				event.stopPropagation();
			});
		return false;
	});
/**/
	$('.card__c-color-item span').on('click', function() {
		var color = $(this).text();
		$('.card__c-color-item span').removeClass('active');
		$(this).addClass('active');
		$('.card__c-color-name').text(color);
	});

/**/
	if (document.body.clientWidth>991) {
		var ht = $('.ht').height();
		$('.sidebar').height(ht);
	}
	if (document.body.clientWidth>991) {
	$(window).scroll(function(){
		var windowScroll = $(window).scrollTop();
		var ht = $('.header__top').height();
		if(windowScroll > ht) {
				$(".header__bottom").addClass("topMenu");
			} else {
				$(".header__bottom").removeClass("topMenu");
			}
		});
	}

/**/
	$('.h-phone__callback a').on('click', function() {
		$('.call-popup-bg').fadeIn();
		$('.call-popup-wp').fadeIn();
		return false;
	});
	$('.call-popup-bg').on('click', function() {
		$('.call-popup-wp').fadeOut();
		$('.zakaz-popup-wp').fadeOut();
		$('.call-popup-bg').fadeOut();
		$('.bestseller__popup').removeClass('bestseller__show');
	});
	$('.call-popup__close').on('click', function() {
		$('.call-popup-wp').fadeOut();
		$('.zakaz-popup-wp').fadeOut();
		$('.call-popup-bg').fadeOut();
	});

/**/
	$('.hit-prod__bottom-right-bt').on('click', function() {
		$('.call-popup-bg').fadeIn();
		$('.zakaz-popup-wp').fadeIn();
		return false;
	});

/**/
	$('.call-popup__input-phone').mask("(999) 999-9999");
	$('.formCont__input').mask("(999) 999-9999");
});