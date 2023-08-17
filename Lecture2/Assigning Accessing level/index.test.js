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
describe("To check the access of Manager", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });

    test('main ',()=>{
      expect(main("Manager",0).toLowerCase()).toMatch(/full access/);
  })

});
describe("To check the access of Supervisor ", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('main ',()=>{
    expect(main("Supervisor",6).toLowerCase()).toMatch(/full access/);
});
test('main ',()=>{
  expect(main("Supervisor",2).toLowerCase()).toMatch(/partial access/);
});
});

describe("To check the access of Associate", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('main ',()=>{
    expect(main("Associate",3).toLowerCase()).toMatch(/partial access/);
});
test('main ',()=>{
  expect(main("Associate",2).toLowerCase()).toMatch(/limited access/);
});
});
describe("To check for other employees", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
  });
  test('main ',()=>{
    expect(main("prayrit",6).toLowerCase()).toMatch(/limited access/);
});
test('main ',()=>{
  expect(main("Supervr",1).toLowerCase()).toMatch(/trainee access/);
});
});
