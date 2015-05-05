describe('container', function() {
	
	// var spyEvent = spyOnEvent('window', 'scroll')
	// $('window').scroll();
	// expect('scroll').toHaveBeenTriggeredOn('window')
	// expect(spyEvent).toHaveBeenTriggered()

	// var spyEvent = spyOnEvent('.item', 'click');
	// $('.item').click();
	// expect('click').toHaveBeenTriggeredOn('.item');
	// expect(spyEvent).toHaveBeenTriggered();
	var elem2;

	beforeEach(function(){
		elem2 = $('<div id="container class="container"><p>Hello World</p></div>')
	});

  it('detects whether an element has a class', function() {
  	expect(elem2).not.toHaveClass('container');
  })

	var elem;
	beforeEach(function(){
		elem = $('.container');
	});

  it('should keep the number of container divs always under 4', function() {
  	scrollHandler();
    expect($('.container').length).not.toEqual(4);
  });

  it('should be true', function () {
  	expect(true).toBeTruthy();
  });

});