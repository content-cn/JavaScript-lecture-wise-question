// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let trackFitness;
describe("The final output has been printed correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    trackFitness = window.trackFitness;
  });
  test('trackFitness resolves with the correct duration', async () => {
    const duration = 30;
    const promise = await trackFitness('Running', duration);
    // await null;
    expect(promise).toBe(duration);

  });
  test('trackFitness resolves with the correct duration', async () => {
    const duration = -30;
    // let promise;
  //   trackFitness('Running', duration)
  //   .then((res)=> promise = res
  //   )
  //   .catch((res)=> promise=res)
  //   console.log(promise);
  //   expect(promise).not.toBe(duration);
  const promise = await trackFitness('Running', duration);
  expect(promise).toBe("Invalid duration. Please provide a positive number.")
  });
});
