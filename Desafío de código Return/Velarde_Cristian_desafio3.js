//Fragmento de código 1
function hello() {
  console.log("hello");
}
hello(); // "hello"
console.log("Dojo"); // "Dojo"
/*********************************************************************************** */

//Fragmento de código 2
function hello() {
  console.log("hello"); // "hello"
  return 15;
}
var result = hello();
console.log("result is", result); // "result is 15"
/*********************************************************************************** */

//Fragmento de código 3
function numPlus(num) {
  console.log("num is", num); // "num is 3"
  return num + 15;
}
var result = numPlus(3);
console.log("result is", result); // "result is 18"
/*********************************************************************************** */

//Fragmento de código 4
var num = 15;
console.log(num); //15
function logAndReturn(num2) {
  console.log(num2); //10
  return num2;
}
var result = logAndReturn(10);
console.log(result); //10
console.log(num); //15
/*********************************************************************************** */

//Fragmento de código 5
var num = 15;
console.log(num); // 15
function timesTwo(num2) {
  console.log(num2); // 10
  return num2 * 2;
}
var result = timesTwo(10);
console.log(result); // 20
console.log(num); // 15
/*********************************************************************************** */

//Fragmento de código 6
function timesTwoAgain(num) {
  console.log("num is", num); // "num is 3"   // "num is 5"
  var y = num * 2; // 6            // 10
  return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log("result is", result); // "result is 16"
/*********************************************************************************** */

//Fragmento de código 7
function sumNums(num1, num2) {
  return num1 + num2;
}
console.log(sumNums(2, 3)); // 5
console.log(sumNums(3, 5)); // 8
/*********************************************************************************** */

//Fragmento de código 8
function printSumNums(num1, num2) {
  console.log(num1); // 2   // 3
  return num1 + num2;
}
console.log(printSumNums(2, 3)); // 5
console.log(printSumNums(3, 5)); // 8
/*********************************************************************************** */

//Fragmento de código 9
function sumNums(num1, num2) {
  var sum = num1 + num2;
  console.log("sum is", sum); // "sum is 5" // "sum is 8"
  return sum;
}
var result = sumNums(2, 3) + sumNums(3, 5);
console.log("result is", result); // "result is 13"
/*********************************************************************************** */

//Fragmento de código 10
function sumNums(num1, num2) {
  var sum = num1 + num2;
  console.log("sum is", sum); // "sum is 5"*  // "sum is 3" // "sum is 6"* // "sum is 3" // "sum is 5" // "sum is 8"*
  return sum;
}
var result =
  sumNums(2, 3) + // 5
  sumNums(3, sumNums(2, 1)) + // 6
  sumNums(sumNums(2, 1), sumNums(2, 3)); // 8
console.log("result is", result); //  "result is 19"
