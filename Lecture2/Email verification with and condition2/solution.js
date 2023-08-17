function main(email){
    let result;
    let atindex = email.indexOf("@");
    let dotindex = email.lastIndexOf(".");
    let len = email.length;
    if (atindex >= 3 && dotindex - atindex >= 4 && len - dotindex - 1 >= 2) {
            result = "Welcome " + email + " to our site";
    } else {
            result = "invalid email";
    }
    return result;
}