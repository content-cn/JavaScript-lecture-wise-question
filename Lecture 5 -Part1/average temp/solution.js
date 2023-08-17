
    const weather = [
      { city: "New York", temperature: 50, pressure: 1015 },
      { city: "Los Angeles", temperature: 70, pressure: 1010 },
      { city: "Chicago", temperature: 40, pressure: 1012 },
      { city: "Houston", temperature: 75, pressure: 1020 },
      { city: "Miami", temperature: 80, pressure: 1017 }
    ];
    const pressureThreshold = 1015;
  
    function calculateAverage(pressureThreshold) {
      const temperatureSum = weather
        .filter((place) => place.pressure >= pressureThreshold) // filter out cities with pressure below threshold
        .map((place) => place.temperature) // map each object to just the temperature
        .reduce((total, temp) => total + temp, 0); // reduce the temperature values to find the total temperature of the remaining cities
      const cityCount = weather.filter(
        (place) => place.pressure >= pressureThreshold
      ).length; // get the number of remaining cities
  
      const averageTemperature = temperatureSum / cityCount; // divide the total temperature by the number of remaining cities
  
      console.log(
        `The average temperature of the cities with a pressure value above ${pressureThreshold} is ${averageTemperature.toFixed(
          1
        )}.`
      );
      return averageTemperature.toFixed(1);
    }