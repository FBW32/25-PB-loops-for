//1. **Addition.**
let sum = 0;
for (i = 1; i <= 20; i++) {
  sum = sum + i;
}
console.log(sum); //210

//2. **There are i bottles of beer on the wall.**
for (i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottle of beer on the wall.`);
  } else {
    console.log(`There are ${i} bottles of beer on the wall.`);
  }
}

//3. **The odd/even reporter.**
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }
}

//4.**Multiplication Tables.**
console.log("4.**Multiplication Tables.**");
for (i = 0; i <= 10; i++) {
  mult = i * 9;
  console.log(i + " * 9 = " + mult);
}
//**Bonus:**
console.log("**Bonus**");
for (i = 1; i <= 10; i++) {
  for (n = 0; n <= 10; n++) {
    mult = i * n;
    console.log(n + " * " + i + " = " + mult);
  }
}
//5. **Fizz Buzz**
console.log("5. **Fizz Buzz**");
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//6. **Sum of Multiples**
console.log("6. **Sum of Multiples**");
let result = 0;
for (i = 3; i <= 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    result = result + i;
  }
}

console.log(result);
//**Bonus**
console.log("**Bonus** ");

//1 den 10 a i*100
let result1 = "";
for (i = 1; i <= 10; i++) {
  result1 = result1 + i * 100 + " ";
}
console.log(result1);
//1 den 7 ye i nin 2.kuvveti
let result2 = "";
for (i = 0; i <= 7; i++) {
  result2 = result2 + Math.pow(2, i) + " ";
}
console.log(result2);

//0 dan 10 a even
let result3 = "";
for (i = 0; i <= 10; i + 2) {
  toString(i);
  result3 = result3 + i + " ";
}
console.log(result3);
//0 dan 15 e 3 un katlari
//9 dan 0 a print i
//1 den 4 e 3 kere i yazdir.(1 1 1 2 2 2 3 3 3 4 4 4)
//3 times from 0 to 4

//8. **isPalindrome.**
console.log("8. **isPalindrome.**");
let word = "madam";
let arrWord = word.split("");
console.log(arrWord);
let isPalindrome = true;
for (i = 0; i <= Math.floor(arrWord.length / 2); i++) {
  if (arrWord[i] !== arrWord[arrWord.length - i - 1]) {
    isPalindrome = false;
    console.log(isPalindrome);
    break;
  } else {
    continue;
  }
}
if (isPalindrome === true) {
  console.log("It is a Palindrome");
}
