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
describe("To check for grade A", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('main Discount',()=>{
    expect(main(95)).toMatch(/A/);
})
});
describe("To check for grade B", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('main Discount',()=>{
    expect(main(85)).toMatch(/B/);
})
});
describe("To check for grade C", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('main Discount',()=>{
    expect(main(75)).toMatch(/C/);
})
});
describe("To check for grade D", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('main Discount',()=>{
    expect(main(65)).toMatch(/d/);
})
});
describe("To check for grade f", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test("grading System",()=>{
    expect(main(50)).toMatch(/F/);
});
});