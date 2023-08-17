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
describe("checking for temp above 100f", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('fever checker',()=>{
    expect(main(102)).toMatch(/38.9/)
})
});
describe("checking for temp below 100f", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('fever checker',()=>{
    expect(main(98)).toMatch(/36.7/)
})
});
describe("checking for temp at 100f", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('fever checker',()=>{
    expect(main(100)).toMatch(/37.8/)
})
});


