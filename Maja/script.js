/* 1. Addition. Write a program to add up the numbers 1 to 20. */
let num = 20;
for (let i = 1; i <= 20; i++) {
  num = num + 1;
  console.log(num);
}
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29
// 30
// 31
// 32
// 33
// 34
// 35
// 36
// 37
// 38
// 39
// 40

/* 2. There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. */

let bottles = 0;
for (let i = 1; i <= 5; i++) {
  bottles = bottles + 1;
  console.log(`There is ${bottles} bottle of beer on the wall.`);
}
// There is 1 bottle of beer on the wall.
// There is 2 bottle of beer on the wall.
// There is 3 bottle of beer on the wall.
// There is 4 bottle of beer on the wall.
// There is 5 bottle of beer on the wall.

/* 3. The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
 */

for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
}
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd
// 6 is even
// 7 is odd
// 8 is even
// 9 is odd
// 10 is even
// 11 is odd
// 12 is even
// 13 is odd
// 14 is even
// 15 is odd
// 16 is even
// 17 is odd
// 18 is even
// 19 is odd
// 20 is even

/* 4. Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total). */

let x;
for (let i = 0; i <= 100; i++) {
  x = i * 9;
  console.log(i + "*" + "9" + "=" + x);
}

/* 5. Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz". */

/* let y; */
for (let i = 1; i <= 100; i++) {
  /*   y += i; */
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
// 1
// 2
// Fizz
// 3
// 4
// 5
// Fizz
// 6
// 7
// 8
// Fizz
// 9
// 10
// 11
// Fizz
// 12
// 13
// 14
// Fizz
// FizzBuzz
// 16
// 17
// Fizz
// 18
// 19
// 20
// Fizz
// 21
// 22
// 23
// Fizz
// 24
// 25
// 26
// Fizz
// 27
// 28
// 29
// Fizz
// FizzBuzz
// 31
// 32
// Fizz
// 33
// 34
// 35
// Fizz
// 36
// 37
// 38
// Fizz
// 39
// 40
// 41
// Fizz
// 42
// 43
// 44
// Fizz
// FizzBuzz
// 46
// 47
// Fizz
// 48
// 49
// 50
// Fizz
// 51
// 52
// 53
// Fizz
// 54
// 55
// 56
// Fizz
// 57
// 58
// 59
// Fizz
// FizzBuzz
// 61
// 62
// Fizz
// 63
// 64
// 65
// Fizz
// 66
// 67
// 68
// Fizz
// 69
// 70
// 71
// Fizz
// 72
// 73
// 74
// Fizz
// FizzBuzz
// 76
// 77
// Fizz
// 78
// 79
// 80
// Fizz
// 81
// 82
// 83
// Fizz
// 84
// 85
// 86
// Fizz
// 87
// 88
// 89
// Fizz
// FizzBuzz
// 91
// 92
// Fizz
// 93
// 94
// 95
// Fizz
// 96
// 97
// 98
// Fizz
// 99
// 100

/* 6. Sum of Multiples. Write a program to add the multiples of 3 and 5 under 1000.
 */
let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i;
  }
}
console.log("total is", sum); // total is 33165

/* Bonus
Write programs that produce the following outputs: */

// 100 200 300 400 500 600 700 800 900 1000
let bonus1 = 0;
for (let i = 0; i < 10; i++) {
  bonus1 += 100;
  console.log("bosus1 is", bonus1);
}

// bosus1 is 100
// bosus1 is 200
// bosus1 is 300
// bosus1 is 400
// bosus1 is 500
// bosus1 is 600
// bosus1 is 700
// bosus1 is 800
// bosus1 is 900
// bosus1 is 1000

// 1 2 4 8 16 32 64 128
let bonus2 = 1;
for (let i = 1; i < 72; i *= 2) {
  bonus2 = bonus2 + i;
  console.log("bosus2 is", bonus2);
}

// bosus2 is 2
// bosus2 is 4
// bosus2 is 8
// bosus2 is 16
// bosus2 is 32
// bosus2 is 64
// bosus2 is 128

// 0 2 4 6 8 10
let bonus3;
for (let i = 0; i <= 5; i++) {
  bonus3 = i + i;
  console.log("bosus3 is", bonus3);
}
// bosus3 is 0
// bosus3 is 2
// bosus3 is 4
// bosus3 is 6
// bosus3 is 8
// bosus3 is 10

// 3 6 9 12 15
let bonus4;
for (let i = 0; i <= 5; i++) {
  bonus4 = i + i + i;
  console.log("bosus4 is", bonus4);
}
// bosus4 is 0
// bosus4 is 3
// bosus4 is 6
// bosus4 is 9
// bosus4 is 12
// bosus4 is 15

// 9 8 7 6 5 4 3 2 1 0
/* let bonus5;
for (let i = 9; i >= 0; i--) {
  bonus5 += i;
  console.log("bosus5 is", bonus5);
} */
