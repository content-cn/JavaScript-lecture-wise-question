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
let User;
let Post;
describe("Checking the User Class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({User,Post} = main());
  });
  test('checking the User class getters and setters', () => {
    const user = new User("John", "john@example.com", "password123");
    expect(user.name).toBe("John");
    expect(user.email).toBe("john@example.com");
    expect(user.password).toBe("password123");
  
    user.name = "John Doe";
    expect(user.name).toBe("John Doe");
  });
});
describe("Checking the Post class", () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously" });
    document = dom.window.document;
    window = dom.window;
    main = window.main;
    ({User,Post} = main());
  });
  test('Checking the working of addlike method', () => {
    const user1 = new User("John", "john@example.com", "password123");
    const post1 = new Post(
          "John",
          "john@example.com",
          "password123",
          "My first post",
          "Lorem ipsum dolor sit amet",
          "2021-01-01"
        );
        const post2 = new Post(
          "My second post",
          "Consectetur adipiscing elit",
          "2021-01-02"
        );
        
        user1.addPost(post1);
        user1.addPost(post2);
        
        post1.addLike();
        post1.addLike();
        post2.addLike();
        expect(post1.likeCount).toBe(2);
    expect(post2.likeCount).toBe(1);
    
  });

  test('Checking if Post class can access parent element', () => {
    const user1 = new User("John", "john@example.com", "password123");
    const post1 = new Post(
          "John",
          "john@example.com",
          "password123",
          "My first post",
          "Lorem ipsum dolor sit amet",
          "2021-01-01"
        );
        const post2 = new Post(
          "My second post",
          "Consectetur adipiscing elit",
          "2021-01-02"
        );
        
        user1.addPost(post1);
        user1.addPost(post2);
        const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
        post1.displayDetails();

        expect(consoleLogMock).toHaveBeenCalledWith(expect.stringMatching(/John/));
  });
});
