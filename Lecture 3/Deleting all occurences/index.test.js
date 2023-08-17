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
let deleteOccur;

describe("To check for input1", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    deleteOccur = window.deleteOccur;

  });

    test('checking the final output',()=>{
      let arr = [23, 56, 4, 78, 5, 63, 45, 210, 56];
      let ele =56;
            expect(deleteOccur(arr,ele)).toContain(23,4,78,5,63,45,210);
  })

});
describe("To check for input2", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;   
     deleteOccur = window.deleteOccur;

  });

    test('checking the final output',()=>{
      let arr = [3,54,5,7,88,9];
      let ele =56;
            expect(deleteOccur(arr,ele)).toContain(3,54,5,7,88,9);
  })

});
describe("To check for input3", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    deleteOccur = window.deleteOccur;

  });

    test('checking the final output',()=>{
      let arr = [];
      let ele =56;
            expect(deleteOccur(arr,ele)).toHaveLength(0);
  })

});
describe("To check for input4", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    deleteOccur = window.deleteOccur;

  });

    test('checking the final output',()=>{
      let arr = [4,4,4,4,4,4];
      let ele = 4;
            expect(deleteOccur(arr,ele)).toHaveLength(0);
  })

});