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
describe("To check for area1", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });

  test("Area",()=>{
    expect(main(5,5)).toBe(25);
})

});
describe("To check for area2", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test("Area",()=>{
    expect(main(0,0)).toBe(0);
})
});
describe("To check for area3", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test("Area",()=>{
    expect(main(5,0)).toBe(0);
})
});
describe("To check for area4", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test("Area",()=>{
    expect(main(3,5)).toBe(15);
})
});
