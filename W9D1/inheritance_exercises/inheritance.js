// ################## inherits #####################

// Write a Function.prototype.inherits method that will do this for you.
// There are a number of steps:
//    -Define a Surrogate class
//    -Set the prototype of the Surrogate(Surrogate.prototype = SuperClass.prototype)
//    -Set Subclass.prototype = new Surrogate()
//    -Set Subclass.prototype.constructor = Subclass

Function.prototype.inherits = function(parentClass) {
  function Surrogate() {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits = function(parentClass) {
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
};