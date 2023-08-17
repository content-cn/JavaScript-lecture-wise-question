// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
// let main;
let calculateAverage;

describe("Checking if the function is working correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;

    calculateAverage = window.calculateAverage;


  });
      
      const pressureThreshold = 1015;
  
      test('should calculate the average temperature of cities above the given pressure threshold', () => {
        const expectedAverage = "68.3";
    
        const result = calculateAverage(pressureThreshold);
    
        expect(result).toBe(expectedAverage);
            expect(calculateAverage).toBeDefined();
  })
  test('checking the function for another threshhold',()=>{

    const noCitiesThreshold = 1020;
    const expectedAverage = "75.0";

    const result = calculateAverage(noCitiesThreshold);

    expect(result).toBe(expectedAverage);
})

});
describe("To check if the function contain map reduce and filter", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.main;
    calculateAverage = window.calculateAverage;

  });

    test('checking the function',()=>{

      expect(calculateAverage.toString()).toContain('.filter(');
    expect(calculateAverage.toString()).toContain('.map(');
    expect(calculateAverage.toString()).toContain('.reduce(');
  })

});