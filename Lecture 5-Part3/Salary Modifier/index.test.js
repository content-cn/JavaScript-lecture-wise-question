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
let increaseSalaries;

describe("Checking the working of increaseSalaries", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main; 
     increaseSalaries = window.increaseSalaries;

  });
  
  const mapMock = jest.spyOn(Array.prototype, 'map');
  test('checking if map is used to solve the problem',()=>{
    const employees = [
      { id: 1, name: "Alice", department: "sales", salary: 40000 },
      { id: 2, name: "Bob", department: "engineering", salary: 50000 },
      { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
      { id: 4, name: "David", department: "sales", salary: 35000 },
      { id: 5, name: "Emily", department: "engineering", salary: 55000 }
    ];
    increaseSalaries(employees)
  expect(mapMock).toHaveBeenCalled();
})

    test('Checking if the slary are updated',()=>{
      const employees = [
        { id: 1, name: "Alice", department: "sales", salary: 40000 },
        { id: 2, name: "Bob", department: "engineering", salary: 50000 },
        { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
        { id: 4, name: "David", department: "sales", salary: 35000 },
        { id: 5, name: "Emily", department: "engineering", salary: 55000 }
      ];
      const expectedOutput = [
        { id: 1, name: 'Alice', department: 'sales', salary: '44000.0' },
        { id: 2, name: 'Bob', department: 'engineering', salary: '57500.0' },
        {
          id: 3,
          name: 'Charlie',
          department: 'marketing',
          salary: '47250.0'
        },
        { id: 4, name: 'David', department: 'sales', salary: '38500.0' },
        {
          id: 5,
          name: 'Emily',
          department: 'engineering',
          salary: '63250.0'
        }
      ];
            expect(increaseSalaries(employees)).toEqual(expectedOutput);
  })
});