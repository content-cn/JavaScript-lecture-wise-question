function trackFitness(exercise, duration) {
    return new Promise((resolve, reject) => {
      console.log(`Tracking fitness for ${exercise}, duration: ${duration} minutes.`);
  
      setTimeout(() => {
        if (duration > 0) {
          resolve(duration);
        } else {
          reject("Invalid duration. Please provide a positive number.");
        }
      }, Math.floor(Math.random() * 4000) + 1000);
    });
  }
  
