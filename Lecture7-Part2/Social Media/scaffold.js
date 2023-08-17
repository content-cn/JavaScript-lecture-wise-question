//Do not alter the starter code.
function main(){
//Create your class "User" here with all the properties and methods

//Create your class "Post" here inheritting the User class with all the properties and methods as mentioned
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
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
  return {User,Post};
}
main();