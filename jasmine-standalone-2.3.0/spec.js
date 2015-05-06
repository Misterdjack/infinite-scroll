
// describe('container', function() {
  
//   // var spyEvent = spyOnEvent('window', 'scroll')
//   // $('window').scroll();
//   // expect('scroll').toHaveBeenTriggeredOn('window')
//   // expect(spyEvent).toHaveBeenTriggered()

//   // var spyEvent = spyOnEvent('.item', 'click');
//   // $('.item').click();
//   // expect('click').toHaveBeenTriggeredOn('.item');
//   // expect(spyEvent).toHaveBeenTriggered();
//   // var elem2;

//   beforeEach(function(){
//     elem2 = $('<div id="container class="container"><p>Hello World</p></div>')
//   });

//   it('detects whether an element has a class', function() {
//     expect(elem2).toBe('#container');
//   });

//   var elem;
//   beforeEach(function(){
//     elem = $('.container').length;
//   });

//   it('should keep the number of container divs always under 4', function() {
//     scrollHandler();
//     expect(elem).not.toEqual(4);
//   });

//   it('should be true', function () {
//     expect(true).toBeTruthy();
//   });

// });

describe("A spy", function() {


  var freebird, bar = null;

  beforeEach(function() {
    freebird = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(freebird, 'setBar');

    freebird.setBar(123);
    freebird.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(freebird.setBar).toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(freebird.setBar).toHaveBeenCalledWith(123);
    expect(freebird.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});