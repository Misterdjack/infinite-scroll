

var appendItem = function (data) {
	var item = $('div').append(data);
	$('.container').append(item);
	// console.log(data);
};

$(window).on('scroll', function scrollHandler() {
		var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
		// var distanceFromTop = $(document).height() - $(window).scrollTop();
		if(scrollBottom < $(window).height()) {
			var lastItemEl = $('.list').clone();
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