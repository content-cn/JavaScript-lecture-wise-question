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
let Person,Student;
describe("Checking for the Person object", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Person,Student} = main());
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterEach(() => {
    // Restore the console.log function after each test
    console.log.mockRestore();
  });
    test('Checking the speak() function',()=>{
      const person = new Person("John", 25, "male");
      // Call the speak method
      person.speak();
      // Check if the console.log output matches the expected text
      expect(console.log).toHaveBeenCalledWith('Hello, my name is John and I am 25 years old.');
      
  })
  test('Checking if the Person is Defined',()=>{
    expect(Person).toBeDefined();
  })

});
describe("Checking for the Student Object", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Person,Student} = main());
    jest.spyOn(console, 'log').mockImplementation(() => {});
  
  });
  test('Checking if Student is defined',()=>{
    expect(Person).toBeDefined();
  })
    test('Checking the functionalities of speak() and study()',()=>{
      const person = new Person("John", 25, "male");

      // Create a new instance of Student
      const student = new Student(person, "Computer Science", 3.8);
  
      // Call the speak method
      student.speak();
  
      // Check if the console.log output matches the expected text
      expect(console.log).toHaveBeenCalledWith('Hello, my name is John and I am 25 years old. I am also a student studying Computer Science.');
  
      // Call the study method
      student.study();
  
      // Check if the console.log output matches the expected text
      expect(console.log).toHaveBeenCalledWith('I am studying Computer Science and my GPA is 3.8.');
  
    });
});




