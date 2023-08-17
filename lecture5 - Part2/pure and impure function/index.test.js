// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let removeVowels;

describe("checking for pure function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;

    removeVowels = window.removeVowels;
  });

    test('a new obj should be returned with all vowels removed',()=>{
      const obj = {value: "Hello World"};
      removeVowels(obj);
      expect(obj.value).toBe("Hello World");

  })
});

