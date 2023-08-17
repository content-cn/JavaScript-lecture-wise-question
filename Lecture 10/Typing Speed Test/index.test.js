// require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { screen, render, fireEvent, act } from '@testing-library/dom';

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let main;
jest.useFakeTimers();
describe('Checking the Typing Speed Test', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.add;
    // Reset timers and input value before each test
    jest.clearAllTimers();
    document.querySelector('#input').value = '';
  });

  test('Checking if Starts is working correctly and on complete required functionalities are acheived', () => {

    const sentenceElement = document.querySelector('#sentence');
    const inputElement = document.querySelector('#input');
    const startButton = document.querySelector('#start-btn');
    const timerElement = document.querySelector('#timer');
    const speedElement = document.querySelector('#speed');
    const accuracyElement = document.querySelector('#accuracy');
    const resultElement = document.querySelector('#result');
    const retryButton = document.querySelector('#retry-btn');

    // Click the start button
    // fireEvent.click(startButton);
    startButton.click();
    // Assert that the input is enabled and focused
    expect(inputElement.disabled).toBeFalsy();
    // expect(document.activeElement).toEqual(inputElement);

    // Simulate typing
    // fireEvent.change(inputElement, { target: { value: 'The quick brown fox jumps over the lazy dog.' } });
    inputElement.value = 'The quick brown fox jumps over the lazy dog.';
    // Advance timers by 30 seconds
    jest.advanceTimersByTime(30000);

    // Assert that the typing test has ended
    // expect(inputElement.disabled).toBeTruthy();
    expect(resultElement).toBeVisible();

    // Assert the test results
    expect(speedElement.textContent).toBeDefined();
    expect(accuracyElement.textContent).toBeDefined();

    // Click the retry button
    fireEvent.click(retryButton);

    // Assert that the input is enabled and the test is reset
    expect(inputElement.disabled).toBeFalsy();
    expect(inputElement.value).toBe('');
    expect(startButton.disabled).toBeFalsy();
    expect(timerElement.textContent).toBe('00:30');
    expect(resultElement).not.toBeVisible();
  });
  test('Updates timer every second', () => {
    // Render the HTML
    // document.body.innerHTML = html;

    // Get the timer element
    const timerElement = document.getElementById('timer');

    // Start the test
    const startButton = document.getElementById('start-btn');
    startButton.click();

    // Advance the timer by 1 second
    jest.advanceTimersByTime(5000);
    console.log(timerElement.textContent);
    // Assert that the timer has updated to 29 seconds
    // expect(timerElement.textContent).toBe('00:29');

    // Advance the timer by another 1 second
    jest.advanceTimersByTime(1000);

    // Assert that the timer has updated to 28 seconds
    expect(timerElement.textContent).toBe('00:28');

    // Advance the timer by 10 seconds
    jest.advanceTimersByTime(10000);

    // Assert that the timer has updated to 18 seconds
    expect(timerElement.textContent).toBe('00:18');
  });
});
