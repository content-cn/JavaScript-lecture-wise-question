function removeVowels(obj) {
  return { value: obj.value.replace(/[aeiou]/gi, "") };
}

const strObj = { value: "Hello World" };
const modifiedObj = removeVowels(strObj);
console.log(modifiedObj.value);
console.log(strObj.value)
