// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let User;
describe("cheking for the right credentials", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    User = window.User;
    
  });
  test("should log 'Login successful!' when system credentials match", () => {
    const user = new User("John Doe");
    const logSpy = jest.spyOn(console, "log");

    const loginFunction = user.login.bind({
      username: "system",
      password: "pass123"
    });

    loginFunction("system", "pass123");

    expect(logSpy).toHaveBeenCalledWith("Login successful!");

    logSpy.mockRestore();
  });
});
describe("checking for the wrong credentils", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    User = window.User;
    
  });
  test("should log 'Login failed!' when system credentials do not match", () => {
    const user = new User("John Doe");
    const logSpy = jest.spyOn(console, "log");

    const loginFunction = user.login.bind({
      username: "system",
      password: "pass123"
    });
    loginFunction("wrongUsername", "wrongPassword");

    expect(logSpy).toHaveBeenCalledWith("Login failed!");

    logSpy.mockRestore();
  });
});