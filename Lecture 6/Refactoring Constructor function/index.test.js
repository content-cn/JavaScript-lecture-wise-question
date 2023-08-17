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
let Gadget;
describe("checking the working of Gadget Constructor function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    Gadget = main();
  });
  test("should be created using regular function", () => {
    expect(typeof Gadget.prototype === "undefined").toBeFalsy();
  });
  test("describeGadget method should return correct output", () => {
    // Create a new instance of Gadget
    const testGadget = new Gadget("Samsung", "Galaxy");

    // Test the describeGadget method
    expect(testGadget.describeGadget().toLowerCase()).toMatch(
      /this gadget is a galaxy from samsung./i
    );
  });
});