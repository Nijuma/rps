playing = true;

let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let rock = document.querySelector('.rock');

var choices = ['rock', 'paper', 'scissors'];
let userChoice = '';

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
};

show();
document.querySelector('#play--game').addEventListener('click', function () {
  playing;

  document.querySelector('#play--game').classList.add('hidden');
  show();
});

function logic(userChoice) {
  const cpuRoll = Math.trunc(Math.random() * 3) + 1;

  console.log(userChoice);
  console.log(cpuRPS(cpuRoll));

  if (userChoice === cpuRPS(cpuRoll)) {
    console.log('tie');
  } else if (userChoice === 'rock' && cpuRPS(cpuRoll) === 'scissors') {
    console.log('win');
  } else if (userChoice === 'scissors' && cpuRPS(cpuRoll) === 'paper') {
    console.log('win');
  } else if (userChoice === 'paper' && cpuRPS(cpuRoll) === 'rock') {
    console.log('win');
  } else {
    console.log('lose');
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
