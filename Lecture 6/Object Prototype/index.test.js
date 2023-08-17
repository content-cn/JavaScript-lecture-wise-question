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
let Book;

describe("checking the isClassic function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    Book = window.Book;
    
  
  });
  test("checking if the isClassic is prototypal method of book and is working correctly", () => {
    const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
    expect(Object.getPrototypeOf(book1).isClassic).toBeDefined();
    expect(book1.isClassic()).toBe("The book is from the classic collection");

    const book2 = new Book("1984", "George Orwell", 1949);
    expect(Object.getPrototypeOf(book2).isClassic).toBeDefined();
    expect(book2.isClassic()).toBe("The book is from the classic collection");

    const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1990);
    expect(Object.getPrototypeOf(book3).isClassic).toBeDefined();
    expect(book3.isClassic()).toBe("The book is not a classic collection book");
  });
});