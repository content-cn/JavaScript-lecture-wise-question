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
let shuffle;
describe("Working of Shuffle function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    shuffle = main();

  });
  test('Shuffle function should be defined',()=>{
    expect(shuffle).toBeDefined();
})
    test('it should return ranfdom elements after each call',()=>{
      const questions = [
        "Question1",
        "Question2",
        "Question3",
        "Question4",
        "Question5"
      ];
    
      const shuffledArray = shuffle(questions);
      const a = shuffledArray();
      const b = shuffledArray();
      expect(a).not.toEqual(b);
  })
});

