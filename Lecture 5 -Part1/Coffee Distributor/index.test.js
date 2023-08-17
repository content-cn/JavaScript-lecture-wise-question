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
let totalOrderValue;

describe("Checking the working of totalOrderValue function ", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.main;
    totalOrderValue = window.totalOrderValue;

  });
  const orders = [
    {
      orderNumber: 1,
      items: [
        { name: "Cappuccino", price: 3.5 },
        { name: "Chocolate Croissant", price: 2.5 }
      ]
    },
    {
      orderNumber: 2,
      items: [
        { name: "Latte", price: 4.0 },
        { name: "Blueberry Muffin", price: 2.75 }
      ],
      discountCode: "COFFEELOVER"
    },
    {
      orderNumber: 3,
      items: [
        { name: "Tea", price: 7.0 },
        { name: "Taj Tea", price: 2.75 }
      ]
    }
  ];
  const applyDiscount = (discountCode, total) => {
    switch (discountCode) {
      case "COFFEELOVER":
        return total * 0.9;
        case "TEALOVER":
        return total * 0.8;
      default:
        return total;
    }
  };
    test('Checking if the function return correct value',()=>{
      const total = totalOrderValue(orders, applyDiscount);
      expect(total).toBe("21.82");
  })
  const mapMock = jest.spyOn(Array.prototype, 'map');
  const reduceMock = jest.spyOn(Array.prototype, 'reduce');

    test('Checking if map and reduce have been called',()=>{
      totalOrderValue(orders, applyDiscount);

      expect(mapMock || reduceMock).toHaveBeenCalled();
      // expect(reduceMock).toHaveBeenCalled();
  })

});
