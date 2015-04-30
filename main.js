
$(window).on('scroll', function scrollHandler() {
		var distanceFromBottom = $(document).height() - $(window).scrollTop() - $(window).height()
		if(distanceFromBottom < $(window).height()) {
			var lastItemEl = $('.item:last');
			appendItem(lastItemEl);
		}
	});

$(document).on('ready', function() {
  
});