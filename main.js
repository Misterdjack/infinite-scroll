///////////////////////
// Client Side Logic //
///////////////////////

// Global variables for tests
var containers = $('.container').length
// console.log(containers);
// var scrollHandler;


// Modal helper function, finds appropriate image
var freebird = function(e){
	e.preventDefault();
	// Show hidden modal
  	$('#myModal').modal('show');

  	// find image data on clicked item and render in modal
  	var selectedItem = $(this).closest('.item');
  	var selectedImage = selectedItem.attr('data-html');
  	$('.modal-body').html(selectedImage);
  	console.log(selectedImage);

};

// Global variables for scrollHandler
var containerContents = $(".container").html();
var container = '<div class="container">' + containerContents + '</div>';

// Scroll event
var	scrollHandler = function ()	{		
				
	$(window).on('scroll', function() {
		var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();

		// adds another container to the bottom and removes one from the top
		if (scrollBottom == 0 ) {
			$(".container").last().after(container);
			if ($(".container").length > 3) {
				$(".container").first().remove();
				$(window).scrollTop($(".container").height());
			}
		}
		// 
		// adds another container to the top and removes one from the bottom
		else if ( $(window).scrollTop() == 0 ) {
			$(".container").first().before(container);
			$(window).scrollTop($(".container").height());
			if ($(".container").length > 3) {
				$(".container").last().remove();
			}
		}    
	});
};

// jQuery event listeners
$(document).on('ready', function(){


	scrollHandler();
	// Launch modal
	$(document).on('click', '.item', freebird);

});	

