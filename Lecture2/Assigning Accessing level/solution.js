function main(jobTitle,yearsOfExperience){
    let accessLevel;

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