playing = true;

let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let rock = document.querySelector('.rock');
let score1 = document.querySelector('.score--1');
let score2 = document.querySelector('.score--2');
let tie = document.querySelector('.tie');
let overlay = document.querySelector('.overlay');

var choices = ['rock', 'paper', 'scissors'];
let userChoice = '';

let userScore = 0;
let cpuScore = 0;
const maxScore = 5;

const cpuRoll = Math.trunc(Math.random() * 3) + 1;

const cpuRPS = cpuRoll => {
  if (cpuRoll === 1) {
    return 'rock';
  } else if (cpuRoll === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const show = () => {
  rock.classList.toggle('hidden');
  paper.classList.toggle('hidden');
  scissors.classList.toggle('hidden');
  score1.classList.add('hidden');
  score2.classList.add('hidden');
  tie.classList.add('hidden');
};

const hide = () => {
  score1.classList.remove('hidden');
  score2.classList.remove('hidden');
};
const hideAgain = () => {
  score1.classList.add('hidden');
  score2.classList.add('hidden');
};

show();
document.querySelector('#play--game').addEventListener('click', function () {
  playing;

  document.querySelector('#play--game').classList.add('hidden');
  show();
});

function logic(userChoice) {
  const cpuRoll = Math.trunc(Math.random() * 3) + 1;
  hide();
  console.log(userChoice);
  console.log(cpuRPS(cpuRoll));

  if (userChoice === cpuRPS(cpuRoll)) {
    console.log('tie');
    hide();
    tie.classList.remove('hidden');
    hideAgain();
  } else if (userChoice === 'rock' && cpuRPS(cpuRoll) === 'scissors') {
    tie.classList.add('hidden');
    console.log('win');
    userScore++;
    document.querySelector('.score--2').textContent = userScore;
  } else if (userChoice === 'scissors' && cpuRPS(cpuRoll) === 'paper') {
    tie.classList.add('hidden');
    console.log('win');
    userScore++;
    document.querySelector('.score--2').textContent = userScore;
  } else if (userChoice === 'paper' && cpuRPS(cpuRoll) === 'rock') {
    tie.classList.add('hidden');
    console.log('win');
    userScore++;
    document.querySelector('.score--2').textContent = userScore;
  } else {
    tie.classList.add('hidden');
    console.log('lose');
    cpuScore++;
    document.querySelector('.score--1').textContent = cpuScore;
  }
}

document.querySelector('.rock').onclick = () => {
  userChoice = 'rock';
  //after user choice, we randomize PC choice
  cpuRPS(cpuRoll);
  //check who wins
  logic(userChoice, cpuRPS(cpuRoll));
};

document.querySelector('.paper').onclick = () => {
  userChoice = 'paper';
  //after user choice, we randomize PC choice
  cpuRPS(cpuRoll);
  //check who wins
  logic(userChoice, cpuRPS(cpuRoll));
};

document.querySelector('.scissors').onclick = () => {
  userChoice = 'scissors';
  //after user choice, we randomize PC choice
  cpuRPS(cpuRoll);
  //check who wins
  logic(userChoice, cpuRPS(cpuRoll));
};

const overlayModal = () => {
  overlay.classList.add('active');
};
const gameOver = () => {
  return userScore === 5 || cpuScore === 5;
};

const restart = () => {
  playing = false;
  userScore = 0;
  cpuScore = 0;
};
gameOver(overlayModal);
