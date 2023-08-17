import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path, { resolve } from "path";
// require("iconv-lite").encodingExists('foo');
const html = fs.readFileSync(path.resolve(__dirname, "./index.html")).toString();


let dom;
let document;
let window;

describe("testing the api",()=>{
  beforeEach(()=>{
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    const open = jest.fn();
const onload = jest.fn((x) => {/* <your response data> */});
const onerror = jest.fn();
const send = jest.fn(function(){
    this.onload()
})

const xhrMockClass = function () {
    return {
        open,
        send,
        onerror,
        onload
    };
};

global.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
  })
  test("checking the xhr",()=>{
    expect(send).toHaveBeenCalled()
//  expect(onload).toHaveBeenCalledWith(/* <your response data> */)
//  expect(open).toHaveBeenCalledWith('GET', 'some/url', true)
  })
});
  