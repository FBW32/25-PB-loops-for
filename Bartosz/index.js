// Programming Basics: For Loops

// These exercises are designed for practising "for" loops. Print all your results to the console.

// 1. **Addition.** 
// Write a program to add up the numbers 1 to 20.

let sum = 0;
for (let i = 1; i <= 20 ; i++) {
    sum = sum + i;
}

console.log(`sum = ${sum}`); // sum = 210

// 2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 

for (let bottles = 0; bottles <= 5; bottles++){
    console.log(`There's ${bottles} bottles of beer on the wall`);
}

// There's 0 bottles of beer on the wall
// There's 1 bottles of beer on the wall
// There's 2 bottles of beer on the wall
// There's 3 bottles of beer on the wall
// There's 4 bottles of beer on the wall
// There's 5 bottles of beer on the wall

// 3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 15; i++) {
    if (i === 0) {
            console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
            console.log(i + " is even");   
    }
    else {
            console.log(i + " is odd");
    }
}

// 0 is even
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

// 4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

let multiply = 9;

for (let i = 0; i <= 10; i++){
    let result = multiply * i;
    console.log(i + ' * ' + multiply + ' = ' + result);
}

// 0 * 9 = 0
// 1 * 9 = 9
// 2 * 9 = 18
// 3 * 9 = 27
// 4 * 9 = 36
// 5 * 9 = 45
// 6 * 9 = 54
// 7 * 9 = 63
// 8 * 9 = 72
// 9 * 9 = 81
// 10 * 9 = 90

// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 0; i <= 100; i++){
    if (i % 3 === 0  && i % 5 === 0){
        console.log('FizzBuzz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else {
        console.log(i);
    }
}

// FizzBuzz
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz
// Fizz
// 52
// 53
// Fizz
// Buzz
// 56
// Fizz
// 58
// 59
// FizzBuzz
// 61
// 62
// Fizz
// 64
// Buzz
// Fizz
// 67
// 68
// Fizz
// Buzz
// 71
// Fizz
// 73
// 74
// FizzBuzz
// 76
// 77
// Fizz
// 79
// Buzz
// Fizz
// 82
// 83
// Fizz
// Buzz
// 86
// Fizz
// 88
// 89
// FizzBuzz
// 91
// 92
// Fizz
// 94
// Buzz
// Fizz
// 97
// 98
// Fizz
// Buzz


// 6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.
let count = 0;
for (let i = 0; i < 1000; i++) {
    if( i % 3 == 0 || i % 5 == 0){
        count += i;
    }
} 
console.log(count);  // 233168

// **Bonus** 

// 7. Write programs that produce the following outputs: 

// >100 200 300 400 500 600 700 800 900 1000
for (let i = 100; i <= 1000; i++){
    if (i % 100 == 0){
        console.log(i);
    }
}

// 100
// 200
// 300
// 400
// 500
// 600
// 700
// 800
// 900
// 1000

// >1 2 4 8 16 32 64 128
for (let i = 1; i <= 128; i *= 2){    
        console.log(i);    
}

// 1
// 2
// 4
// 8
// 16
// 32
// 64
// 128

// >0 2 4 6 8 10
for (let i = 0; i <= 10; i += 2){    
    console.log(i);    
}

// 0
// 2
// 4
// 6
// 8
// 10

// >3 6 9 12 15
for (let i = 3; i <= 15; i += 3){    
    console.log(i);    
}

// 3
// 6
// 9
// 12
// 15

// >9 8 7 6 5 4 3 2 1 0
for (let i = 9; i >= 0; i--){    
    console.log(i);    
}

// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0


// >1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 1; i <= 4; i++){    
    for (let x = 0; x < 3; x++)  
    console.log(i);
}

// 1
// 1
// 1
// 2
// 2
// 2
// 3
// 3
// 3
// 4
// 4
// 4

// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for (let x = 0; x < 3; x++) {
    for (i = 0; i <= 4; i++) {
        console.log(i);
    }
}

// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 2
// 3
// 4

// 8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat
