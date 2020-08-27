// Programming Basics: For Loops

/* 1. Addition. Write a program to add up the numbers 1 to 20. */
let add = 0;
for (let i = 1; i <= 20 ; i++) {
    add += i;
}
console.log(`Addition of numbers from 1 to 20 is  ${add}`); // Addition of numbers from 1 to 20 is  210

/* 2. There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. */
let text = "";
for (let i = 1; i <= 5; i++) {
    text += `There are ${i} bottles of beer on the wall.`;
    
}
console.log(text);
// There are 1 bottles of beer on the wall.There are 2 bottles of beer on the wall.There are 3 bottles of beer on the wall.There are 4 bottles of beer on the wall.There are 5 bottles of beer on the wall.

/* 3. The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even"). */
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}
/*
    0is even
    1is odd
    2is even
    3is odd
    4is even
    5is odd
    6is even
    7is odd
    8is even
    9is odd
    10is even
    11is odd
    12is even
    13is odd
    14is even
    15is odd
    16is even
    17is odd
    18is even
    19is odd
    20is even
*/

/* 4. Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total). */
let multiplier = 9;
for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(i + ' * ' + multiplier + ' = ' + result);
}
/*
    0 * 9 = 0
    1 * 9 = 9
    2 * 9 = 18
    3 * 9 = 27
    4 * 9 = 36
    5 * 9 = 45
    6 * 9 = 54
    7 * 9 = 63
    8 * 9 = 72
    9 * 9 = 81
    10 * 9 = 90
*/

// BONUS Exercise:
for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let i = 1; i <= 10; i++) {
      let result = multiplier * i;
      console.log(i + ' * ' + multiplier + ' = ' + result);
    }
   }

/* 5. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0, b = i % 5 == 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
  }

/* 6. Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000. */
let sum = 0;
for (let i = 0; i < 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0))
    {
        sum += i;
    }
}
console.log(`Sum of multiples of 3 and 5 under 1000: ${sum}`); // Sum of multiples of 3 and 5 under 1000: 233168

/* 7. Write programs that produce the following outputs:
    100 200 300 400 500 600 700 800 900 1000

    1 2 4 8 16 32 64 128

    0 2 4 6 8 10

    3 6 9 12 15

    9 8 7 6 5 4 3 2 1 0

    1 1 1 2 2 2 3 3 3 4 4 4

    0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/
let num1 = "";
for (let i = 100; i <= 1000; i += 100) {
    num1 += i + " ";
  }
  console.log(num1); // 100 200 300 400 500 600 700 800 900 1000 

let num2 = "";
for (let i = 1; i <= 128; i *= 2) {
    num2 += i + " ";
   // console.log(num2);
  }
console.log(num2); // 1 2 4 8 16 32 64 128 

let num3 = "";
for (let i = 0; i <= 10; i += 2) {
    num3 += i + " ";
  }
console.log(num3);  // 0 2 4 6 8 10 

let num4 = "";
for (let i = 3; i <= 15; i += 3) {
  num4 += i + " ";
}
console.log(num4); // 3 6 9 12 15 

let num5 = "";
for (let i = 9; i >= 0; i -= 1) {
    num5 += i + " ";
  }
console.log(num5);  // 9 8 7 6 5 4 3 2 1 0 

let num6 = "";
for (let i = 1; i <= 4; i++) {
    for (let g = 0; g < 3; g++) {
        num6 += i + " ";
    }
  }
console.log(num6);  // 1 1 1 2 2 2 3 3 3 4 4 4 

let num7 = "";
for (let g = 0; g < 3; g++) {
    for (let i = 0; i <= 4; i++) {
        num7 += i + " ";
    }
  }
console.log(num7);  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 

/* 8. isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat */
let myString = "madam";
let palindrome = [];

for (let i = 0; i < myString.length; i++) {
    palindrome = myString.split("").reverse("").join("");
    if(myString === palindrome) {
        answer1 = `${myString} is a palindrome `;
    } else {
        answer1 = `${myString} is not a palindrome `;
    }
}
console.log(answer1); // madam is a palindrome 
