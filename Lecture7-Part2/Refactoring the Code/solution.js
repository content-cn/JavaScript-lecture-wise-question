function main() {
  function Car(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;
    this.getMake = function () {
      return this.make;
    };
  }

  Car.prototype.getModel = function () {
    return this.model;
  };

  Car.prototype.getYear = function () {
    return this.year;
  };

  Car.prototype.getColor = function () {
    return this.color;
  };

  Car.prototype.getMileage = function () {
    return this.mileage;
  };
  return Car;
}