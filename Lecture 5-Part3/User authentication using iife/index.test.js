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
let userAuth;
describe("To check if the required functions are defined", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    userAuth = main();
  });
  test('registerUser should be defined',()=>{
    expect(userAuth.registerUser).toBeDefined();
    // expect(userAuth.checkCredentials).toBeDefined();
})
test('checkCredentials function should be present', () => {
  // Arrange
  const code = main.toString();

  // Assert
  expect(code.includes('checkCredentials(')).toBe(true);
});

});

describe("checking the working of IIFE", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    userAuth = main();
  });

    test('registerUser should be able to add new users and give error for adding existing user',()=>{
      const validCredentials = userAuth.registerUser('testuser', 'password123');
      expect(validCredentials.toLowerCase()).toBe('the user have been added to the registereduser array');
      const validCredentials2 =userAuth.registerUser('testuser', 'password123');
      expect(validCredentials2.toLowerCase()).toBe('the user is already registered');
    })
});







