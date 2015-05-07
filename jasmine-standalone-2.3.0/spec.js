

describe("A spy", function() {

  var bar = null;

  beforeEach(function() {

    spyOn(app, 'freebird');

    app.freebird(123);
    app.freebird(456, 'another param');
  });

  it("tracks that the spy was called", function() {
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