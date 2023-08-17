function trackFitness(exercise, duration) {
    //Implement your promise here
  }
  trackFitness("Running", 30)
    .then((duration) => {
      console.log(`Total duration: ${duration} minutes.`);
    })
    .catch((error) => {
      console.log(`Failed to track fitness: ${error}`);
    });