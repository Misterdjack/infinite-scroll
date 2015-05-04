

var freebird = function(e){
	e.preventDefault();

  	$('#myModal').modal('show');

  	var selectedItem = $(this).closest('.item').clone();
  	var selectedSrc = selectedItem.attr('data-image');
  	var selectedImage = selectedItem.html('<img class="images" src="' + selectedSrc + '">');

  	console.log(selectedImage);
  	$('.modal-body').html(selectedImage);

};

var popover = function(e){
  e.preventDefault();

  $('#popoverOption').popover({ trigger: "hover", html:true});


};


// Bootstrap popover
$('.item').popover({ trigger: "hover", html:true});

$('#popoverOption').popover({ trigger: "hover", html:true});

// jQuery event listeners
$(document).on('ready', function(){

	// Opt in toggle initiallizer 
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

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

	$(document).on('popover', '#popoverOption', popover);



});	
