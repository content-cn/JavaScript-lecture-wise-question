//Refactor the given impure function to pure function.
function removeVowels(obj) {
  obj.value = obj.value.replace(/[aeiou]/gi, "");
}

let strObj = { value: "Hello World" };
// For pure function
// newObj = removeVowels(strObj);
removeVowels(strObj);
console.log(strObj.value);