for (let i = 1; i <= 10; i++) {
  console.log(i);
}
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
  // i = 1 => sum = 0 + 1
  // i = 2 => sum = 1 + 2
  // i = 3 => sum = 3 + 3
  // i = 4 => sum = 6 + 4
}
console.log("Sum of numbers from 1 tp 100 is:" + sum);

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

const number = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// Program to check if a number is even or odd

let number1 = prompt("enter a number:");
number1 = parseInt(number1);

if (number1 % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// Program to check if a number is positive, negative, or zero

let number2 = prompt("enter a number:");
number2 = parseInt(number2);

if (number2 > 0) {
  console.log("pozitve");
} else if (number2 < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Program to check if a year is a leap year

let year = prompt("enter a year:");
year = parseFloat(year);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// Program to check if a person is eligible to vote

let age = prompt("enter your age");
age = parseFloat(age);

if (age >= 18) {
  console.log("you are eligible to vote.");
} else {
  console.log("tou are not eligible to vote");
}

// program to find the largest number in an array

let numbers = [23, 56, 12, 89, 45, 78];
let largestnumbers = Math.max(...numbers);
console.log("largest numbers:", largestnumbers);

// Program to reverse an array without using reverse() method

let arrey = [1, 2, 3, 4, 5];
let reversedArrey = [];

for (let i = arrey.length - 1; i >= 0; i--) {
  reversedArrey.push(arrey[i]);
}
console.log("reversed arrey:", reversedArrey);

//Create an array of strings and use the filter() method to return strings longer than 5 characters

let strings = ["apple", "bannana", "cherry", "date", "elderberry"];
let longstrings = strings.filter((str) => str.length > 5);
console.log("longstrings");

//Write a function that takes an array of numbers and returns a new array with all numbers squared

function squareNumbers(arrey) {
  return array.map((num) => num * num);
}
let nums = [1, 2, 3, 4, 5];
let squaredNums = squareNumbers(nums);
console.log(squareNums);

//Use the map() function to convert an array of temperatures in Celsius to Fahrenheit

let celsiusTemps = [0, 20, 30, 40, 60, 100];
let fahrenheitTemps = celsiusTemps.map((celsius) => (celsius * 9) / 5 + 32);
console.log(fahrenheitTemps);

//Function add(a, b) that returns the sum of two numbers

function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

//Function isPrime(n) that returns true if n is a prime number and false otherwise

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return false;
    }
    return true;
  }
}

console.log(isPrime(7));

function findLongestWord(words) {
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

function findLongestWord(words) {
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

function findLongestWord(words) {
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
// Create a function findLongestWord(words) that takes an array of words and returns the longest word

function findLongestWord(words) {
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord(["apple", "banana", "kiwi", "strawberry"]));

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  getCarInfo: function () {
    return `Car Info: ${this.year} ${this.make} ${this.model}`;
  },
};

//Add a method getCarInfo() that returns a string with this information

let car1 = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  getCarInfo: function () {
    return `Car Info: ${this.year} ${this.make} ${this.model}`;
  },
};
console.log(car.getCarInfo());

//Write a function that takes an object and returns an array of its keys

function getObjectKeys(obj) {
  return Object.keys(obj);
}

let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};

console.log(getObjectKeys(person));

//Create an object that stores student information, including name, age, and grades (as an array). Write a method to calculate the average grade

let student = {
  name: "Alice",
  age: 20,
  grades: [90, 85, 92, 88],
  calculateAverageGrade: function () {
    let total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  },
};

console.log(student.calculateAverageGrade());

//Write a function mergeObjects(obj1, obj2) that merges two objects into one

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

let mergedObj = mergeObjects(obj1, obj2);

console.log(mergedObj);

//Create an object representing a shopping cart with items and prices. Write a method to calculate the total cost of items in the cart

let shoppingCart = {
  items: [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Orange", price: 1.5 },
  ],
  calculateTotalCost: function () {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};

console.log(shoppingCart.calculateTotalCost());

// Write a program that takes a string and counts the occurrences of each character in it (using an object)

function countCharacterOccurrences(str) {
  let occurrences = {};
  for (let char of str) {
    if (occurrences[char]) {
      occurrences[char]++;
    } else {
      occurrences[char] = 1;
    }
  }
  return occurrences;
}

let inputString = "programming";
console.log(countCharacterOccurrences(inputString));

//Create a function fibonacci(n) that returns the first n numbers in the Fibonacci sequence

function fibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

console.log(fibonacci(10));

//Write a program that takes an array of objects representing books (with properties like title and author) and filters all books written by a specific author

function filterBooksByAuthor(books, author) {
  return books.filter((book) => book.author === author);
}

let books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "Animal Farm", author: "George Orwell" },
];

let filteredBooks = filterBooksByAuthor(books, "George Orwell");
console.log(filteredBooks);
