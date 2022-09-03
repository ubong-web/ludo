'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.number').textContent = 13);
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);


*/


/**
 * Utils function to generate a random number
 */
function generateRandomNumber(min, max){
 const randomNumber =  Math.round(Math.random() * 1000 ) % max

 if (randomNumber < min) return min + randomNumber

 return randomNumber
}

let secretNumber = generateRandomNumber(1, 20)
let score = 20;
let highscore = 0;

console.log({ secretNumber });

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No NUmber');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct NUmber');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //WHen guess is wrong
  } else if (!guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too high!';

      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
});

//     //WHen guess is too high
//     else if (guess > secretNumber) {

//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game!';
//         }

//         //When guess is too low
//     } else if (guess < secretNumber) {
//         document.querySelector('.message').textContent = 'Too Low!';
//         score--;
//         document.querySelector('.score').textContent = score;
//     }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateRandomNumber(1, 20)

  document.querySelector('.message').textContent = 'Start guessing...';
  // displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
