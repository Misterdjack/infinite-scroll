

var freebird = function(e){
	e.preventDefault();

  	$('#myModal').modal('show');

  	var selectedItem = $(this).closest('.item');
  	var selectedImage = selectedItem.attr('data-html');
  	$('.modal-body').html(selectedImage);
};

// jQuery event listeners
$(document).on('ready', function(){

	// Global variables
	var containerContents = $(".container").html();
	var container = '<div class="container">' + containerContents + '</div>';

	$(window).on('scroll', function() {
		var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

		if (scrollBottom == 0 ) {
			$(".container").last().after(container);
			if ($(".container").length > 3) {
				$(".container").first().remove();
				$(window).scrollTop($(".container").height());
			}
		}
		else if ( $(window).scrollTop() == 0 ) {
			$(".container").first().before(container);
			$(window).scrollTop($(".container").height());
			if ($(".container").length > 3) {
				$(".container").last().remove();
			}
		}    
	});

	// Launch modal
	$(document).on('click', '.item', freebird);


});	
