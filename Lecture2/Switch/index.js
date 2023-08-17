// let jobTitle = prompt("Enter job title:");
// let yearsOfExperience = parseInt(prompt("Enter years of experience:"));
// let jobTitle = "Manager";
// let yearsOfExperience = 1;
let accessLevel;
function main(jobTitle, yearsOfExperience){
  switch (jobTitle) {
    case "Manager":
      accessLevel = "Full Access";
      break;
    case "Supervisor":
      if (yearsOfExperience >= 5) {
        accessLevel = "Full Access";
      } else {
        accessLevel = "Partial Access";
      }
      break;
    case "Associate":
      if (yearsOfExperience >= 3) {
        accessLevel = "Partial Access";
      } else {
        accessLevel = "Limited Access";
      }
      break;
    default:
      if (yearsOfExperience >= 2) {
        accessLevel = "Limited Access";
      } else {
        accessLevel = "Trainee Access";
      }
      break;
  }

  console.log("Access level: " + accessLevel);
  return accessLevel;
}
module.exports = main;