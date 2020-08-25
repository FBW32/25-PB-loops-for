/* # Programming Basics: For Loops

These exercises are designed for practising "for" loops. Print all your results to the console.

1. **Addition.** 
Write a program to add up the numbers 1 to 20. */

for(let i=1;i<=20;i++){
    console.log(`Number ${i}`)
}
//expeacted return
/* Number 1
Number 2
Number 3
Number 4
Number 5
Number 6
Number 7
Number 8
Number 9
Number 10
Number 11
Number 12
Number 13
Number 14
Number 15
Number 16
Number 17
Number 18
Number 19
Number 20 */
/* 

//////////////////////////////////////////////////////////////////////////////////
2. **There are i bottles of beer on the wall.** 
Write a program that will output, "There is one bottle of beer on the wall.
" "There are two bottles of beer on the wall" up until there are five bottles.  */
//////////////////////////////////////////////////////////////////////////////////

for(i=1;i<=5;i++){
    console.log(`There is ${i} bottles of beer on the wall.`);
}

//////////////////////////////////////////////////////////////////////////////////
//expeacted return
/* [There is 1 bottles of beer on the wall.
There is 2 bottles of beer on the wall.
There is 3 bottles of beer on the wall.
There is 4 bottles of beer on the wall.
There is 5 bottles of beer on the wall.] */
//////////////////////////////////////////////////////////////////////////////////
/* 3. **The odd/even reporter.**
Write a program that will iterate from 0 to 20. For each iteration, it will check
if the current number is even or odd, and report that to the screen (e.g. "2 is even"). */
//////////////////////////////////////////////////////////////////////////////////
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(`${i} is odd Number `);
    }else{
        console.log(`${i} is even Number `); 
    }
}
//////////////////////////////////////////////////////////////////////////////////
//expected return

/* [1 is even Number
2 is odd Number
3 is even Number
4 is odd Number
5 is even Number
6 is odd Number
7 is even Number
8 is odd Number
9 is even Number
10 is odd Number
11 is even Number
12 is odd Number
13 is even Number 
14 is odd Number
15 is even Number
16 is odd Number
17 is even Number
18 is odd Number
19 is even Number
20 is odd Number]
*/

//////////////////////////////////////////////////////////////////////////////////

/* 4. **Multiplication Tables.**
Write a program that will iterate from 0 to 10. For each iteration of the for loop,
 it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). */

 //////////////////////////////////////////////////////////////////////////////////
console.log();
console.log();
 for (var i=0;i<=10;i++){
     var x=i*9;
     console.log(`${i}*9=${x}`);
     for(let z=0;z<=10;z++){
         console.log(`${z}*${i}=${z*i}`)
     }
 }

//////////////////////////////////////////////////////////////////////////////////
//expected return
/*
[0*9=0
0*0=0
1*0=0
2*0=0
3*0=0
4*0=0
5*0=0
6*0=0
7*0=0
8*0=0
9*0=0
10*0=0
1*9=9
0*1=0
1*1=1
2*1=2
3*1=3
4*1=4
5*1=5
6*1=6
7*1=7
8*1=8
9*1=9
10*1=10
2*9=18
0*2=0
1*2=2
2*2=4
3*2=6
4*2=8
5*2=10
6*2=12
7*2=14
8*2=16
9*2=18
10*2=20
3*9=27
0*3=0
1*3=3
2*3=6
3*3=9
4*3=12
5*3=15
6*3=18
7*3=21
8*3=24
9*3=27
10*3=30
4*9=36
0*4=0
1*4=4
2*4=8
3*4=12
4*4=16
5*4=20
6*4=24
7*4=28
8*4=32
9*4=36
10*4=40
5*9=45
0*5=0
1*5=5
2*5=10
3*5=15
4*5=20
5*5=25
6*5=30
7*5=35
8*5=40
9*5=45
10*5=50
6*9=54
0*6=0
1*6=6
2*6=12
3*6=18
4*6=24
5*6=30
6*6=36
7*6=42
8*6=48
9*6=54
10*6=60
7*9=63
0*7=0
1*7=7
2*7=14
3*7=21
4*7=28
5*7=35
6*7=42
7*7=49
8*7=56
9*7=63
10*7=70
8*9=72
0*8=0
1*8=8
2*8=16
3*8=24
4*8=32
5*8=40
6*8=48
7*8=56
8*8=64
9*8=72
10*8=80
9*9=81
0*9=0
1*9=9
2*9=18
3*9=27
4*9=36
5*9=45
6*9=54
7*9=63
8*9=72
9*9=81
10*9=90
10*9=90
0*10=0
1*10=10
2*10=20
3*10=30
4*10=40
5*10=50
6*10=60
7*10=70
8*10=80
9*10=90
10*10=100]
*/
//////////////////////////////////////////////////////////////////////////////////

/* 5. **Fizz Buzz**
Write a program which iterates the integers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples
of five print "Buzz".For numbers which are multiples of both three and five print "FizzBuzz". */

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
console.log();
console.log();
console.log();
for(i=1;i<=100;i++){
        if((i%5==0 )&&(i%3==0)){
            console.log("FizzBuzz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            if(i%3==0){
                console.log("Fizz");
            }else{
                console.log(i);
            }
        }
}
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

//expected reture
/* [1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz] */

/* 6. **Sum of Multiples**
Write a program to add the multiples of 3 and 5 under 1000. */
for(let i=0;i<=1000;i++){
    console.log(`${i}*3=${i*3}`);
    console.log(`${i}*5=${i*5}`);
}

//expected return 
/* [500*3=1500
    500*5=2500
    501*3=1503
    501*5=2505
    502*3=1506] */ // etc

/* 7. Write programs that produce the following outputs: 
>100 200 300 400 500 600 700 800 900 1000
/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
>1 2 4 8 16 32 64 128
>
>0 2 4 6 8 10
>
>3 6 9 12 15
>
>9 8 7 6 5 4 3 2 1 0
>
>1 1 1 2 2 2 3 3 3 4 4 4
>
>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */

for(i=100;i<=1000;i=i+100){
    console.log(i)
}
// expected return  [100 200 300 400 500 600 700 800 900 1000]

for(i=1;i<=128;i*=2){
    console.log(i)
}

// expected return [1 2 4 8 16 32 64 128]

for(i=0;i<=10;i+=2){
    console.log(i)
}
// expected return [0 2 4 6 8 10]

for(i=3;i<=15;i+=3){
    console.log(i)
}
//expected return [3 6 9 12 15]

for(let i=1;i<=4;i++){
    console.log(i);
    console.log(i);
    console.log(i);
} 
//expected return [1 1 1 2 2 2 3 3 3 4 4 4]

for(let i=0;i<=3;i++){
    for(let i=0;i<=4;i++){
        console.log(i);
    }
}
// expected return [0 1 2 3 4 0 1 2 3 4 0 1 2 3 4] 


let word="I did did I"
let wordreverse = word.split("").reverse().join('');
if(word===wordreverse){
    console.log("isPalindrome? true");
}else{
    console.log("isPalindrome? false");
}

//expected returen [isPalindrome true]
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////