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
let updateProfile;
let freezeProfile;
describe("checking the updateProfile function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    updateProfile = window.updateProfile;
    freezeProfile = window.freezeProfile;
  
  });

  test("updateProfile should correctly update the user profile", () => {
    const user = {
      name: "John Doe",
      age: 25,
      email: "johndoe@example.com"
    };
  
    const updates = {
      age: 30,
      email: "john.doe@example.com"
    };

    const updatedUser = updateProfile(user, updates);

    expect(updatedUser).toEqual({
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com"
    });

    expect(updatedUser).not.toBe(user); // Ensure that a new object is created
  });

});

describe("checking the freezeProfile function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    updateProfile = window.updateProfile;
    freezeProfile = window.freezeProfile;
  
  });
  test("freezeProfile should be able to freeze the user profile", () => {
    const user = {
      name: "John Doe",
      age: 25,
      email: "johndoe@example.com"
    };
    const frozenUser = freezeProfile(user);

    expect(Object.isFrozen(frozenUser)).toBe(true);


    expect(frozenUser).toEqual(user); // The frozen user profile should remain unchanged
  });
});