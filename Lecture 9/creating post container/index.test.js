// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");
let dom;
let document;
let window;
describe("checking if all the elements are present and are appended correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });
  test("The specified elements should be present",()=>{
    let post1 =
    { id: 1, author: 'John', content: 'My first Post!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' };

    const postElements = document.querySelector('.post');
    const children = postElements.children;
      expect(document.querySelector('h3').textContent).toBe(post1.author);
      expect(document.querySelector('p').textContent).toBe(post1.content);
      expect(Array.from(children).find((child) => child.tagName === 'BUTTON' && child.textContent === 'Like')).toBeTruthy();
      expect(Array.from(children).find((child) => child.tagName === 'INPUT')).toBeTruthy();
      expect(Array.from(children).find((child) => child.tagName === 'BUTTON' && child.textContent === 'Comment')).toBeTruthy();
      expect(document.querySelector('.comments-container')).toBeInTheDocument();
      expect(document.querySelector('.comments-container').textContent).toContain(post1.comments[0]);
});
});
describe('Checking the working of onClick event of footer section',()=>{
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
  });
  test('should toggle comments container visibility when the post footer is clicked', () => {
    const postFooter = document.querySelector('.post-footer');
    const commentsContainer = document.querySelector('.comments-container');
  
    postFooter.click();
    expect(commentsContainer.style.display).toBe('block');
  
    postFooter.click();
    expect(commentsContainer.style.display).toBe('none');
  });
})