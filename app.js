// JS file for Feb 10 lab

var userName = prompt('Hey! What your name is?');
console.log('userNAME: ' + userName);

alert('Hello ' + userName + ', We gonna play a game to get to know me better. Please respond to the following questions with a yes or a no please.');

var correctAnsTotal = 0;
console.log(correctAnsTotal);

var ans1 = document.getElementById('a1');
function QuestionOne(){
  var answerOne = prompt('Hey ' + userName + ', is my favorite color black?').toUpperCase();
  console.log('answerOne: ' + answerOne);
  if (answerOne === 'N' || answerOne === 'NO' || answerOne === 'NA') {
    // alert('Damn straight');
    ans1.textContent = 'Damn straight';
    correctAnsTotal++;
  } else if (answerOne === 'Y' || answerOne === 'YA' || answerOne === 'YES') {
    // alert('Negative ghostrider');
    ans1.textContent = 'Negative ghostrider';
  } else {
    // alert('I SAID ANSWER WITH A YES OR NO!!!');
    ans1.textContent = 'I SAID ANSWER WITH A YES OR NO!!';
  }
}
console.log(correctAnsTotal);

var ans2 = document.getElementById('a2');
function QuestionTwo(){
  var answerTwo = prompt('Okay, next question: Was I born in Seattle?').toUpperCase();
  console.log('answerTwo: ' + answerTwo);
  if (answerTwo === 'N' || answerTwo === 'NO' || answerTwo === 'NA') {
    // alert('Darn tootin\'! I was born in Kirkland!');
    ans2.textContent = 'Darn tootin\' I was born in Kirkland!';
    correctAnsTotal++;
  } else if (answerTwo === 'Y' || answerTwo === 'YA' || answerTwo === 'YES') {
    // alert('Negative ghost rider! I was born in Kirkland.');
    ans2.textContent = 'Negative ghost rider! I was born in Kirkland.';
  } else {
    // alert('I SAID ANSWER WITH A YES OR A NO!!!');
    ans2.textContent = 'I SAID ANSWER WITH A YES OR NO!!';
  }
}

console.log(correctAnsTotal);

var ans3 = document.getElementById('a3');
function QuestionThree(){
  var answerThree = prompt('Right, now for an easy one. Is The Weekend\'s album: "Beauty Behind the Madness" great baby making music acording to Dave?').toUpperCase();
  console.log('answerThree: ' + answerThree);
  if (answerThree === 'Y' || answerThree === 'YA' || answerThree === 'YES') {
    // alert('FUCKING RIGHT! Get it? Fucking, right?');
    ans3.textContent = 'FUCKING RIGHT! Get it? Fucking, right?';
    correctAnsTotal++;
  } else if (answerThree === 'N' || answerThree === 'NO' || answerThree === 'NA') {
    // alert('What\'s wrong with you!?!');
    ans3.textContent = 'What\'s wrong with you!?!'
  } else {
    // alert('I SAID ANSWER WITH A YES OR A NO!');
    ans3.textContent = 'I SAID ANSWER WITH A YES OR A NO!';
  }
}

console.log(correctAnsTotal);

var ans4 = document.getElementById('a4');
function QuestionFour(){
  var answerFour = prompt('Does David think it is go time?!').toUpperCase();
  console.log('answerFour: ' + answerFour);
  if (answerFour === 'Y' || answerFour === 'YES' || answerFour === 'YA') {
    // alert('Correct! David always thinks it is go time!');
    ans4.textContent = 'Correct! David always thinks it is go time!';
    correctAnsTotal++;
  } else if (answerFour === 'N' || answerFour === 'NO' || answerFour === 'NA') {
    // alert('WRONG');
    ans4.textContent = 'WRONG';
  } else {
    // alert('I SAID ANSWER WITH A YES OR A NO!');
    ans4.textContent = 'I SAID ANSWER WITH A YES OR A NO!';
  }
}
console.log(correctAnsTotal);

var ans5 = document.getElementById('a5');
function QuestionFive(){
  var answerFive = prompt('Thanks for playing! One last question. Do you think Dave loves you?').toUpperCase();
  console.log('answerFive ' + answerFive);
  if (answerFive === 'YA' || answerFive === 'YES' || answerFive === 'Y') {
    // alert('Obviously!');
    ans5.textContent = 'Obviously!';
    correctAnsTotal++;
  } else if (answerFive === 'N' || answerFive === 'NO' || answerFive === 'NA') {
    // alert('Don\'t be like that boo!');
    ans5.textContent = 'Don\'t be like that boo!';
  } else {
    // alert('I SAID ANSWER WITH A YES OR A NO!');
    ans5.textContent = 'I SAID ANSWER WITH A YES OR A NO!';
  }
}

console.log(correctAnsTotal);

var ans6 = document.getElementById('a6');
function QuestionSix(){
  for (var trys = 0; trys < 4; trys++) {
    var answerSix = prompt('What is my favorite number?')
    console.log('answerSix: ' + answerSix);
    if (answerSix > 7) {
      // alert('Too high!');
      ans6.textContent = 'Too high!';
    } else if (answerSix < 7) {
      // alert('Too low!');
      ans6.textContent = 'Too low!';
    } else {
      // alert('CORRECT!');
      ans6.textContent = 'CORRECT!';
      trys=4;
      correctAnsTotal++;
    }
  }
}
console.log(correctAnsTotal);

var ans7 = document.getElementById('a7');
function QuestionSeven(){
  var answerSeven = prompt('What other states have I lived in besides Washington? HINT: There are multiple correct answers...').toUpperCase();
  console.log('answerSeven: ' + answerSeven);
  var correctAns7 = ['NEW YORK', 'ARIZONA', 'LOUISIANA'];
  if (answerSeven === correctAns7[0] || answerSeven === correctAns7[1] || answerSeven === correctAns7[2]) {
    // alert('Correct! Well done!');
    ans7.textContent = 'Correct! Well done!'
    correctAnsTotal++;
  } else {
    // alert('Sorry, that is incorrect...');
    ans7.textContent = 'Sorry, that is incorrect...'
  }
}
console.log(correctAnsTotal);

QuestionOne()
QuestionTwo()
QuestionThree()
QuestionFour()
QuestionFive()
QuestionSix()
QuestionSeven()

if (correctAnsTotal < 7) {
  alert('You got ' + correctAnsTotal + 'out of 7 correct. So close! Keep trying!');
} else if (correctAnsTotal === 7) {
  alert('WELL DONE! You got 7 out of 7 correct!');
}
else {

}
