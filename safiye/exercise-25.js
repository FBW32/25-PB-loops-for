//1. **Addition.**
let sum = 0;
for (let i = 1; i <= 20; i++) {
  sum = sum + i;
}
console.log(sum); //210

//2. **There are i bottles of beer on the wall.**
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log(`There is ${i} bottle of beer on the wall.`);
  } else {
    console.log(`There are ${i} bottles of beer on the wall.`);
  }
}

//3. **The odd/even reporter.**
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even.");
  } else {
    console.log(i + " is odd.");
  }
}

//4.**Multiplication Tables.**
console.log("4.**Multiplication Tables.**");
for (let i = 0; i <= 10; i++) {
  mult = i * 9;
  console.log(i + " * 9 = " + mult);
}
//**Bonus:**
console.log("**Bonus**");
for (let i = 1; i <= 10; i++) {
  for (n = 0; n <= 10; n++) {
    mult = i * n;
    console.log(n + " * " + i + " = " + mult);
  }
}
//5. **Fizz Buzz**
console.log("5. **Fizz Buzz**");
for (let i = 1; i <= 100; i++) {
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
for (let i = 3; i <= 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    result = result + i;
  }
}

console.log(result);
//**Bonus**
console.log("**Bonus** ");

let result1 = "";
for (let i = 1; i <= 10; i++) {
  result1 = result1 + i * 100 + " ";
}
console.log(result1);
//----------###-------
let result2 = "";
for (let i = 0; i <= 7; i++) {
  result2 = result2 + Math.pow(2, i) + " ";
}
console.log(result2);

//------###-----------
let result3 = "";
for (let i = 0; i <= 10; i += 2) {
  result3 = result3 + i + " ";
}
console.log(result3);
//---------###------
let result4 = "";
for (let i = 3; i <= 15; i += 3) {
  result4 = result4 + i + " ";
}
console.log(result4);
//-------###----------
let result5 = "";
for (let i = 9; i >= 0; i--) {
  result5 = result5 + i + " ";
}
console.log(result5);
//------###--------
let result6 = "";
for (let i = 1; i <= 4; i++) {
  toString(i);
  result6 = result6 + i + " " + i + " " + i + " ";
}
console.log(result6);
//----###-----------
result7 = "";
for (let i = 1; i <= 3; i++) {
  for (n = 0; n <= 4; n++) {
    result7 = result7 + n + " ";
  }
}
console.log(result7);
//8. **isPalindrome.**
console.log("8. **isPalindrome.**");
let word = "madam";
let arrWord = word.split("");
console.log(arrWord);
let isPalindrome = true;
for (let i = 0; i <= Math.floor(arrWord.length / 2); i++) {
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
