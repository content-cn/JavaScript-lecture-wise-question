//Complete the repeatAfterDelay function.
function repeatAfterDelay(callback, delay) {
    //Implement your function here.
  }
  
  // Example usage:
  const delayedGreeting = repeatAfterDelay((name, age) => {
    console.log(`Hello ${name}! You are ${age} years old.`);
  }, 2000);
  
  delayedGreeting("John", 25);
  // Output (after 2 seconds): "Hello John! You are 25 years old."
  
  delayedGreeting("Alice", 30);
  // Output (after another 2 seconds): "Hello Alice! You are 30 years old."