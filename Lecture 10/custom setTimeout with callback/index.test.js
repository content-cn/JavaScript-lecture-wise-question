// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
// let main;
let repeatAfterDelay;
describe("Checking the working of repeatAfterDelay function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.add;
    repeatAfterDelay = window.repeatAfterDelay;
  });
  
jest.useFakeTimers();

test('Checking if delayed function is executed after the specified delay', () => {
  const callback = jest.fn();
  const delay = 2000;
  // window.timer();
  const delayedFunction = repeatAfterDelay(callback, delay);
  delayedFunction();

  expect(callback).not.toHaveBeenCalled();
  jest.advanceTimersByTime(delay);

  expect(callback).toHaveBeenCalled();
});
test('Checking if console output is correct', () => {
  const callback = jest.fn((name, age) => {
    console.log(`Hello ${name}! You are ${age} years old.`);;
  });
  const delay = 2000;
  const name = 'John';

  const consoleSpy = jest.spyOn(console, 'log');
  const delayedFunction = repeatAfterDelay(callback, delay);
  delayedFunction(name,20);

  expect(callback).not.toHaveBeenCalled();
  jest.advanceTimersByTime(delay);

  expect(callback).toHaveBeenCalled();
  expect(consoleSpy).toHaveBeenCalledWith(`Hello John! You are 20 years old.`);

  consoleSpy.mockRestore(); // Restore the original console.log method
});

});