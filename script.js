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
 * Utils functions
 */
const generateRandomNumber = (min, max) => {
  const randomNumber = Math.round(Math.random() * 1000) % max;

  if (randomNumber < min) return min + randomNumber;

  return randomNumber;
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const getInitialTrailsLeft = () => Math.round(MAX / 3)

const MIN = 1;
const MAX = 20;

let secretNumber = generateRandomNumber(MIN, MAX);
let trailsLeft = getInitialTrailsLeft()
let highscore = 0;

const scoreHolder = document.querySelector('.trails-left-number')
scoreHolder.textContent = trailsLeft;


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

    if (trailsLeft > highscore) {
      highscore = trailsLeft;
      document.querySelector('.highscore').textContent = highscore;
    }

    //WHen guess is wrong
  } else if (!guess !== secretNumber) {
    if (trailsLeft > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too high!';

      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      trailsLeft--;
      document.querySelector('.score').textContent = trailsLeft;
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
  secretNumber = generateRandomNumber(MIN, MAX);

  document.querySelector('.message').textContent = 'Start guessing...';
  // displayMessage('Start guessing...');
  document.querySelector('.trails-left-number').innerHTML = getInitialTrailsLeft()
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
