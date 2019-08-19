/*
    Return the Sum of Two Numbers 
    - Create a function that takes two numbers as arguments and return their sum.
*/

function addition(a, b) {
  return a + b;
}

console.log(addition(3, 2)); // 5
console.log(addition(-3, -6)); // -9
console.log(addition(7, 3)); // 10

/*
  Return the First Value of an Array
  - Create a function that takes an array and returns the first element.  
*/

function getFirstValue(arr) {
  return arr[0];
}

console.log(getFirstValue([1, 2, 3])); // 1
console.log(getFirstValue([80, 5, 100])); // 80
console.log(getFirstValue([-500, 0, 50])); // -500

/*
    Area of a Triangle
    - Write a function that takes the base and height of a triangle and return its area.
*/

function triArea(base, height) {
  return (base * height) / 2;
}

console.log(triArea(3, 2)); // 3
console.log(triArea(7, 4)); // 14
console.log(triArea(10, 10)); // 50
