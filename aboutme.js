'use strict';
let score = 0;
let person = prompt('Do I like Jackson?');
person = person.toUpperCase();
// console.log(person);
if (person === 'YES' || person === 'Y') {
  // console.log('No. I do not');
  alert('No. I do not');
} else if (person === 'NO' || person === 'N') {
  // console.log("You're correct");
  alert("You're correct");
  score++;
}

let education = prompt('Did I graduate from MTSU?');
education = education.toUpperCase();
// console.log(education);
if (education === 'YES' || education === 'Y') {
  // console.log('That is correct');
  alert('That is correct');
  score++;
} else if (education === 'NO' || education === 'N') {
  // console.log("Sorry, you're wrong");
  alert("Sorry, you're wrong");
}
let color = prompt('Is purple my favorite color?');
color = color.toUpperCase();
// console.log(color;
if (color === 'YES' || color === 'Y') {
  // console.log('That is correct');
  alert('That is correct');
  score++;
} else if (color === 'NO' || color === 'N') {
  // console.log("Sorry, you're wrong");
  alert("Sorry, you're wrong");
}
let hobbies = prompt('Do I like exercising?');
hobbies = hobbies.toUpperCase();
// console.log(hobbies);
if (hobbies === 'YES' || hobbies === 'Y') {
  // console.log('That is correct');
  alert('That is correct');
  score++;
} else if (hobbies === 'NO' || hobbies === 'N') {
  // console.log("Sorry, you're wrong");
  alert("Sorry, you're wrong");
}
let animal = prompt('Do I like dogs?');
animal = animal.toUpperCase();
// console.log(animal);
if (animal === 'YES' || animal === 'Y') {
  // console.log('That is correct');
  alert('That is correct');
  score++;
} else if (animal === 'NO' || animal === 'N') {
  // console.log("Sorry, you're wrong");
  alert("Sorry, you're wrong");
}
let number = '';
let i = 0;
while (number !== '5') {
  number = prompt('Guess a number betwwen 1 and 10');
  if (number < '5') {
    alert('to low');
  } else if (number > '5') {
    alert('too high');
  }
  i++;
  if (i === 5) {
    number = '5';
  }
}
let singers = ['monica', 'fantasia', 'whitney houston'];
let answer = prompt('Guess my favorite singer').toLowerCase();
if (answer === singers[0] || answer === singers[1] || answer === singers[2]) {
  alert(answer + ' is correct');
  score++;
}
alert('you scored ' + score);
// alert(person);
// let color = prompt();
