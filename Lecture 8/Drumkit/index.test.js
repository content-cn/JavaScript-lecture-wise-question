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
describe("Checking if event is added to each buttons", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    
    window.HTMLMediaElement.prototype.play = jest.fn();
  });
  // test("Checking the w button ",()=>{
  //   const drumButton = document.querySelector('.w.drum');
  //   const mockEvent = new window.KeyboardEvent('keypress', { key: 'w' });
  //   drumButton.dispatchEvent(mockEvent);
  //   const audioElements = document.querySelectorAll('audio');
  //   audioElements.forEach(audioElement => {
  //     expect(audioElement.play).toHaveBeenCalled();
  //   });
  // })
  test("Checking the w button", () => {
    const drumButton = document.querySelector('.w.drum');
    const mockEvent = new window.KeyboardEvent('keydown', { key: 'w' });
    drumButton.dispatchEvent(mockEvent);
    const audioElement = document.querySelector('audio'); // Select only one audio element
    expect(audioElement.play).toHaveBeenCalled();
});
  test("Checking the a button",()=>{
    const drumButton = document.querySelector('.a.drum');
    const mockEvent = new window.KeyboardEvent('keypress', { key: 'a' });
    drumButton.dispatchEvent(mockEvent);
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
      expect(audioElement.play).toHaveBeenCalled();
    });
  })
  test("Checking the s button",()=>{
    const drumButton = document.querySelector('.s.drum');
    const mockEvent = new window.KeyboardEvent('keypress', { key: 's' });
    drumButton.dispatchEvent(mockEvent);
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
      expect(audioElement.play).toHaveBeenCalled();
    });
  })
  test("Checking the d button",()=>{
    const drumButton = document.querySelector('.d.drum');
    const mockEvent = new window.KeyboardEvent('keypress', { key: 'd' });
    drumButton.dispatchEvent(mockEvent);
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
      expect(audioElement.play).toHaveBeenCalled();
    });
  })
  test("Checking the j button",()=>{
    const drumButton = document.querySelector('.j.drum');
    const mockEvent = new window.KeyboardEvent('keypress', { key: 'j' });
    drumButton.dispatchEvent(mockEvent);
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
      expect(audioElement.play).toHaveBeenCalled();
    });
  })
  test("Checking the k button",()=>{
    const drumButton = document.querySelector('.k.drum');
    const mockEvent = new window.KeyboardEvent('keypress', { key: 'k' });
    drumButton.dispatchEvent(mockEvent);
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
      expect(audioElement.play).toHaveBeenCalled();
    });
  })
  test("Checking the l button",()=>{
    const drumButton = document.querySelector('.l.drum');
    const mockEvent = new window.KeyboardEvent('keypress', { key: 'l' });
    drumButton.dispatchEvent(mockEvent);
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audioElement => {
      expect(audioElement.play).toHaveBeenCalled();
    });
  })
});