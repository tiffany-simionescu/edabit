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

/*
    Maximum Edge of a Triangle
        - Create a function that finds the maximum range of a triangles third edge.
*/

function nextEdge(side1, side2) {
  return side1 + side2 - 1;
}

console.log(nextEdge(8, 10)); // 17
console.log(nextEdge(5, 7)); // 11
console.log(nextEdge(9, 2)); // 10

/*
    Return the Next Number from the Integer Passed
        - Create a function that takes a number as an argument, increments the number by +1 and returns the result.
*/

function incrementByOne(num) {
  return num + 1;
}

console.log(incrementByOne(0)); // 1
console.log(incrementByOne(9)); // 10
console.log(incrementByOne(-3)); // -2

/*
    Return the Remainder from Two Numbers
        - There is a single operator in JavaScript capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first provider divided by the second parameter will have a remainder, possibly zero. Return that value. (% = modulo)
*/

function remainder(num1, num2) {
  return num1 % num2;
}

console.log(remainder(1, 3)); // 1
console.log(remainder(-9, 45)); // -9
console.log(remainder(5, 5)); // 0
