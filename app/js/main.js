$(document).ready(function() {
/**/
	$('.h-nav__item').hover(function() {
		$(this).addClass('h-nav__item-active');
		$(this).children('.h-nav__sub').stop(true, false).slideDown();
	}, function() {
		$(this).removeClass('h-nav__item-active');
		$(this).children('.h-nav__sub').stop(true, false).slideUp();
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
});