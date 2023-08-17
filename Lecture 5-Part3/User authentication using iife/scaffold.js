function main(){
  
  const userAuth = (
    //Implement your IIFE here 
    //It should return the registerUser function
  )();
    

console.log(userAuth.registerUser("user1","password123"));
//Output: The user have been added to the registeredUser array
console.log(userAuth.registerUser("user1","password123"));
//Output : The user is already registered
return userAuth;
}