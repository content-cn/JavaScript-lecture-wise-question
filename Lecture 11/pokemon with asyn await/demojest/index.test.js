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
let main;
describe("The final output has been printed correctly", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.add;
    
  
  });
  test('Pokemon game functionality', async () => {
    // Mock the fetch function to return a sample response
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({
        name: 'Pikachu',
        sprites: {
          other: {
            dream_world: {
              front_default: 'pikachu.png'
            }
          }
        },
        abilities: [
          { ability: { name: 'ability1' } },
          { ability: { name: 'ability2' } },
        ],
        base_experience: 100
      }),
    });
  
    // Render the game
    // Assuming the game is already rendered as the HTML is included in the document
  
    // Find the "Fight" button and click it
    const fightButton = document.querySelector('#fight');
    fireEvent.click(fightButton);
  
    // Wait for the fetch and rendering to complete
    await new Promise(resolve => setTimeout(resolve, 2000));
  
    // Check if player1 and player2 information is displayed correctly
    const player1Name = document.querySelector('#p1_name');
    const player2Name = document.querySelector('#p2_name');
    expect(player1Name.textContent).toBe('john');
    expect(player2Name.textContent).toBe('Alice');
  
    // Check if the scores are displayed correctly
    const player1Score = document.querySelector('#p1_score');
    const player2Score = document.querySelector('#p2_score');
    expect(player1Score.textContent).toBe('Score: 1');
    expect(player2Score.textContent).toBe('Score: 0');
  
    // Check if the images are displayed correctly
    const player1Image = document.querySelector('#card1 img');
    const player2Image = document.querySelector('#card2 img');
    expect(player1Image.getAttribute('src')).toBe('pikachu.png');
    expect(player2Image.getAttribute('src')).toBe('pikachu.png');
  
    // Check if abilities are displayed correctly
    const player1Abilities = document.querySelector('#card1 #abilities');
    const player2Abilities = document.querySelector('#card2 #abilities');
    expect(player1Abilities.textContent).toBe('Abilities');
    expect(player2Abilities.textContent).toBe('Abilities');
  });
});