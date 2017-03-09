$(document).ready(function() {
/**/
	$('.h-nav__item').hover(function() {
		$(this).addClass('h-nav__item-active');
		$(this).children('.h-nav__sub').stop(true, false).slideDown();
	}, function() {
		$(this).removeClass('h-nav__item-active');
		$(this).children('.h-nav__sub').stop(true, false).slideUp();
	});
});