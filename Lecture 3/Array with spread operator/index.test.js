// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let mergeArray;
describe("Checking if mergeArray is working correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    mergeArray = window.mergeArray;

  });
  test("to test the merge array for input1",()=>{
    let arr1 = [2,4,1,6,7];
    let arr2 = [2,3,5,76];
    expect(mergeArray(arr1,arr2)).toContain(2, 4, 1,  6,
      7, 3, 5, 76);
  })
  
  test("to test the merge array for input2",()=>{
    let arr1 = [2,4,3,6,7];
    let arr2 = [2,2,3,6,7];
    expect(mergeArray(arr1,arr2)).toContain(2, 4, 3, 6, 7 );
  })
  test("to test the merge array for input 3",()=>{
    let arr1 = [2,4,3,6,7];
    let arr2 = [];
    expect(mergeArray(arr1,arr2)).toContain(2,4,3,6,7);
  })
});

describe("checking if set is used correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    mergeArray = window.mergeArray;
    
  
  });
  test("Set should be used to solve the problem",()=>{
    const mergeArrayString = mergeArray.toString();

    expect(mergeArrayString).toContain("Set");
  })
});

