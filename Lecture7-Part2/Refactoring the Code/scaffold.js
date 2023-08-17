//Convert the class and it methods to the required format.
// //Do not modify the names .The names should be as it is in the given code.

  function main(){
    class Car {
    constructor(make, model, year, color, mileage) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage;
      this.getMake = function(){
        return this.make;
      }
    }
  
    getModel() {
      return this.model;
    }
  
    getYear() {
      return this.year;
    }
  
    getColor() {
      return this.color;
    }
  
    getMileage() {
      return this.mileage;
    }
  }
    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
        console.log(myCar.getMake());
        console.log(myCar.getModel());
        console.log(myCar.getYear());
        console.log(myCar.getColor());
        console.log(myCar.getMileage());
        console.log(myCar.drive());
      //Do not modify the return statement;
        return Car;
      }
      main();