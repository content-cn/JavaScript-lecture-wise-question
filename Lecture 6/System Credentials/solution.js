function User(displayName) {
    this.displayName = displayName;
  }
  
  const systemCredentials = {
    username: "system",
    password: "pass123"
  };
  
  User.prototype.login = function (enteredUsername, enteredPassword) {
    if (this.username === enteredUsername && this.password === enteredPassword) {
      console.log("Login successful!");
    } else {
      console.log("Login failed!");
    }
  };
  
  // Example usage with bind:
  const user = new User("John Doe");
  
  const loginFunction = user.login.bind(systemCredentials);
  
  loginFunction("system", "pass123"); // Expected output: "Login successful!"
  loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login failed!"
  