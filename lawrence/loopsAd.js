//1. **Addition.** 
//Write a program to add up the numbers 1 to 20.

let numSer = 20
let numLine = "";

for (let i = 1; i <= numSer; i++) {

    let adNum = numSer + i;
    numLine += adNum;
}

console.log(numLine);

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

//2. There are i bottles of beer on the wall. 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. 

let bottle = 0;

for (i = 2; i <= 5; i++){
    
    bottleOut = bottle + i;
    
    console.log(`there is ${bottleOut} bottle of beer in wall`);
}
// there is 2 bottle of beer in wall
// there is 3 bottle of beer in wall
// there is 4 bottle of beer in wall
// there is 5 bottle of beer in wall

//3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

for (let i = 0; i <= 20; i++){

    evenNum = (i % 2);

    console.log((evenNum === 0)? `${i} is even` : `${i} is odd`);
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
// 16 is even
// 17 is odd
// 18 is even
// 19 is odd
// 20 is even


//4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

let numTm = 9;

for (let i = 0; i <= 10; i++){
    
    numSum = i * numTm;

    console.log(`${i}* ${numTm}`,numSum);
}

// 0* 9 0
// 1* 9 9
// 2* 9 18
// 3* 9 27
// 4* 9 36
// 5* 9 45
// 6* 9 54
// 7* 9 63
// 8* 9 72
// 9* 9 81
//10* 9 90


// 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++){

    fizzNum = (i % 3);
    buzzNum = (i % 5);
    botNum = ((i % 3 == 0) && (i % 5 == 0));

    if (fizzNum === 0){
        console.log("Fizz");
    } else if (buzzNum === 0){  
        console.log("Buzz");
    } else if (botNum){
        console.log("FizzBuzz");
    }
}

// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// Fizz
// Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// Fizz

//6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.

let linF = " ";
for (let i = 1; i <= 100; i++){

    fizzNum = (i % 3);
    buzzNum = (i % 5);
    botSum = ((i % 3 == 0) + (i % 5 == 0));
    
    linF+= botSum + " ";
}
console.log(linF); //  0 0 1 0 1 1 0 0 1 1 0 1 0 0 2 0 0 1 0 1 1 0 0 1 1 0 1 0 0 2 0 0 1 0 1 1 0 0 1 1 0 1 0 0 2 0 0 1 0 1 1 0 0 1 1 0 1 0 0 2 0 0 1 0 1 1 0 0 1 1 0 1 0 0 2 0 0 1 0 1 1 0 0 1 1 0 1 0 0 2 0 0 1 0 1 1 0 0 1 1 

// 7. Write programs that produce the following outputs: 

let linF2 = "";

for (let i = 1; i <= 10; i++){
    mulT = i * 100;

    linF2+= mulT + " "
}
console.log(linF2); // 100 200 300 400 500 600 700 800 900 1000


let linF3 = "";
let count = 8;
let sumCount = 0;

for (let i = 0; i <= count; i++){
    
    sumCount = sumCount + i * 2;

    linF3+= sumCount + " "
}
console.log(linF3);

//8. **isPalindrome.**