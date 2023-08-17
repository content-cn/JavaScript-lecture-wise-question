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
let customMap;

describe("checking the working of customMap", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    customMap = main();

  });
  test('checking if customMap is defined correctly',()=>{
      
    expect(customMap).toBeDefined();
})
    test('Checking the customMap with square function',()=>{
        function square(num){
          return num*num;
        }
        const num = [1,2,3,4,5];
            expect(customMap(num,square)).toContain(1,4,9,16,25);
  })
  test('Checking the customMap with double function',()=>{
    function double(num){
      return 2*num;
    }
    const num = [1,2,3,4,5];
        expect(customMap(num,double)).toContain(2,4,6,8,10);
})
});

