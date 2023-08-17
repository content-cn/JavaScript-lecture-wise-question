function main(){
    class User {
    #name;
    #email;
    #password;
    #posts;
    constructor(name, email, password) {
      this.#name = name;
      this.#email = email;
      this.#password = password;
      this.#posts = [];
    }
  
    get name() {
      return this.#name;
    }
  
    set name(name) {
      this.#name = name;
    }
  
    get email() {
      return this.#email;
    }
  
    set email(email) {
      this.#email = email;
    }
  
    get password() {
      return this.#password;
    }
  
    set password(password) {
      this.#password = password;
    }
  
    addPost(post) {
      this.#posts.push(post);
    }
  
    deletePost(post) {
      const index = this.#posts.indexOf(post);
      if (index !== -1) {
        this.#posts.splice(index, 1);
      }
    }
    displayPosts() {
      console.log(`Posts by ${this.#name}:`);
      this.#posts.forEach((post) => {
        console.log(`- ${post.title}`);
      });
    }
  }
  
  class Post extends User {
    #title;
    #content;
    #date;
    #likeCount;
    constructor(name, email, password, title, content, date) {
      super(name, email, password);
      this.#title = title;
      this.#content = content;
      this.#date = date;
      this.#likeCount = 0;
    }
  
    get title() {
      return this.#title;
    }
  
    set title(title) {
      this.#title = title;
    }
  
    get content() {
      return this.#content;
    }
  
    set content(content) {
      this.#content = content;
    }
  
    get date() {
      return this.#date;
    }
  
    set date(date) {
      this.#date = date;
    }
  
    get likeCount() {
      return this.#likeCount;
    }
  
    addLike() {
      this.#likeCount++;
    }
  
    displayDetails() {
      console.log(`Owner: ${this.name}`);
      console.log(`Title: ${this.#title}`);
      console.log(`Content: ${this.#content}`);
      console.log(`Date: ${this.#date}`);
      console.log(`Likes: ${this.#likeCount}`);
    }
  }
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
  
  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post
  
  post1.displayDetails();
  // Output:
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  return {User,Post}
}
main();