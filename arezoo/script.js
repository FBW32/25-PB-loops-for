//1
let sum = 0;
for (let i = 0; i < 20; i++) {
  sum = sum + 1;
  console.log(sum);
}

//2
for (let bottle = 1; bottle <= 5; bottle++) {
  console.log(`there is ${bottle} of beer in the wall`);
}

//3
for (let ev = 0; ev <= 20; ev++) {
  if (ev % 2 == 0) {
    console.log(`${ev} is a even number`);
  } else {
    console.log(`${ev} is a odd number`);
  }
}

//4a
for (let i = 0; i <= 10; i++) {
  console.log("result= " + i * 9);
}
//4b
for (let j = 0; j <= 10; j++) {
  for (let z = 0; z <= 10; z++) {
    console.log("first number is: " + j);
    console.log("second number is: " + z);
    console.log("result is:" + j * z);
  }
}

//5
for (let m = 0; m <= 100; m++) {
  if (m % 3 == 0) {
    console.log("Fizz");
  } else if (m % 5 == 0) {
    console.log("Buzz");
  } else if (m % 3 == 0 && m % 5 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(`the number is ${m}`);
  }
}
//6
for (let c = 0; c <= 1000; c++) {
  if (c % 3 == 0 && c % 5 == 0) {
    console.log(c);
  }
}

//7
let myNumber;
for (myNumber = 1; myNumber <= 10; myNumber++) {
  let result = myNumber * 100;
  console.log(result);
}
for (myNumber = 0; myNumber <= 7; myNumber++) {
  let result = 2 ** myNumber;
  console.log(result);
}
for (myNumber = 0; myNumber <= 10; myNumber++) {
  if (myNumber % 2 == 0) {
    console.log(myNumber);
  }
}
for (myNumber = 1; myNumber <= 15; myNumber++) {
  if (myNumber % 3 == 0) {
    console.log(myNumber);
  }
}

for (myNumber = 9; myNumber >= 0; myNumber--) {
  console.log(myNumber);
}

for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i);
  }
}

for (let i = 0; i <= 3; i++) {
  for (let j = 0; j <= 4; j++) {
    console.log(j);
  }
}

//8

let mystr = "madam";
let myarr1 = [];
let myarr2 = [];

for (let i = 0; i <= mystr.length - 1; i++) {
  myarr1.push(mystr[i]);
}
for (let b = mystr.length - 1; b >= 0; b--) {
  myarr2.push(mystr[b]);
}
console.log(myarr1);
console.log(myarr2);
let isPalindrom = true;
for (let len = 0; len <= mystr.length - 1; len++) {
  if (myarr1[len] != myarr2[len]) {
    isPalindrom = false;
    break;
  }
}
if (isPalindrom) {
  console.log("is Palindrom");
} else {
  console.log("is not palindrom");
}
