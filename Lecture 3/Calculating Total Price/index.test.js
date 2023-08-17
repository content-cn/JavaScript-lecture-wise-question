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
let calculatePrice;

describe("checking if the calculatePrice is working correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    calculatePrice = window.calculatePrice;

  });

    test('Checking price for input1',()=>{
      const goods = {
        apple: { price: 150, quantity: 2 },
        banana: { price: 75, quantity: 3 },
        orange: { price: 125, quantity: 1 }
      }
            expect(calculatePrice(goods)).toBe(650);
  })
  test('Checking price for input2',()=>{
    const goods2 = {
      apple: { price: 15, quantity: 7 },
      banana: { price: 7, quantity: 34 },
      orange: { price: 125, quantity: 5 }        
  };
          expect(calculatePrice(goods2)).toBe(968);
})
test('Checking price for input3',()=>{
  const goods3 = {
    apple: { price: 10, quantity: 10 },
    banana: { price: 7, quantity: 325 },
    orange: { price: 125, quantity: 53 }        
};
        expect(calculatePrice(goods3)).toBe(9000);
})
  
  test('Checking price for empty object',()=>{
    const goods4 = {

    };
          expect(calculatePrice(goods4)).toBe(0);
})

});
