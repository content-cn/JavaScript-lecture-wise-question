// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { fireEvent } from "@testing-library/dom";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;

describe("checking the seat Event listerner", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });
  afterEach(() => {
    document.body.innerHTML = ''; // Reset the HTML content of the document body
  });
  test('After click event the seat should have "selected" in the classList', () => {
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[0])
    expect(allseat[0]).toHaveClass("selected")
  });
  test('The occupied seat should not be able to be get selected',()=>{
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[0])
    fireEvent.click(allseat[0])
    expect(allseat[1]).not.toHaveClass("selected")
    
  })
});

describe("checking the Price Section", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });
  afterEach(() => {
    document.body.innerHTML = ''; // Reset the HTML content of the document body
  });
  test('Price should be updated after each click event',()=>{
  const allseat = document.querySelectorAll('.seatCont .seat');
  let Tprice = document.querySelector('#totalPrice');
  Tprice.textContent = 0;
    fireEvent.click(allseat[0]);
     Tprice = document.querySelector('#totalPrice');
    expect(Tprice.textContent).toMatch(/7/);
    fireEvent.click(allseat[2]);
    expect(Tprice.textContent).toMatch(/14/);
  });
});

describe("checking the SelectedSeat Section", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });
  afterEach(() => {
    document.body.innerHTML = ''; // Reset the HTML content of the document body
  });
  test('The selected seat are attached to selectedSeat section on click event',()=>{
    const selectedseat = document.querySelector('#selectedSeatsHolder');
    // expect(selectedseat.length).toBe(0);
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[0])
    expect(selectedseat.childElementCount).toBe(1);
    fireEvent.click(allseat[3])
    expect(selectedseat.childElementCount).toBe(2);
  });
});

describe("checking the Continue Button", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });
  afterEach(() => {
    document.body.innerHTML = ''; // Reset the HTML content of the document body
  });
  test('the selected seat should be updated as occupied',()=>{
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[1])
    expect(allseat[1]).not.toHaveClass("selected")
      const proceed = document.querySelector('#proceedBtn');
      fireEvent.click(proceed);
      expect(allseat[0]).not.toHaveClass("selected");
      expect(allseat[0]).not.toHaveClass("occupied");
  });
  test('the selected Seats section should be updated and returned to default',()=>{
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[0])
    fireEvent.click(allseat[2])
      const proceed = document.querySelector('#proceedBtn');
      fireEvent.click(proceed);
    const selectedseat = document.querySelector('#selectedSeatsHolder');
    expect(selectedseat.childElementCount).toBe(1);
  })
  test('the Price section should be updated and set to 0',()=>{
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[0])
    fireEvent.click(allseat[2])
      const proceed = document.querySelector('#proceedBtn');
      fireEvent.click(proceed);
    const Tprice = document.querySelector('#totalPrice');
    expect(Tprice.textContent).toMatch(/0/);
  })
});

describe("checking the Cancel Button", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });
  afterEach(() => {
    document.body.innerHTML = ''; // Reset the HTML content of the document body
  });
  test('"selected" should be removed from the clasList of the Elements',()=>{
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[1])
    expect(allseat[1]).not.toHaveClass("selected")
      const cancel = document.querySelector('#cancelBtn');
      fireEvent.click(cancel);
      expect(allseat[0]).not.toHaveClass("selected");
  });
  test('the selected Seats section should be cleared and returned to default',()=>{
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[0])
    fireEvent.click(allseat[2])
      const cancel = document.querySelector('#cancelBtn');
      fireEvent.click(cancel);
    const selectedseat = document.querySelector('#selectedSeatsHolder');
    expect(selectedseat.childElementCount).toBe(1);
  })
  test('the Price section should be update and set to 0',()=>{
    const allseat = document.querySelectorAll('.seatCont .seat');
    fireEvent.click(allseat[0])
    fireEvent.click(allseat[2])
      const cancel = document.querySelector('#cancelBtn');
      fireEvent.click(cancel);
    const Tprice = document.querySelector('#totalPrice');
    expect(Tprice.textContent).toMatch(/0/);
  })
});