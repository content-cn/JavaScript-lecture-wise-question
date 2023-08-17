// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let main;
let pizzaPricing;

describe("To check if the curried function is defined", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.main;
    pizzaPricing = window.pizzaPricing;

  });
  test('Checking if the pizzaPricing is defined',()=>{
    expect(pizzaPricing).toBeDefined();
})
    test('Checking if there are curried function present',()=>{
          const toppingfunc = pizzaPricing("small");
            expect(toppingfunc).toBeDefined();
            const quantityfunc = toppingfunc(['gr','rgg']);
            expect(quantityfunc).toBeDefined();
  })
});
describe("checking if the pizzaPricing  is working correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    pizzaPricing = window.pizzaPricing;

  });

    test('calculating price',()=>{
      const toppings = ['bacon', 'pineapple'];
      const calculatePrice = pizzaPricing('large')(toppings);
      const quantity = 3;
      const toppingsCost = toppings.length * 1.5;
      const expectedPrice = ((12.0 + toppingsCost) * quantity).toFixed(2);
  
      const totalPrice = calculatePrice(quantity);
  
      expect(totalPrice).toEqual(expectedPrice);
});
});