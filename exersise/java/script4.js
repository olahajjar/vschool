var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function(callback,object) {
    console.log("I turn the key on in the " + this.carType + " car");
      callback (object);
  }
  this.drive = function(object) {
    console.log("I am driving at " + 50 + " kph" + " in the " + object.carColor + " " + object.carType + " car");
  }
}

var fiate = new Car("Fiat", 500, "white");
fiate.start(fiate.drive,fiate);


