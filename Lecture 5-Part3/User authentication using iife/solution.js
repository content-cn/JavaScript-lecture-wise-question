function main() {
    let userAuth = (function () {
      let registeredUsers = [];
  
      function registerUser(username, password) {
        if(checkCredentials(username,password)){
          return `The user is already registered`;
        }
        else{
        registeredUsers.push({ username: username, password: password });
        return `The user have been added to the registeredUser array`;
        }
      }
  
      function checkCredentials(username, password) {
        for (let i = 0; i < registeredUsers.length; i++) {
          if (
            registeredUsers[i].username === username &&
            registeredUsers[i].password === password
          ) {
            return true;
          }
        }
        return false;
      }
  
      return {
        registerUser: registerUser
      };
    })();
    return userAuth;
  }
  