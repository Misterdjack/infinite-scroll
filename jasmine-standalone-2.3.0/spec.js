

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