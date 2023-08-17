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
// describe("addBlog", () => {
//   beforeEach(() => {
//     dom = new JSDOM(html, { runScripts: "dangerously" });
//     document = dom.window.document;
//     window = dom.window;
//     addBlog = window.addBlog;
    
//   });
//   test("addBlog is defined",()=>{
//     expect(addBlog).toBeDefined();
//   })
// });
//   describe("addBlog working", () => {
//     beforeEach(() => {
//       dom = new JSDOM(html, { runScripts: "dangerously" });
//       document = dom.window.document;
//       window = dom.window;
//       addBlog = window.addBlog;
//       list = document.querySelector(".blog-list");
//       list.innerHTML = '';
//     });
//   test("addBlog is working properly",()=>{
//     const blog = {
//       title: 'Test Blog Post',
//       date: 'June 21, 2023',
//       content: 'This is the content of the test blog post.'
//     };
    
//     // Render the blog post using the addBlog function
//     addBlog(blog);
//     const blogTitleElement = document.querySelector('.blog-title');
//     const blogDateElement = document.querySelector('.blog-date');
//     const blogContentElement = document.querySelector('.blog-content');
//     const blogPostElement = document.querySelector('.blog-post');
    
//     expect(blogTitleElement).toBeInTheDocument();
//     expect(blogDateElement).toBeInTheDocument();
//     expect(blogContentElement).toBeInTheDocument();
//     expect(blogTitleElement).toHaveTextContent('Test Blog Post');
//     expect(blogDateElement).toHaveTextContent('June 21, 2023');
//     expect(blogContentElement).toHaveTextContent('This is the content of the test blog post.');
//     expect(blogTitleElement).toHaveClass('blog-title');
//     expect(blogDateElement).toHaveClass('blog-date');
//     expect(blogContentElement).toHaveClass('blog-content');
//     expect(blogPostElement).toHaveClass('blog-post');
//   })
// });
// describe("all blogs are added present in the array", () => {
//   beforeEach(() => {
//     dom = new JSDOM(html, { runScripts: "dangerously" });
//     document = dom.window.document;
//     window = dom.window;
//     addBlog = window.addBlog;
//     list = document.querySelector(".blog-list");
//       list.innerHTML = '';
//   });
//   test('addBlog function appends three child elements to the ul', () => {
//     // Create a mock blog data array with 3 objects
//     const blogData = [
//       {
//         title: 'First Blog Post',
//         date: 'January 1, 2022',
//         content: 'This is the content of the first blog post.'
//       },
//       {
//         title: 'Second Blog Post',
//         date: 'February 1, 2022',
//         content: 'This is the content of the second blog post.'
//       },
//       {
//         title: 'Third Blog Post',
//         date: 'March 1, 2022',
//         content: 'This is the content of the third blog post.'
//       }
//     ];
//     blogData.forEach(blog => addBlog(blog));
//     const liElements = document.querySelector('.blog-list');
  
//     expect(liElements.childElementCount).toBe(3);
//   });
// });

describe("Checking the Moveup button", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    addBlog = window.addBlog;
    list = document.querySelector(".blog-list");
    list.innerHTML = '';
  });
  test('Move up button should move the blog post up in the list', () => {
    // Create two blog posts
    const blog1 = {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'This is the content of the first blog post.'
    };
    const blog2 = {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    };
    const blog3 = {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    };
    addBlog(blog1);
    addBlog(blog2);
    addBlog(blog3);

    const moveUpButtons = document.querySelectorAll('.move-up');

    // Simulate clicking the move up button for the second blog post
    moveUpButtons[1].click();
    const blogList = document.querySelector('.blog-list')
    // Check if the order has changed
    expect(blogList.children[0].textContent).toContain(blog2.title);
    expect(blogList.children[1].textContent).toContain(blog1.title);
    expect(blogList.children[2].textContent).toContain(blog3.title);
  });

});
describe("Checking  the Movedown button", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    addBlog = window.addBlog;
    list = document.querySelector(".blog-list");
    list.innerHTML = '';
  });
  test('Move down button should move the blog post down in the list', () => {
    // Create three blog posts
    const blog1 = {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'This is the content of the first blog post.'
    };
    const blog2 = {
      title: 'Second Blog Post',
      date: 'February 1, 2022',
      content: 'This is the content of the second blog post.'
    };
    const blog3 = {
      title: 'Third Blog Post',
      date: 'March 1, 2022',
      content: 'This is the content of the third blog post.'
    };
    addBlog(blog1);
    addBlog(blog2);
    addBlog(blog3);

    const moveDownButtons = document.querySelectorAll('.move-down');

    // Simulate clicking the move down button for the second blog post
    moveDownButtons[1].click();
    const blogList = document.querySelector('.blog-list')
    // Check if the order has changed
    expect(blogList.children[0].textContent).toContain(blog1.title);
    expect(blogList.children[1].textContent).toContain(blog3.title);
    expect(blogList.children[2].textContent).toContain(blog2.title);
  });
});

describe("Checking the Delete button", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    addBlog = window.addBlog;
    list = document.querySelector(".blog-list");
    list.innerHTML = '';
  });
  test('Delete button should remove the blog post from the list', () => {
    // Create a blog post
    const blog = {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'This is the content of the first blog post.'
    };
    addBlog(blog);

    const deleteButton = document.querySelector('.delete');

    // Simulate clicking the delete button
    deleteButton.click();
    const blogList = document.querySelector('.blog-list')
    // Check if the blog post is removed from the list
    expect(blogList.children.length).toBe(0);
  });

});
