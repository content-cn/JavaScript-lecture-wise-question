function main(){
function Gadget(brand, type) {
    this.brand = brand;
    this.type = type;
  
    // Implement the describeGadget() method here
    this.describeGadget = function () {
      return `This gadget is a ${this.type} from ${this.brand}.`;
    };
  }
  
  // Create a new instance of Gadget
  const myGadget = new Gadget("Apple", "iPhone");
  
  // Call the describeGadget() method
  console.log(myGadget.describeGadget()); // Outputs: "This gadget is a iPhone from Apple."
return Gadget;
}