'use strict';
const diceElement = document.querySelector('.dice');
const rollBtnElement = document.querySelector('.btn--roll');
const holdBtnElement = document.querySelector('.btn--hold');
const resetGameBtn = document.querySelector('.btn--new');
const currentScoreElement = document.querySelectorAll('.current-score');
const scoreElement = document.querySelectorAll('.score');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

diceElement.style.display = 'none';
const rollArray = [1, 2, 3, 4, 5, 6];

const playerInfo = () => {
  const activePlayerElement = document.querySelector('.player--active');
  const activePlayer = activePlayerElement.getAttribute('data-player');
  const nonActivePlayerElement = document.querySelector(
    `.player--${activePlayer == 0 ? 1 : 0}`
  );
  const currentValueElement = document.querySelector(
    `#current--${activePlayer}`
  );
  const currentValue = currentValueElement.textContent;

  const activePlayerScoreElement = document.querySelector(
    `#score--${activePlayer}`
  );
  const oldScore = parseInt(activePlayerScoreElement.textContent);
  return {
    activePlayerElement,
    nonActivePlayerElement,
    currentValueElement,
    activePlayer,
    currentValue,
    activePlayerScoreElement,
    oldScore,
  };
};

const handleRollBtnClick = e => {
  const randomValue = rollArray[Math.floor(Math.random() * rollArray.length)];
  const imageSrc = `dice-${randomValue}.png`;
  diceElement.src = imageSrc;
  diceElement.style.display = 'block';

  const {
    activePlayerElement,
    nonActivePlayerElement,
    currentValueElement,
    currentValue,
  } = playerInfo();

  if (randomValue !== 1) {
    const newCurrentValue = parseInt(currentValue) + randomValue;
    currentValueElement.textContent = newCurrentValue;
  } else {
    currentValueElement.textContent = 0;
    activePlayerElement.classList.remove('player--active');
    nonActivePlayerElement.classList.add('player--active');
  }
};

const handleHoldBtnClick = () => {
  const {
    activePlayerElement,
    nonActivePlayerElement,
    currentValueElement,
    currentValue,
    activePlayerScoreElement,
    oldScore,
  } = playerInfo();

  const newScore = oldScore + parseInt(currentValue);
  activePlayerScoreElement.textContent = newScore;
  if (newScore >= 100) {
    activePlayerElement.classList.add('player--winner');
    rollBtnElement.removeEventListener('click', handleRollBtnClick);
    holdBtnElement.removeEventListener('click', handleHoldBtnClick);
  } else {
    currentValueElement.textContent = 0;
    activePlayerElement.classList.remove('player--active');
    nonActivePlayerElement.classList.add('player--active');
  }
};

const handleReset = () => {
  addListeners();
  currentScoreElement.forEach(element => (element.textContent = 0));
  scoreElement.forEach(element => (element.textContent = 0));
  player0Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--winner', 'player--active');
};
const addListeners = () => {
  rollBtnElement.addEventListener('click', handleRollBtnClick);
  holdBtnElement.addEventListener('click', handleHoldBtnClick);
};
resetGameBtn.addEventListener('click', handleReset);
addListeners();
