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
let Car;
describe("Checking if the Car is working Properly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    Car = main();
  });
    test('Checking the working of methods',()=>{
        const maruti = new Car("maruti",2022,2020,"red",20);
        expect(maruti.getMake()).toBe("maruti");
        expect(maruti.getModel()).toBe(2022);
        expect(maruti.getYear()).toBe(2020);
        expect(maruti.getColor()).toBe("red");
        expect(maruti.getMileage()).toBe(20);
        
  })
});
describe("checking for refactoring of Class and presence of prototypal methods", () => {
    test('Object should be created using constructor function',()=>{
      const containsClassKeyword = /class\s/.test(html);
    expect(containsClassKeyword).toBe(false);
  })
  test('Checking if the prototypal methods are refactored',()=>{
    const c1 = new Car("fv","rvr","fvf","rv","rvv");
    expect(Object.getPrototypeOf(c1).getMake).toBeUndefined();
    expect(Object.getPrototypeOf(c1).getYear).toBeDefined();
    expect(Object.getPrototypeOf(c1).getModel).toBeDefined();
    expect(Object.getPrototypeOf(c1).getColor).toBeDefined();
    expect(Object.getPrototypeOf(c1).getMileage).toBeDefined();
})
});