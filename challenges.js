/*
    Return the Sum of Two Numbers 
        - Create a function that takes two numbers as arguments and return their sum.
*/

function addition(a, b) {
  return a + b;
}

/* 
    Arrow Function

    const addition = (a, b) => a + b;
*/

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

/* 
    Arrow Function

    const getFirstValue = arr => arr[0];
*/

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

/* 
    Arrow Function

    const triArea = (base, height) => (base * height) / 2;
*/

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

/* 
    Arrow Function

    const nextEdge = (side1, side2) => side1 + side2 - 1;
*/

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

/* 
    Arrow Function

    const incrementByOne = num => num + 1;
*/

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

/* 
    Arrow Function

    const remainder = (num1, num2) => num1 % num2;
*/

console.log(remainder(1, 3)); // 1
console.log(remainder(-9, 45)); // -9
console.log(remainder(5, 5)); // 0

/*
    Is the Number Less than or Equal to Zero?
        - Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
*/

function lessThanOrEqualToZero(num) {
  if (num <= 0) {
    return true;
  } else {
    return false;
  }
}

/* 
    Arrow Function

    const lessThanOrEqualToZero = num => {
        if (num <= 0) {
            return true;
        } else {
            return false;
        }
    };
*/

console.log(lessThanOrEqualToZero(5)); // false
console.log(lessThanOrEqualToZero(0)); // true
console.log(lessThanOrEqualToZero(-2)); // true

/*
    The Farm Problem
        - You've got chickens (2 legs), cows (4 legs) and pigs (4 legs) on your farm. Return the total number of legs on your farm. 
*/

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

/*
    Arrow Function

    const animals = (chickens, cows, pigs) => chickens * 2 + cows * 4 + pigs * 4;
*/

console.log(animals(2, 3, 5)); // 36
console.log(animals(1, 2, 3)); // 22
console.log(animals(5, 2, 8)); // 50

/*
    Profitable Gamble
        - Create a function that takes in three arguments (prob, prize, pay) and return true if prob * prize > pay; otherwise return false
*/

function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return true;
  } else {
    return false;
  }
}

/*
    Arrow Function

    const profitableGamble = (prob, prize, pay) => {
       if (prob * prize > pay) {
            return true;
        } else {
            return false;
        }
    };
*/

console.log(profitableGamble(0.2, 50, 9)); // true
console.log(profitableGamble(0.9, 1, 2)); // false
console.log(profitableGamble(0.9, 3, 2)); // true

/*
    Recursion: Length of a String
        - Write a function that returns the length of a string. Make your function recursive.
*/

function length(str) {
  return str.length;
}

/*
    Arrow Function

    const length = str => str.length;
*/

console.log(length("apple")); // 5
console.log(length("make")); // 4
console.log(length("a")); // 1
console.log(length("")); // 0

/*
    Check if an Integer is Divisible By Five 
        - Create a function that returns true if an integer is divisible by 5, and false otherwise.
*/

function divisibleByFive(num) {
  if (num % 5 === 0) {
    return true;
  } else {
    return false;
  }
}

/*
    Arrow Function

    const divisibleByFive = num => {
        if (num % 5 === 0) {
            return true;
        } else {
            return false;
        }
    };
*/

console.log(divisibleByFive(5)); // true
console.log(divisibleByFive(-55)); // true
console.log(divisibleByFive(37)); // false

/*
    Multiple of 100
        - Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
*/

function divisible(num) {
  if (num % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

/*
    Arrow Function

    const divisible = num => {
        if (num % 100 === 0) {
            return true;
        } else {
            return false;
        }
    };
*/

console.log(divisible(1)); // false
console.log(divisible(1000)); // true
console.log(divisible(100)); // true

/*
    Is the String Empty?
        - Create a function that returns true if a string is empty and false otherwise.
*/

function isEmpty(s) {
  if (s === "") {
    return true;
  } else {
    return false;
  }
}

/*
    Arrow Function

    const isEmpty = s => {
        if (s === "") {
            return true;
        } else {
            return false;
        }
    };
*/

console.log(isEmpty("")); // true
console.log(isEmpty(" ")); // false
console.log(isEmpty("a")); // false

/*
    Concatenate First and Last Name into One String
        - Given two strings, firstName and lastName, return a single string in the format "last, first".
*/

function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

/* 
    Arrow Function

    const concatName = (firstName, lastName) => `${lastName}, ${firstName}`;
*/

console.log(concatName("First", "Last")); // "Last, First"
console.log(concatName("John", "Doe")); // "Doe, John"
console.log(concatName("Mary", "Jane")); // "Jane, Mary"

/*
    Compare Strings by Count of Characters
        - Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
*/

function comp(str1, str2) {
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

/* 
    Arrow Function

    const comp = (str1, str2) => {
        if (str1.length === str2.length) {
            return true;
        } else {
            return false;
        }
    };
*/

console.log(comp("AB", "CD")); // true
console.log(comp("ABC", "DE")); // false
console.log(comp("hello", "edabit")); // false

/*
    Find the Index (Part 1)
        - Create a function that finds the index of a given item.
*/

function search(arr, item) {
  return arr.indexOf(item);
}

/* 
    Arrow Function

    const search = (arr, item) => arr.indexOf(item);
*/

console.log(search([1, 5, 3], 5)); // 1
console.log(search([9, 8, 3], 3)); // 2
console.log(search([1, 2, 3], 4)); // -1

/* 
    Name Greeting
        - Create a function that takes a name and returns a greeting. Don't use a normal function but use an "arrow function"
*/

const helloName = name => `Hello ${name}!`;

console.log(helloName("Gerald")); // "Hello Gerald!"
console.log(helloName("Tiffany")); // "Hello Tiffany!"
console.log(helloName("Ed")); // "Hello Ed!"

/* 
    Find the Index (Part 2)
        - Create a function that finds the index of a given item if the array is sorted. Use 'search2' instead of 'search' for the function's identifier.
*/

function search2(arr, item) {
  return arr.indexOf(item);
}

/* 
    Arrow Function

    const search2 = (arr, item) => arr.indexOf(item);
*/

console.log(search2([1, 2, 3, 4], 3)); // 2
console.log(search2([2, 4, 6, 8, 10], 8)); // 3
console.log(search2([1, 3, 5, 7, 9], 11)); // -1
