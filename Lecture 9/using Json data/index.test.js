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
let likeButton;
let commentButton;
describe('checking if all the JSON are rendered properly',()=>{
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.add;
    likeButton = document.querySelector('button');
    commentButton = document.querySelector('.comment-button');
  });
  test('All objects from JSON data are added to the window', () => {
    const postsContainer = document.querySelector('#posts');
    let postsData = [
      { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
      { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
      { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
      { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
    ];
  
    postsData.forEach((post, index) => {
      const postElement = postsContainer.querySelectorAll('.post')[index];
      expect(postElement).toBeInTheDocument();
  
      const authorElement = postElement.querySelector('h3');
      expect(authorElement.textContent).toBe(post.author);
  
      const contentElement = postElement.querySelector('p');
      expect(contentElement.textContent).toBe(post.content);
  
      const imageElement = postElement.querySelector('img');
      expect(imageElement.src).toContain(post.image);
      expect(imageElement.alt).toBe('Post Image');
  
      const likeButton = postElement.querySelector('button.like-button');
      expect(likeButton).toBeInTheDocument();
  
      const commentInput = postElement.querySelector('input[type="text"]');
      expect(commentInput).toBeInTheDocument();
  
      const commentButton = postElement.querySelector('button.comment-button');
      expect(commentButton).toBeInTheDocument();
  
      const postFooter = postElement.querySelector('.post-footer');
      expect(postFooter).toBeInTheDocument();
      expect(postFooter.textContent).toContain(`Likes: ${post.likes}`);
      expect(postFooter.textContent).toContain(`Comments: ${post.comments.length}`);
  
      const commentsContainer = postElement.querySelector('.comments-container');
      expect(commentsContainer).toBeInTheDocument();
    });
  });
  
})
describe("checking the functionalities of the buttons", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.add;
    likeButton = document.querySelector('button');
    commentButton = document.querySelector('.comment-button');
  });
  test("should increase the like count once when the like button is clicked and also the color should be changed to red", () => {
    const likesBefore = parseInt(document.querySelector('.post-footer').textContent.match(/Likes: (\d+)/)[1]);
    likeButton.click();
    const button = document.querySelectorAll('.like-button')[0];
    expect(button.style.backgroundColor).toBe('red');
        
    const likesAfter = parseInt(document.querySelector('.post-footer').textContent.match(/Likes: (\d+)/)[1]);
    expect(likesAfter).toBe(likesBefore + 1);
    likeButton.click();
    const likesAfter2 = parseInt(document.querySelector('.post-footer').textContent.match(/Likes: (\d+)/)[1]);
    expect(likesAfter).toBe(likesAfter2)
  })
  test("should add a comment when the comment button is clicked", () => {
    const commentsBefore = document.querySelectorAll('.comments-container p').length;
    const commentInput = document.querySelector('input[type="text"]');
    const newComment = "Awesome post!";
    commentInput.value = newComment;
    commentButton.click();
    const commentsAfter = document.querySelectorAll('.comments-container p').length;
    expect(commentsAfter).toBe(commentsBefore + 1);
    expect(document.querySelector('.comments-container p:last-child').textContent).toBe(newComment);
  });
});