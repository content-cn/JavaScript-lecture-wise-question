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
describe("To check for 10% Discount", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.calculate;
  });

    test('Calculate Discount',()=>{
      expect(main(500)).toMatch(/10/);
  })

});
describe("To check for No Discount", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.calculate;
  });
  test('Calculate Discount',()=>{
    expect(main(400)).toBeTruthy();
})
});
describe("To check for 30% Discount", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.calculate;
  });
  test('Calculate Discount',()=>{
    expect(main(3000)).toMatch(/30/);
})
});
describe("To check for 20% Discount", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.calculate;
  });
  test('Calculate Discount',()=>{
    expect(main(1500)).toMatch(/20/);
})
});
describe("To check for 40% Discount", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.calculate;
  });
  test('Calculate Discount',()=>{
    expect(main(4500)).toMatch(/40/);
})
});
describe("To check for invalid input", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.calculate;
  });
  test('Calculate Discount',()=>{
    expect(main("rvvr")).toBeTruthy();
})
});
describe("checking if switch has been used to complete the question", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.calculate;
  });
  test('If Switch have been called',()=>{
    // const scriptContent = extractScriptContent(html);
  // Check if the script content contains the switch statement
  expect(html).toContain('switch');
})
});