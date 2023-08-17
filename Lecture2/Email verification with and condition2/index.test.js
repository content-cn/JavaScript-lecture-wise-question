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

describe("checking letter before @ ", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('email verification',()=>{
    expect(
        main("e@gmail.com")).toBeTruthy();   
})
});
describe("checking the dot condition", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('email verification',()=>{
    expect(
        main("prayrit.srivastava@gmail.com")).toMatch(/prayrit.srivastava@gmail.com/);   
})
});
describe("check for invalid email", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('email verification',()=>{
    expect(
        main("regrg")).toBeTruthy();   
})
});
describe("Checking for valid email", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('email verification',()=>{
    expect(
        main("prayrit@gmail.com")).toMatch(/prayrit@gmail.com/);   
})
});
describe("Checking for size of email", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('email verification',()=>{
    expect(
        main("e.com")).not.toMatch(/e.com/);   
})
});
describe("Checking for @ index", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('email verification',()=>{
    expect(
        main("prayrit.srivastava")).not.toMatch(/prayrit.srivastava/);   
})
test('email verification',()=>{
  expect(
      main("prayrit@F.srivastava")).not.toMatch(/prayrit@F.srivastava/);   
})
});
describe("Checking for length after dot", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('email verification',()=>{
    expect(
        main("prayrit@srivastava.c")).not.toMatch(/prayrit@srivastava.c/);   
})
});