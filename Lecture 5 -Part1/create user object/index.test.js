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
let createUserObjects;
describe("Checking the createUserObjects", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = 
    createUserObjects = window.createUserObjects;

  });

  const mapMock = jest.spyOn(Array.prototype, 'map');
    test('checking if map is used to solve the problem',()=>{
      createUserObjects([], [], []);
   expect(mapMock).toHaveBeenCalled();
  })
  
  test('checking the working of createUserObjects for imput1',()=>{
    const expectedUsers = [
      { id: 1, name: "John", image: "john.jpg" },
      { id: 2, name: "Jane", image: "jane.jpg" },
      {id:3,  name:"Alice", image: "alice.jpg"}
    ];

    const users = createUserObjects([1, 2, 3], ["John", "Jane","Alice"], ["john.jpg", "jane.jpg", "alice.jpg"]);

    expect(users).toEqual(expectedUsers);
})
test('checking the createUserObjects for empty arrays',()=>{

  
  const users = createUserObjects([], [], []);

  expect(users).toEqual([]);
})

});
