require('text-encoding').TextEncoder;
import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { fireEvent } from '@testing-library/dom';

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf8");

let dom;
let document;
let window;
let fetch;

describe("The final output has been printed correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    fetch = jest.fn();
  });
  it('renders cards on button click', async () => {
    // Simulate clicking the Fight button
    const fightButton = document.getElementById('fight');
    fireEvent.click(fightButton);

    // Wait for the asynchronous actions to complete (adjust timing as needed)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Assertions using jest-dom
    const card1 = document.getElementById('card1');
    const card2 = document.getElementById('card2');
    const name = card1.querySelector('#name');
    console.log(name.textContent);
    expect(card1).toBeInTheDocument();
    expect(card2).toBeInTheDocument();
  });
  // it('displays player 1 correctly', () => {
  //   const response = {
  //     name: 'Pikachu',
  //     abilities: [
  //       { ability: { name: 'static' } },
  //       { ability: { name: 'lightning-rod' } },
  //     ],
  //     base_experience: 112,
  //     sprites: {
  //       other: {
  //         dream_world: {
  //           front_default: 'pikachu.png',
  //         },
  //       },
  //     },
  //   };

  //   // Create a test container
  //   // const container = document.createElement('div');

  //   // Call the displayPlayer1 function
  //   displayPlayer1(response);

  //   // Assertions using jest-dom
  //   expect(document.querySelector('#p1_name')).toHaveTextContent('john');
  //   expect(document.querySelector('#p1_score')).toHaveTextContent('Score: 0');
  //   // ... add more assertions for other elements
  // });

  // // Test the displayPlayer2 function
  // it('displays player 2 correctly', () => {
  //   // Similar to the previous test, but for player 2
  // });

  // // Test the button click event
  // it('updates scores after clicking Fight button', async () => {
  //   // Create a test document
  //   const document = document.createElement('div');

  //   // Add elements to the document that are needed for the test

  //   // Fire a click event on the Fight button
  //   fireEvent.click(document.querySelector('#fight'));

  //   // Wait for some time (you can adjust the time accordingly)
  //   await new Promise(resolve => setTimeout(resolve, 1500));

  //   // Assertions using jest-dom
  //   // Check if the scores have been updated correctly
  //   expect(document.querySelector('#p1_score')).toHaveTextContent('Score: 1');
  //   expect(document.querySelector('#p2_score')).toHaveTextContent('Score: 0');
  // });
});