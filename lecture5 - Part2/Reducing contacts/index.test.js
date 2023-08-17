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
let mapContactsToCompanies;
describe("Checking the mapContactsToCompanies function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    mapContactsToCompanies = window.mapContactsToCompanies;

  });
  test('Checking the function for input1',()=>{
    const contactsWithMissingCompany = [
      { name: "Alice", company: "ABC Inc." },
      { name: "Bob" ,company: "XyZ Inc"},
      { name: "Charlie", company: "ABC Inc." }
    ];
    const expectedMapping = {
      "ABC Inc.": ["Alice", "Charlie"],
      "XyZ Inc" : ["Bob"]
    };

    const result = mapContactsToCompanies(contactsWithMissingCompany);
    expect(result).toEqual(expectedMapping);
})
test('Checking the function for empty array',()=>{
  const emptyContacts = [];
const expectedMapping = {};

const result = mapContactsToCompanies(emptyContacts);

expect(result).toEqual(expectedMapping);
})

});