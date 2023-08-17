// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { fireEvent } from "@testing-library/dom";
// import { render, fireEvent } from '@testing-library/dom';

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");


let dom;
let document;
let window;
let postForm;
let postInput;
let imageInput;
let submitButton;

describe('Checking the working of the form', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;
    window = dom.window;

    // Set global variables
    global.window = window;
    global.document = document;

    // Get form elements
    postForm = document.getElementById('postForm');
    postInput = document.getElementById('postInput');
    imageInput = document.getElementById('imageInput');
    submitButton = document.querySelector('.submit-button');
    window.URL.createObjectURL = jest.fn();
  });

  test('Checking if Form submission adds a new post to the Posts div', () => {
    // Set values for the form inputs
    let submitForm = document.querySelector('.submit-button');
    postInput.value = 'New Post';

    // Define the file object
    const file = new window.File([], 'image.png', { type: 'image/png' });

    // Simulate a change event with the file
    fireEvent.change(imageInput, { target: { files: [file] } });

    fireEvent.submit(postForm);
    const postsContainer = document.getElementById('posts');
    const postElements = postsContainer.getElementsByClassName('post');
    expect(postElements.length).toBe(5);
    expect(postElements[4].querySelector('h3')).toHaveTextContent('You');
    expect(postElements[4].querySelector('p')).toHaveTextContent('New Post');
    // expect(postElements[4].querySelector('img')).toHaveAttribute('src', expect.stringContaining('image.jpg'));
  });
});
