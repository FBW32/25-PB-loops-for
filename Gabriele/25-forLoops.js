// 1. Addition.
// Write a program to add up the numbers 1 to 20.

for (let i = 1; i <= 20; i++) {
    console.log(i);
};


// 2. There are i bottles of beer on the wall.
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.


let beerBot = 0;
for (i = 0; i < 5; i++) {
    if (beerBot <= i) {
        beerBot++;
        console.log(`2. There are ${beerBot} bottles of beer on the wall`)

    }
//     beerBot = i;
//    console.log(`2. There are ${beerBot} bottles of beer on the wall`);
}; 
console.log(`There are ${beerBot} bottles of beer on the wall`);

// or

let bottleOfBeer = 0;
for (i = 1; i <= 5; i++) {
    bottleOfBeer = bottleOfBeer + 1;
    console.log(`3 .There are ${bottleOfBeer} bottles of beer on the wall`);
};


// 3. The odd/even reporter.
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

// let num = 0;
for (num = 0; num <= 20; num++) {

  if (num % 2 === 0) {console.log(`${num} is even`)}
   else {console.log(`${num} is odd`)};
};


// 4 .Multiplication Tables.
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

// let iterNumb = 0;

for (i = 0; i <=10; i++) {
    iterNumb = i;
    console.log(iterNumb * 9); 
};

// 5. Fizz Buzz
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 1; i <= 100; i++) {
    myNumb = i;
    if (myNumb % 3 === 0) {console.log("Fizz")} 
    else if (myNumb % 5 === 0) {console.log("Buzz")} 
    else if ((myNumb % 3 === 0) && (myNumb % 5 === 0)) {
        console.log("FizzBuzz")
    } else {
        console.log(myNumb);
    } 
};

// 6. Sum of Multiples
// Write a program to add the multiples of 3 and 5 under 1000.

for (i = 3; i <= 1000; i++) {
    myVar = i;
    if (myVar % 3 === 0 && myVar % 5 === 0) {
        console.log(myVar);
    }
};

// 7. Write programs that produce the following outputs:

// 100 200 300 400 500 600 700 800 900 1000
for (i = 100; i <= 1000; i++) {
    num = i;
   if (i % 100 === 0) {
       console.log(`first task of bonus: ${i}`);
   }
};


// 1 2 4 8 16 32 64 128 ---> task not done




// 0 2 4 6 8 10

for (i = 0; i <= 10; i++) {
    num = i;
    if (num % 2 === 0) {
        console.log(`3rd task of bonus: ${num}`);
    }
};


// 3 6 9 12 15

for (i = 3; i <= 15; i++) {
    num = i;
    if (num % 3 === 0) {
        console.log(`4th task of bonus: ${num}`);
    }
};


// 9 8 7 6 5 4 3 2 1 0

for (i = 9; i >= 0; i--) {
    num = i;
    console.log(`5th task of bonus: ${num}`);
};


// 1 1 1 2 2 2 3 3 3 4 4 4

for (i = 111; i <= 444; i++) {
    num = i;
    if (num % 111 === 0) {
        console.log(`6th task of bonus: ${num}`);
    }
};

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4  ---->  task not done


// 8. isPalindrome.
// Write a program to check whether a word is a palindrome or not.
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat

let word = "madam";
for (i = word.length - 1; i >= 0; i--) {
   console.log(word[i]);
};
