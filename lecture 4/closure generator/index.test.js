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
let generateID;

describe("To check for input1", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.main;
    generateID = window.generateID;

  });

    test('Checking the id',()=>{
      const start = 99;
      const getid = generateID(start); 
            expect(getid()).toMatch(/A_2023_99/);
            expect(getid()).toMatch(/A_2023_100/);
            expect(getid()).toMatch(/A_2023_101/);
  })

});
describe("To check for input2", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    generateID = window.generateID;

  });

  test('Checking the id',()=>{
    const start = 2;
    const getid = generateID(start); 
          expect(getid()).toMatch(/A_2023_2/);
          expect(getid()).toMatch(/A_2023_3/);
          expect(getid()).toMatch(/A_2023_4/);
})
});
describe("To check for input3", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    generateID = window.generateID;

  });

  test('Checking the id',()=>{
    const start = 0;
    const getid = generateID(start); 
          expect(getid()).toMatch(/A_2023_0/);
          expect(getid()).toMatch(/A_2023_1/);
          expect(getid()).toMatch(/A_2023_2/);
})

});