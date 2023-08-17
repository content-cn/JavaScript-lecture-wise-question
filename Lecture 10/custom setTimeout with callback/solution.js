function repeatAfterDelay(callback, delay) {
    return function(...args) {
      setTimeout(() => {
        callback.apply(null, args);
      }, delay);
    };
  }
  
  // Example usage:
  const calbck = (name, age) => {
    console.log(`Hello ${name}! You are ${age} years old and Welcome to our Platform.`);
  }
  const delayedGreeting = repeatAfterDelay(calbck, 2000);
  
  delayedGreeting("John", 25);
  // Output (after 2 seconds): "Hello John! You are 25 years old."
  
  delayedGreeting("Alice", 30);
  // Output (after another 2 seconds): "Hello Alice! You are 30 years old."