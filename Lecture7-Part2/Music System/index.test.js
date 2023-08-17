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
let Media, Song,  Podcast,  PopSong,  RockSong,  NewsPodcast,  ComedyPodcast;
describe("Checking the Media Class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    // Media = main.Media;
    ({
      Media,
      Song,
      Podcast,
      PopSong,
      RockSong,
      NewsPodcast,
      ComedyPodcast
    }= main());
  });
  test("checking the working of Methods present in Media",()=>{
    const media = new Media("Title", "Artist", 180);
  expect(media.getTitle()).toBe("Title");
  expect(media.getArtist()).toBe("Artist");
  expect(media.getDuration()).toBe(180);
  })
});
describe("Checking the PopSong Class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    // Media = main.Media;
    ({
      Media,
      Song,
      Podcast,
      PopSong,
      RockSong,
      NewsPodcast,
      ComedyPodcast
    }= main());
  });
  test("checking the working of Methods present in PoSong",()=>{
    const popSong = new PopSong("Shape of You", "Ed Sheeran", 235, "÷", "Pop", 0.825, 0.652);
    expect(popSong.getTitle()).toBe("Shape of You");
    expect(popSong.getArtist()).toBe("Ed Sheeran");
    expect(popSong.getDuration()).toBe(235);
    expect(popSong.getAlbum()).toBe("÷");
    expect(popSong.getGenre()).toBe("Pop");
    expect(popSong.getDanceability()).toBe(0.825);
    expect(popSong.getEnergy()).toBe(0.652);
  })
});

describe("Checking the RockSong Class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    // Media = main.Media;
    ({
      Media,
      Song,
      Podcast,
      PopSong,
      RockSong,
      NewsPodcast,
      ComedyPodcast
    }= main());
  });
  test("checking the working of Methods present in RockSong",()=>{
    const rockSong = new RockSong("Stairway to Heaven", "Led Zeppelin", 482, "Led Zeppelin IV", "Rock", 0.056, 63.5);
  expect(rockSong.getTitle()).toBe("Stairway to Heaven");
  expect(rockSong.getArtist()).toBe("Led Zeppelin");
  expect(rockSong.getDuration()).toBe(482);
  expect(rockSong.getAlbum()).toBe("Led Zeppelin IV");
  expect(rockSong.getGenre()).toBe("Rock");
  expect(rockSong.getDistortion()).toBe(0.056);
  expect(rockSong.getTempo()).toBe(63.5);
  })
});

describe("Checkijng the Newspodcast class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    // Media = main.Media;
    ({
      Media,
      Song,
      Podcast,
      PopSong,
      RockSong,
      NewsPodcast,
      ComedyPodcast
    }= main());
  });
  test("checking the working of Methods present in NewsPodcast",()=>{
    const newsPodcast = new NewsPodcast("The Daily", "The New York Times", 30, "Michael Barbaro", "News", "The New York Times");
  expect(newsPodcast.getTitle()).toBe("The Daily");
  expect(newsPodcast.getArtist()).toBe("The New York Times");
  expect(newsPodcast.getDuration()).toBe(30);
  expect(newsPodcast.getHost()).toBe("Michael Barbaro");
  expect(newsPodcast.getTopic()).toBe("News");
  expect(newsPodcast.getSource()).toBe("The New York Times");
  })
});

describe("Checking the ComedyPodcast Class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    // Media = main.Media;
    ({
      Media,
      Song,
      Podcast,
      PopSong,
      RockSong,
      NewsPodcast,
      ComedyPodcast
    }= main());
  });
  test("checking the working of Methods present in Media comedyPodcast",()=>{
    const comedyPodcast = new ComedyPodcast("My Favorite Murder", "Karen Kilgariff and Georgia Hardstark", 60, "Karen Kilgariff and Georgia Hardstark", "Comedy", "Karen Kilgariff and Georgia Hardstark", 4.8);
  expect(comedyPodcast.getTitle()).toBe("My Favorite Murder");
  expect(comedyPodcast.getArtist()).toBe("Karen Kilgariff and Georgia Hardstark");
  expect(comedyPodcast.getDuration()).toBe(60);
  expect(comedyPodcast.getHost()).toBe("Karen Kilgariff and Georgia Hardstark");
  expect(comedyPodcast.getTopic()).toBe("Comedy");
  expect(comedyPodcast.getComedian()).toBe("Karen Kilgariff and Georgia Hardstark");
  expect(comedyPodcast.getRating()).toBe(4.8);
  })
});
