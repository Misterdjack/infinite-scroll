

var appendItem = function (data) {
	var item = $('<li>');
	$('#container-list').append(item);
};

$(window).on('scroll', function scrollHandler() {
		var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
		// var distanceFromTop = $(document).height() - $(window).scrollTop();
		if(scrollBottom < $(window).height()) {
			var lastItemEl = $('.item:last');
			console.log(lastItemEl);
			appendItem(lastItemEl);
		}
		// else if (distanceFromTop < $(window).height()) {
		// 	var firstItemEl = $('.item:first');
		// 	prependItem(firstItemEl);
		// }
});



// $(document).on('ready', function() {
  
// });