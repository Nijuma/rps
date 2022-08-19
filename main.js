playing = true;

let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let rock = document.querySelector('.rock');

const roll = Math.trunc(Math.random() * 3) + 1;

const rps = roll => {
  if (roll === 1) {
    return 'rock';
  } else if (roll === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

const cpuRPS = roll => {
  if (roll === 1) {
    return 'rock';
  } else if (roll === 2) {
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

const logic = () => {
  playerChoice = 0;
  rock = 1;
  paper = 2;
  scissors = 3;
  const roll = Math.trunc(Math.random() * 3) + 1;
  if (rps(roll) === cpuRPS(roll)) {
    console.log('tie');
  } else if (rps(roll) === 1 && cpuRPS(roll) === 3) {
    console.log('win');
  } else {
    console.log('lose');
  }
};

document.querySelector('.rock').addEventListener('click', logic);

console.log(rps(roll));
