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
const consoleLogSpy = jest.spyOn(global.console, 'log');

describe("To test the script", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.add;
 
  });
  test("to test the console",()=>{
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  })
});