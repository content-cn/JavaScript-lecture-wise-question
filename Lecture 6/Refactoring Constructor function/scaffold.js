function main(){
  //Refactor the gadget constructor function
const Gadget = (brand, type) => {
  this.brand = brand;
  this.type = type;

  // Refactor the describeGadget() method here
  this.describeGadget = ()=> {
    return `This gadget is a ${type} from ${brand}.`;
  };
};
  const gadget1 = new Gadget("sony","laptop");
  console.log(gadget1.describeGadget());
  // Do not modify the return statement
 return Gadget; 
}
main();