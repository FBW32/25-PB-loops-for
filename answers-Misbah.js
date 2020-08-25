// Programming Basics: For Loops
// These exercises are designed for practising "for" loops. Print all your results to the console.

// Addition. Write a program to add up the numbers 1 to 20.
let numList = 0

for (let i = 1; i <= 20; i++){  
   numList = numList + 1;
   console.log(`${numList}`);
}  

// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
let beer = 0

for (let i = 1; i <= 5; i++){  
   beer = beer + 1;
   console.log(`There is ${beer} bottle of beer on the wall.`);
}  
// The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
let numToCheck = 0

for (let i = 1; i<= 20 ; i++){  
   numToCheck = numToCheck + 1;
   if (i % 2 == 0) { console.log(`${numToCheck} is even number` );
      
   } else {console.log(`${numToCheck} is odd number` );
      
   }
} 
// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
let results;

for (let i = 1; i<= 10 ; i++){  
   results = i * 9;
   console.log('9' + ' * ' + i + ' = ' + results)
} 
for ( results = 0; results <= 10; results++) {
   for (i = 0; i <= 10; i++) {
      answer = results * i;
     console.log(results + ' * ' + i + ' = ' + answer);
   }
  }
// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
for (i = 1; i<100; i++) {
if (i % 3 == 0) {
    if (i % 5 == 0) {console.log('fizzbuzz')}
    else {console.log('fizz')}}
else if (i % 5 == 0) {console.log('buzz')}
else {console.log(i)};
}

// Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
total = 0; 
for ( i=1; i<1000; ++i) { 
    if (i%3 == 0 || i%5 == 0) { console.log(`${i}`);  } };
// Bonus

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
let result;

for (let i = 1; i <= 10; i++) {
   result = i * 100;
   console.log(result);
}
// 1 2 4 8 16 32 64 128
let result1;

for (let i = 1; i < 8; i++) {
   result1 = Math.pow(2, i);
   console.log(result1);
}

// 0 2 4 6 8 10
let result2;

for (let i = 0; i <= 5; i++) {
   result2 = i + i ;
   console.log(result2);
}
// 3 6 9 12 15

// 9 8 7 6 5 4 3 2 1 0

// 1 1 1 2 2 2 3 3 3 4 4 4

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat