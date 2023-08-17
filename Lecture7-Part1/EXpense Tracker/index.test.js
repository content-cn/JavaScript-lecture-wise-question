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
let ExpenseTracker;
describe("Checking if the ExpenseTracker is working correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ExpenseTracker = main();
  });
  test("Checking the calculateBalance method",()=>{
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    expect(tracker.calculateBalance()).toBe(3500);
  })
});
describe("checking for the presence of private member", () => {
  test('Checking if income and expense is a private property',()=>{
    const containsClassKeyword = /#income\s/.test(html);
  expect(containsClassKeyword).toBe(true);
  
  const containsClassKeyword1 = /#expenses\s/.test(html);
  expect(containsClassKeyword1).toBe(true);
  
})
});

