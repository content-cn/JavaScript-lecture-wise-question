function main(marks){
    let result;
  if (marks >= 90) {
    result = "Your grade is A";
  } else if (marks >= 80 && marks <= 89) {
    result = "Your grade is B";
  } else if (marks >= 70 && marks <= 79) {
    result = "Your grade is C";
  } else if (marks >= 60 && marks <= 69) {
    result = "Your grade is D";
  } else {
    result = "Your grade is F";
  }
  console.log(result);
  return result;
  }