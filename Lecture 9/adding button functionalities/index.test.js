
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let post1;
let likeButton;
let commentButton;
describe("Checking the button functionalities", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    likeButton = document.querySelector('.like-button');
    commentButton = document.querySelector('.comment-button');
  });

  test("should increase the like count once when the like button is clicked", () => {
    const likesBefore = parseInt(document.querySelector('.post-footer').textContent.match(/Likes: (\d+)/)[1]);
    likeButton.click();
    // expect(likeButton.style.backgroundColor).toBe('red');
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