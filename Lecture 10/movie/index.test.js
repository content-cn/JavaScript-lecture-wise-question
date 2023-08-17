// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
// require("iconv-lite").encodingExists('foo');

const html = fs.readFileSync(path.resolve(__dirname, "./index.html")).toString();

let dom;
let document;
let window;
let add;
describe("testing the cases",()=>{
    beforeEach(() => {
        dom = new JSDOM(html, { runScripts: "dangerously" });
        document = dom.window.document;
        window = dom.window;
        add = window.add;
    })
    test("testing the left",()=>{
        expect(add(2,3)).toBe(5);
    })
    test("testing",()=>{
        expect(add(3,4).toBe(2));
    })
})





// describe("testing the api",()=>{
//   beforeEach(()=>{
//     dom = new JSDOM(html, { runScripts: "dangerously" });
//     document = dom.window.document;
//     window = dom.window;
//   })
//   afterEach(()=>{
//     document.innerHTML = "";
//   })

//   test('Genre options are populated correctly', () => {
//     // Check if the genre form exists
//     const genreForm = document.getElementById('genreForm');
//     expect(genreForm).toBeInTheDocument();
//     // Check if the genre options are populated
//     setTimeout(()=>{
//       const genreOptions = document.querySelector('option');
//       console.log(genreOptions)
//       expect(genreOptions.length).toBe(19);  
//     },100)
//     });
//     test("clicking on the search button new movie should be displayed",async ()=>{
//       const movieinfo = await document.querySelector('#moviePoster');
//       expect(movieinfo.children.length).toBe(0);
//       const btn = document.querySelector('#playBtn');
//       btn.click(); 
//       setTimeout(()=>{

//         const updatedmovieinfo = document.querySelector('#moviePoster');
//         expect(updatedmovieinfo.children.length).not.toBe(0);
      
//       },1000);
//     })
//     test('Clicking on the "Next" button changes the movie', async () => {
//       const movieinfo = await document.querySelector('#moviePoster');
//       expect(movieinfo.children.length).toBe(0);
//       const btn = document.querySelector('#playBtn');
//       btn.click(); 
//       setTimeout(()=>{
//       const updatedmovieinfo = document.querySelector('#moviePoster');
//       expect(movieinfo.children.length).not.toBe(0);
//       console.log(movieinfo.children[0].textContent);
//       },1000);
//     });
// })