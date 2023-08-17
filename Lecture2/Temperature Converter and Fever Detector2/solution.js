function main(tempF){
    let result;
    let tempC = ((tempF - 32) * 5) / 9;
    
    if (tempC >= 37) {
      result = `You have a fever! Your temperature is ${tempC.toFixed(1)}°C.`
    } else {
      result = `You don't have a fever. Your temperature is ${tempC.toFixed(1)}°C.`
    }
    console.log(result);
    return result;
    }