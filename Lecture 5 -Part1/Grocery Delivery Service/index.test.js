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
let searchAndBuyProduct;
describe("Checking the searchAndBuyProduct function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.main;
    searchAndBuyProduct = window.searchAndBuyProduct;

  });

  test('Checking if the function is able to buy product',()=>{
    const productList = [
      { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
      {
        id: "p2",
        name: "Oranges",
        category: "Fruits",
        price: 1.99,
        inStock: false
      },
      {
        id: "p3",
        name: "Blueberries",
        category: "Fruits",
        price: 4.99,
        inStock: true
      },
      {
        id: "p4",
        name: "Carrots",
        category: "Vegetables",
        price: 1.0,
        inStock: true
      },
      {
        id: "p5",
        name: "Tomatoes",
        category: "Vegetables",
        price: 1.5,
        inStock: true
      }
    ];
    
    expect(searchAndBuyProduct(productList,"Tomatoes")).toBeTruthy();
})
test('Checking if the function is returning false for the out of stock goods',()=>{
  const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    {
      id: "p2",
      name: "Oranges",
      category: "Fruits",
      price: 1.99,
      inStock: false
    },
    {
      id: "p3",
      name: "Blueberries",
      category: "Fruits",
      price: 4.99,
      inStock: true
    },
    {
      id: "p4",
      name: "Carrots",
      category: "Vegetables",
      price: 1.0,
      inStock: true
    },
    {
      id: "p5",
      name: "Tomatoes",
      category: "Vegetables",
      price: 1.5,
      inStock: true
    }
  ];
  expect(searchAndBuyProduct(productList,"Carrots")).toBeTruthy();
  expect(searchAndBuyProduct(productList,"Carrots")).toBeFalsy();
  
})

});

describe("Checking  if the find or findIndex method is used", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.main;
    searchAndBuyProduct = window.searchAndBuyProduct;

  });
  const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    {
      id: "p2",
      name: "Oranges",
      category: "Fruits",
      price: 1.99,
      inStock: false
    },
    {
      id: "p3",
      name: "Blueberries",
      category: "Fruits",
      price: 4.99,
      inStock: true
    },
    {
      id: "p4",
      name: "Carrots",
      category: "Vegetables",
      price: 1.0,
      inStock: true
    },
    {
      id: "p5",
      name: "Tomatoes",
      category: "Vegetables",
      price: 1.5,
      inStock: true
    }
  ];
    test('checking find and findIndex method',()=>{
      const mockFind = jest.spyOn(Array.prototype, 'find');
      const mockFindIndex = jest.spyOn(Array.prototype, 'findIndex');
  
      searchAndBuyProduct(productList, "Tomatoes");
  
      expect(mockFind || mockFindIndex).toHaveBeenCalled();
      // expect(mockFindIndex).toHaveBeenCalled();
        
  })
});