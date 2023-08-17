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
let Account;
describe("Checking the working of Account class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    Account = main();
  });
  test('Checking the Account\'s balance after deposit and withdrawal', () => {
    // Create an instance of the Account class
    const account = new Account("1234567890");
  
    // Deposit funds
    account.deposit(500);
  
    // Withdraw funds
    account.withdraw(200);
  
    // Check the current balance
    expect(account.getbalance).toBe(300);
  });
});

describe("Checking for invalid Operations", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    Account = main();
  });
  test('Checking for output after setting negative value to balance', () => {
    const account = new Account("1234567890");
    account.setbalance = 1000;
  // The balance should be updated to 1000
  expect(account.getbalance).toBe(1000);

  // Attempt to set a negative balance
  account.setbalance = -500;

  expect(account.getbalance).toBe(1000);
});
});

describe("Checking for Private Property", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    Account = main();
  });
  test('Checking if balance is private property or not', () => {
    // Create an instance of the Account class
    const account = new Account("1234567890");
    account.setbalance =500;
    expect(account.balance).toBeFalsy();
  });
});