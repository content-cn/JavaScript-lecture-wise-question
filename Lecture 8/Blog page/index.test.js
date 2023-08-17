// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let addBlog;
let list;
describe("Checking if addBlog is defined and used Correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    addBlog = window.addBlog;
    
  });
  test("addBlog is defined",()=>{
    expect(addBlog).toBeDefined();
  })
});
  describe("Checking if addBlog is working Correctly", () => {
    beforeEach(() => {
      dom = new JSDOM(html, { runScripts: "dangerously" });
      document = dom.window.document;
      window = dom.window;
      addBlog = window.addBlog;
      list = document.querySelector(".blog-list");
      list.innerHTML = '';
    });
  test("All required elements are present with it's correct value",()=>{
    const blog = {
      title: 'Test Blog Post',
      date: 'June 21, 2023',
      content: 'This is the content of the test blog post.'
    };
    
    // Render the blog post using the addBlog function
    addBlog(blog);
    const blogTitleElement = document.querySelector('.blog-title');
    const blogDateElement = document.querySelector('.blog-date');
    const blogContentElement = document.querySelector('.blog-content');
    const blogPostElement = document.querySelector('.blog-post');
    
    expect(blogTitleElement).toBeInTheDocument();
    expect(blogDateElement).toBeInTheDocument();
    expect(blogContentElement).toBeInTheDocument();
    expect(blogTitleElement).toHaveTextContent('Test Blog Post');
    expect(blogDateElement).toHaveTextContent('June 21, 2023');
    expect(blogContentElement).toHaveTextContent('This is the content of the test blog post.');
    expect(blogTitleElement).toHaveClass('blog-title');
    expect(blogDateElement).toHaveClass('blog-date');
    expect(blogContentElement).toHaveClass('blog-content');
    expect(blogPostElement).toHaveClass('blog-post');
  })
});
describe("checking if addBlog is able to render all blogs", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    addBlog = window.addBlog;
    list = document.querySelector(".blog-list");
      list.innerHTML = '';
  });
  test('Checking if addBlog function appends three child elements to the ul', () => {
    // Create a mock blog data array with 3 objects
    const blogData = [
      {
        title: 'First Blog Post',
        date: 'January 1, 2022',
        content: 'This is the content of the first blog post.'
      },
      {
        title: 'Second Blog Post',
        date: 'February 1, 2022',
        content: 'This is the content of the second blog post.'
      },
      {
        title: 'Third Blog Post',
        date: 'March 1, 2022',
        content: 'This is the content of the third blog post.'
      }
    ];
    blogData.forEach(blog => addBlog(blog));
    const liElements = document.querySelector('.blog-list');
  
    expect(liElements.childElementCount).toBe(3);
  });
});