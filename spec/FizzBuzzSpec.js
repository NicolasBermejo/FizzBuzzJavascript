describe ("FizzBuzz", function() {

  it("should return Fizz instead of 3", function() {
    expect(fizzBuzz(3)).toEqual('Fizz');
  });

  it("should return Buzz instead of 5", function() {
    expect(5).toEqual('Buzz');
  });

  it("should return FizzBuzz instead of 15", function() {
    expect(15).toEqual('FizzBuzz');
  });

  it("should return the number for non-multiples of 3 or 5", function() {
    expect(2).toEqual(2);
  });

});
