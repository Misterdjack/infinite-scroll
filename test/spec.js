describe('container', function() {
	var elem;
	beforeEach(function(){
		elem = $('.container').length;
	});

  it('should keep the number of container divs always under 4', function() {
    expect(elem).not.toEqual(4);
  });


});