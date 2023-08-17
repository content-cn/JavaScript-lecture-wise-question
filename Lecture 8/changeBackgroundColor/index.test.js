// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let changeBackgroundColor;
let elements;
describe("checking if the changeBackgroundColor is working correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    changeBackgroundColor = window.changeBackgroundColor;
    
  });
  test("changes the background color of elements with class 'my-class'", () => {
    elements = document.querySelectorAll(".my-class");
    expect(elements[0]).not.toHaveStyle("background-color: yellow");
    changeBackgroundColor(".my-class");
    elements.forEach((element) => {
      expect(element).toHaveStyle("background-color: yellow");
    });
  });
  test("changes the background color of elements with id 'my-id'", () => {
    changeBackgroundColor("#my-id");
    elements = document.querySelectorAll("#my-id");
    elements.forEach((element) => {
      expect(element).toHaveStyle("background-color: yellow");
    });
  });
});