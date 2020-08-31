// 1   **Addition.** Write a program to add up the numbers 1 to 20.
for (i=1; i<21; i++){
    console.log(i);
}
// 2. **There are i bottles of beer on the wall.** 
for (i=1; i < 6; i++) {
    if (i==1) {
        console.log("There is one bottle of beer on the wall.");
    } else if (i==2){
        console.log("There are two bottle of beer on the wall.");
    } else if (i==3) {
        console.log("There are three bottle of beer on the wall.");
    } else if (i==4) {
        console.log("There are four bottle of beer on the wall.");
    } else if (i==5) {
        console.log("There are five bottle of beer on the wall.");
    }
}
// ====  or if it was acceptable to write the numbers as numbers not only as words ===
for (i=1; i<6; i++){
    if(i==1){
        console.log("There is one bottle of beer on the wall.")
    } else {
        console.log(`There are ${i} bottle of beer on the wall.`);
    }
}
// 3. **The odd/even reporter.**
for (i =0; i<21; i++) {
    if (i%2 !== 0){
        console.log(`${i} odd`);
    } else {
        console.log(`${i} even`);
    }
}
// 4. **Multiplication Tables.**
for (i= 0; i<11; i++) {
    for (j=0; j<11; j++){
        let outPut = i*j;
        console.log(`${i} * ${j} = ${outPut}`);
    }
}
// 5. **Fizz Buzz**
for (i=1; i<101; i++) {
    if (i% 15 == 0){
        console.log("FizzBuzz");
    } else if(i% 3 == 0) {
        console.log("Fizz"); 
    } else if(i% 5 == 0) {
        console.log("Buzz");
    } else console.log(i);
} 
// 6. **Sum of Multiples**
let sum =0;
for (k=1; k<1001; k++){
    if(k%3 == 0 || k%5 ==0){
        sum = k + sum;
    } 
}console.log(sum);
// 7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
for (i=100; i < 1001; i+=100) {
    console.log(i);
}
// >1 2 4 8 16 32 64 128
let num =1;
for (i=1; i<=128; i=i*2) {
    console.log(i);
}
// >0 2 4 6 8 10
for (i=0; i<= 10; i+=2){
    console.log(i);
}
// >3 6 9 12 15
for (i=3; i<=15; i+=3){
    console.log(i);
}
// >9 8 7 6 5 4 3 2 1 0
for (i=9; i>=0; i--){
    console.log(i);
}
// >1 1 1 2 2 2 3 3 3 4 4 4
for (i=1; i<5; i++){
    for(j=1; j<=3; j++){
        console.log(i);
    }
}
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
for(i=1; i<=3; i++){
    for(j=0; j<=4; j++) {
        console.log(j);
    }
}
// 8. **isPalindrome.**
let str = "tarrattarrat";
for(i=0; i<=str.length-1; i++){};
for(j=str.length-1; j>=0; j--){};
if (str[i]=== str[j]){
    console.log("is Palindrome.");
    }