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
let getUserDetail;
describe("checking the working of getUserDetail", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    getUserDetail = main();
  });
  test("checking for nested value retrieved correctly", () => {
    const userProfile = {
      name: "John Doe",
      email: "john.doe@example.com",
      address: {
        city: "New York",
        street: "123 Main St",
        zipCode: "10001"
      }
    };
  
    expect(getUserDetail(userProfile, ["name"])).toBe("John Doe");
    expect(getUserDetail(userProfile, ["email"])).toBe("john.doe@example.com");
    expect(getUserDetail(userProfile, ["address", "city"])).toBe("New York");
    expect(getUserDetail(userProfile, ["address", "zipCode"])).toBe("10001");
    expect(getUserDetail(userProfile, ["address", "country"])).toBe(
      "Not available"
    );
  });
});