/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}


function deleteOccur(arr, ele) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == ele) {
        arr.splice(i, 1); //Delete element from array
        i--;
      }
    }
    console.log(arr);
  }

function main() {

    /* Read your input here 
    eg: For string variables:   let str = String(readLine()); 
        For int variables: let var_name = parseInt(readLine());
		For float variables: let var_name = parseFloat(readLine());
        For arrays : const arr = readLine().replace(/\s+$/g, '').split(' ');
    */
        const arr = readLine().replace(/\s+$/g, '').split(' ');
        var ele = parseInt(readLine());
    /*
    Call your function with the input/parameters read above
    eg: let x = example(var_name, arr);
    */
    var ans = deleteOccur(arr,ele);
    // return ans;
    // console.log(ans);
    return ans;
   /*
   Log your output here 
   eg: console.log(x);
   */

}