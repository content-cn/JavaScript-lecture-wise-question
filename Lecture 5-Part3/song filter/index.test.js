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
let filterSongs;
describe("Checking if the function filterSongs is working correctly", () => {
  const songs = [
    { title: "All of Me", artist: "John Legend", genre: "Pop", duration: 248 },
    { title: "Despacito", artist: "Luis Fonsi", genre: "Pop", duration: 279 },
    { title: "Someone Like You", artist: "Adele", genre: "Pop", duration: 285 },
    { title: "Thriller", artist: "Michael Jackson", genre: "Pop", duration: 357 },
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: 354 },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock", duration: 480 },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Rock", duration: 355 },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Rock", duration: 302 },
    { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: 390 },
    { title: "Thrash Unreal", artist: "Against Me!", genre: "Punk", duration: 292 },
    { title: "London Calling", artist: "The Clash", genre: "Punk", duration: 189 }
  ];
  
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    // main = window.main;
    filterSongs = window.filterSongs;

  });

  const mockFilter = jest.spyOn(Array.prototype, 'filter');  
  
  test('checking the function for input1',()=>{
    const filters = { genre: "Rock", duration: 350 };
    const expectedFilteredSongs = [
      { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock", duration: 354 },
      { title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock", duration: 480 },
      { title: "Sweet Child O' Mine", artist: "Guns N' Roses", genre: "Rock", duration: 355 },
      { title: "Hotel California", artist: "Eagles", genre: "Rock", duration: 390 }
    ];

    const result = filterSongs(songs, filters);

    expect(result).toEqual(expectedFilteredSongs);
})
test('checking the function for empty song',()=>{
  const filters = { genre: "Pop", duration: 500 };
  const expectedFilteredSongs = [];

  const result = filterSongs(songs, filters);

  expect(result).toEqual(expectedFilteredSongs);  
})
test('checking if filter is used for sloving the problem',()=>{
  const filters = { genre: "Pop", duration: 500 };
  const expectedFilteredSongs = [];

  const result = filterSongs(songs, filters);
  expect(mockFilter).toHaveBeenCalled();
})

});
