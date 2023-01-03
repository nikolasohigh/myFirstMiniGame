'use strict';

const targets = document.querySelectorAll('.target');
const winWrapper = document.querySelector('.wrapper-win');
const loseWrapper = document.querySelector('.wrapper-lose');
const mainWrapper = document.querySelector('.wrapper-main')
const position = Math.floor(Math.random() * 9);
//console.log('pos = ' + position);

const lifes = 3;
let clicks = 0;

targets.forEach((item, i) => {
    item.addEventListener('click', function clickCheck() {
        item.classList.add('hidden-blue');
        clicks++;
        //console.log('click on ' + i);
        if (winCheck(i, item) === 1) showWin();
        else if (winCheck(i, item) === -1) showLose();
    });
});

const winTarget = targets[position];


function winCheck(clickedNumber, e) {
    if (clickedNumber === position && clicks <= lifes) {
        targets[position].innerHTML = '<div class="win"></div>';
        return 1;
    }
    else if (clickedNumber !== position && clicks === 3) return -1;
}

function closeGame() {
    mainWrapper.style.display = 'none';
}
function showWin() {
    closeGame();
    winWrapper.style.display = 'block';
}
function showLose() {
    closeGame();
    loseWrapper.style.display = 'block';
}