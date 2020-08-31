// Programming Basics: For Loops
// These exercises are designed for practising "for" loops. Print all your results to the console.

// Addition. Write a program to add up the numbers 1 to 20.
let num1 = 0;
for (let i = 1; i <= 20; i++) {
    num1 = num1 + i;
    console.log(num1);
    /*1
3
6
10
15
21
28
36
45
55
66
78
91
105
120
136
153
171
190
210 */
}

// There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
let num2 = 0;
for (let i = 1; i <= 1; i++) {
    num2 = i;
    console.log(`There is ${num2} bottle of beer on the wall.`);
    for (let i = 2; i <= 5; i++) {
        num2 = i;
        console.log(`There are ${num2} bottles of beer on the wall.`);   
    }
    /*
There is 1 bottle of beer on the wall.
There are 2 bottles of beer on the wall.
There are 3 bottles of beer on the wall.
There are 4 bottles of beer on the wall.
There are 5 bottles of beer on the wall.
*/
}

// The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

num3 = 0;

for (let i = 1; i <= 20; i++) {
    num3 = i;
    if (num3 % 2 == 0) {
        console.log(`${num3} is even`);
    }
    else {
        console.log(`${num3} is odd`) 
    }
}
/*
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd
10 is even
11 is odd
12 is even
13 is odd
14 is even
15 is odd
16 is even
17 is odd
18 is even
19 is odd
20 is even
*/

// Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

let num4 = 0;
for (let i = 0; i <= 10; i++) {
    num4 = i * 9;
   console.log(`${i} * 9 = ${num4}`);
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
10 * 9 = 90 */
} console.log(`Final Result = ${num4}`); //Final Result = 90

//OR

let num5 = 9;
for (let i = 0; i <= 10; i++) {
    num6 = num5 * i;
    console.log(`${i}  * ${num5}  =  ${num6}`);
}
/*0  * 9  =  0
1  * 9  =  9
2  * 9  =  18
3  * 9  =  27
4  * 9  =  36
5  * 9  =  45
6  * 9  =  54
7  * 9  =  63
8  * 9  =  72
9  * 9  =  81
10  * 9  =  90 */

//AND BONUS
for (let num5 = 0; num5 <= 10; num5++) {
 for (let i = 0; i <= 10; i++) {
   num6 = num5 * i;
   console.log(`${i}  * ${num5}  =  ${num6}`);
 }
}
/*
0  * 0  =  0
1  * 0  =  0
2  * 0  =  0
3  * 0  =  0
4  * 0  =  0
5  * 0  =  0
6  * 0  =  0
7  * 0  =  0
8  * 0  =  0
9  * 0  =  0
10  * 0  =  0
0  * 1  =  0
1  * 1  =  1
2  * 1  =  2
3  * 1  =  3
4  * 1  =  4
5  * 1  =  5
6  * 1  =  6
7  * 1  =  7
8  * 1  =  8
9  * 1  =  9
10  * 1  =  10
0  * 2  =  0
1  * 2  =  2
2  * 2  =  4
3  * 2  =  6
4  * 2  =  8
5  * 2  =  10
6  * 2  =  12
7  * 2  =  14
8  * 2  =  16
9  * 2  =  18
10  * 2  =  20
0  * 3  =  0
1  * 3  =  3
2  * 3  =  6
3  * 3  =  9
4  * 3  =  12
5  * 3  =  15
6  * 3  =  18
7  * 3  =  21
8  * 3  =  24
9  * 3  =  27
10  * 3  =  30
0  * 4  =  0
1  * 4  =  4
2  * 4  =  8
3  * 4  =  12
4  * 4  =  16
5  * 4  =  20
6  * 4  =  24
7  * 4  =  28
8  * 4  =  32
9  * 4  =  36
10  * 4  =  40
0  * 5  =  0
1  * 5  =  5
2  * 5  =  10
3  * 5  =  15
4  * 5  =  20
5  * 5  =  25
6  * 5  =  30
7  * 5  =  35
8  * 5  =  40
9  * 5  =  45
10  * 5  =  50
0  * 6  =  0
1  * 6  =  6
2  * 6  =  12
3  * 6  =  18
4  * 6  =  24
5  * 6  =  30
6  * 6  =  36
7  * 6  =  42
8  * 6  =  48
9  * 6  =  54
10  * 6  =  60
0  * 7  =  0
1  * 7  =  7
2  * 7  =  14
3  * 7  =  21
4  * 7  =  28
5  * 7  =  35
6  * 7  =  42
7  * 7  =  49
8  * 7  =  56
9  * 7  =  63
10  * 7  =  70
0  * 8  =  0
1  * 8  =  8
2  * 8  =  16
3  * 8  =  24
4  * 8  =  32
5  * 8  =  40
6  * 8  =  48
7  * 8  =  56
8  * 8  =  64
9  * 8  =  72
10  * 8  =  80
0  * 9  =  0
1  * 9  =  9
2  * 9  =  18
3  * 9  =  27
4  * 9  =  36
5  * 9  =  45
6  * 9  =  54
7  * 9  =  63
8  * 9  =  72
9  * 9  =  81
10  * 9  =  90
0  * 10  =  0
1  * 10  =  10
2  * 10  =  20
3  * 10  =  30
4  * 10  =  40
5  * 10  =  50
6  * 10  =  60
7  * 10  =  70
8  * 10  =  80
9  * 10  =  90
10  * 10  =  100
*/



// Fizz Buzz Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

let num7 = 0;
for ( let i = 1; i <= 100 ; i++) {
    num7 = i;
if (num7 % 3 == 0) {
    console.log("Fizz");
    //console.log(`Fizz, because ${num7} is multiple of 3`);
}
else if (num7 % 5 == 0) {
console.log("Buzz");
    //console.log(`Buzz, because ${num7} is multiple of 5 `);
}
if ((num7 % 3 == 0) &&  (num7 % 5 === 0)) {
    console.log("FizzBuzz");
//console.log(`FizzBuzz, because ${num7} is multiple of 3 and 5 `);
}
}
/*
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
Fizz
Fizz
FizzBuzz
Fizz
Buzz
Fizz
Fizz
Buzz
 
*/

// Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.

sum = 0;
for(i = 1; i < 1000; i++){
if((i % 3 === 0) || (i % 5 ===0)){
sum += i;
 //console.log(sum);
}
} console.log(sum); //233168
//∑k1=13333k1+∑k2=11995k2−∑k3=16615k3=166833+99500−33165=233168,
//https://www.infoescola.com/matematica/somatorios/
// aqui é ||, porque compreende os múltiplos de 3 e 5, não apenas quando for múltiplo de ambos!
// +=	x += y	x = x + y



// Bonus

// Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
let num8 = 0;
let num9 = 10;
for ( i = 1 ; i <=10; i++) {
    num8 = num9 * i;
    console.log(num8);
}
/*10
20
30
40
50
60
70
80
90
100 */

// 1 2 4 8 16 32 64 128

// 0 2 4 6 8 10

// 3 6 9 12 15

// 9 8 7 6 5 4 3 2 1 0

// 1 1 1 2 2 2 3 3 3 4 4 4

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat