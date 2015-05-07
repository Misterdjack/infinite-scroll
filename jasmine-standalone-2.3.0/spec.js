

describe("Testing the freebird function", function() {

  var bar = null;

  beforeEach(function() {

    spyOn(app, 'freebird');

    app.freebird(123);
    app.freebird(456, 'another param');
  });

  it("tracks that the function was called", function() {
    expect(app.freebird).toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(app.freebird).toHaveBeenCalledWith(123);
    expect(app.freebird).toHaveBeenCalledWith(456, 'another param');
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});

describe("Testing the scrollHandler function", function() {

  var bar = null;

  beforeEach(function() {

    spyOn(app, 'scrollHandler');

    app.scrollHandler(123);
    app.scrollHandler(456, 'another param');
  });

  it("tracks that the function was called", function() {
    expect(app.scrollHandler).toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(app.scrollHandler).toHaveBeenCalledWith(123);
    expect(app.scrollHandler).toHaveBeenCalledWith(456, 'another param');
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});

describe('container', function() {
  
  // var spyEvent = spyOnEvent('window', 'scroll')
  // $('window').scroll();
  // expect('scroll').toHaveBeenTriggeredOn('window')
  // expect(spyEvent).toHaveBeenTriggered()

  // var spyEvent = spyOnEvent('.item', 'click');
  // $('.item').click();
  // expect('click').toHaveBeenTriggeredOn('.item');
  // expect(spyEvent).toHaveBeenTriggered();
  // var elem2;

  beforeEach(function(){
    elem2 = $('<div id="container class="container"><p>Hello World</p></div>')
  });

  it('detects whether an element has a class', function() {
    expect(elem2).toBe('#container');
  });

  var elem;
  beforeEach(function(){
    elem = $('.container').length;
  });

  it('should keep the number of container divs always under 4', function() {
    expect(elem).not.toEqual(4);
  });

  it('should be true', function () {
    expect(true).toBeTruthy();
  });

});