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
let functions;

describe("Checking for arrow functions implementation", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    functions = main();

  });

  test('createPerYearData should be an arrow function', () => {
    expect(functions.createPerYearData.prototype).toBeUndefined();
  });

  test('printReport should be an arrow function', () => {
    expect(functions.printReport.prototype).toBeUndefined();
  });

  test('calculateTotalTillDate should be an arrow function', () => {
    expect(functions.calculateTotalTillDate.prototype).toBeUndefined();
  });

  test('adjustTotalOfYear should be an arrow function', () => {
    expect(functions.adjustTotalOfYear.prototype).toBeUndefined();
  });

});