$(window).scroll(function(){
	if($('.navbar').offset().top > 50 ){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
		$('.navbar-brand').addClass('navbar-logo-small');

	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
		$('.navbar-brand').removeClass('navbar-logo-small');
	}

});


$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

(function(){
	// setup your carousels as you normally would using JS
	// or via data attributes according to the documentation
	// http://getbootstrap.com/javascript/#carousel
	$('#carousel123').carousel({ interval: 2000 });
	$('#carouselABC').carousel({ interval: 3600 });
}());


(function(){
	$('.carousel-showmanymoveone .item').each(function(){
		var itemToClone = $(this);

		for (var i=1;i<4;i++) {
			itemToClone = itemToClone.next();

			// wrap around if at end of item collection
			if (!itemToClone.length) {
				itemToClone = $(this).siblings(':first');
			}

			// grab item, clone, add marker class, add to collection
			itemToClone.children(':first-child').clone()
				.addClass("cloneditem-"+(i))
				.appendTo($(this));
		}
	});
}());