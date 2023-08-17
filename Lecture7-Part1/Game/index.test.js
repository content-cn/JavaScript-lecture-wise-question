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
let Warrior,Mage,Archer,Hero,Enemy,Character;

describe("Checking the working of Character constructor function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Character,Hero,Warrior,Mage,Archer,Enemy}= main())
  });
  test("Checking if Character is defined",()=>{
    expect(Character).toBeDefined();
  })
});
describe("Checking the working of Warrior constructor function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Character,Hero,Warrior,Mage,Archer,Enemy}= main())
  });
  test('checking for properties and methods' , () => {
    const warrior = new Warrior(100, 50, 30, 'sword');
    expect(warrior.health).toBe(100);
    expect(warrior.strength).toBe(50);
    expect(warrior.agility).toBe(30);
    expect(warrior.weaponType).toBe('sword');
  });
});
describe("Checking the working of Mage constructor function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Character,Hero,Warrior,Mage,Archer,Enemy}= main())
  });
  test('Checking th e properties and methods', () => {
    const mage = new Mage(80, 20, 50, 'fireball');
    expect(mage.health).toBe(80);
    expect(mage.strength).toBe(20);
    expect(mage.agility).toBe(50);
    expect(mage.spellType).toBe('fireball');
  });
});
describe("Checking the Archer constructor function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Character,Hero,Warrior,Mage,Archer,Enemy}= main())
  });
  test(' Checking the Archer\'s properties and methods', () => {
    const archer = new Archer(90, 40, 40, 'poison');
    expect(archer.health).toBe(90);
    expect(archer.strength).toBe(40);
    expect(archer.agility).toBe(40);
    expect(archer.arrowType).toBe('poison');
  });
});
describe("Checking the Hero constructor function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Character,Hero,Warrior,Mage,Archer,Enemy}= main())
  });
  test('Checking the properties and methods of ', () => {
    const hero = new Hero(120, 60, 40, 'axe', 'ice', 'double damage');
    expect(hero.health).toBe(120);
    expect(hero.strength).toBe(60);
    expect(hero.agility).toBe(40);
    expect(hero.weaponType).toBe('axe');
    expect(hero.spellType).toBe('ice');
    expect(hero.specialAbility).toBe('double damage');
  });
});

describe("Checking the Enemy constructor function", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({Character,Hero,Warrior,Mage,Archer,Enemy}= main())
  });
  test('Checking the properties and method of Enemy', () => {
    const enemy = new Enemy(200, 80, 20, 'goblin');
    expect(enemy.health).toBe(200);
    expect(enemy.strength).toBe(80);
    expect(enemy.agility).toBe(20);
    expect(enemy.enemyType).toBe('goblin');
  });
});