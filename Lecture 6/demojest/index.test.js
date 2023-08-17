require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let main;
describe("The final output has been printed correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.add;
    
  
  });
  test("to test this",()=>{
    expect(main(1,2)).toBe(3);
    expect(main(2,2)).toBe(4);
    expect(main(14,3)).toBe(17);
    expect(main(-2,2)).toBe(0);
    expect(main(-1,-2)).toBe(-3);
  })
});