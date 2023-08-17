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
let Message;
describe("Checking the ChangeStatus method", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    Message = main();
    global.console.log = jest.fn();
  }); 
   test('should be able to change the status correctly', () => {
    // Call the static method to change the status
    Message.status = false;
    Message.totalMessages = 0;
    Message.changeStatus();

    // Assert that the console.log function was called with the correct message
    expect(console.log).toHaveBeenCalledWith('The status has been changed to online');
    expect(Message.status).toBe(true);

    // Call the static method again to toggle the status
    Message.changeStatus();

    // Assert that the console.log function was called with the correct message
    expect(console.log).toHaveBeenCalledWith('The status has been changed to offline');
    expect(Message.status).toBe(false);
  });
});
describe("Checking the sendMessage Property", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    Message = main();
    global.console.log = jest.fn();
  }); 
  test('Checking if it is printing the output correctly and incrementing the totalMessage correctly', () => {
    // Create a new instance of Message
    const myMessage = new Message('John', 'Jane', 'Hello');

    // Call the sendMessage method
    myMessage.sendMessage();

    // Assert that the console.log function was called with the correct message
    expect(console.log).toHaveBeenCalledWith(
      "The message 'Hello' has been sent from 'John' to 'Jane'"
    );

    // Assert that the totalMessages has been incremented
    expect(Message.totalMessages).toBe(1);
    myMessage.sendMessage();
    expect(Message.totalMessages).toBe(2);
  });
});