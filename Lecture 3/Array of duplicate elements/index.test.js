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
let findDuplicate;

describe("To check for arr1", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    findDuplicate = window.findDuplicate;

  });

    test('Getting the duplicate element',()=>{
      let arr = [3,4,56,6,8,8,5,4,67];
            expect(findDuplicate(arr)).toContain(4,8);
  })

});
describe("To check for arr2", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    findDuplicate = window.findDuplicate;

  });

    test('Getting the duplicate element',()=>{
      let arr = [4, 4,4,4,4,4,4,4];
      expect(findDuplicate(arr)).toHaveLength(1);
            expect(findDuplicate(arr)).toContain(4);
  })

});
describe("To check for arr3", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    findDuplicate = window.findDuplicate;

  });

    test('Getting the duplicate element',()=>{
      let arr = [];
            expect(findDuplicate(arr)).toHaveLength(0);
  })

});
describe("To check for arr4", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    findDuplicate = window.findDuplicate;

  });

    test('Getting the duplicate element',()=>{
      let arr = [3,456,654,32,7];
            expect(findDuplicate(arr)).toHaveLength(0);
  })

});