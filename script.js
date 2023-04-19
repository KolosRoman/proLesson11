let buttonOne = document.getElementById('button');
let paragraph = document.getElementById('paragraph');
let buttonIncrease = document.getElementById('increase');
let buttonDecrease = document.getElementById('decrease');

let current = 0;
function onBatton() {
    paragraph.classList.toggle('hidden');
    buttonIncrease.classList.toggle('hidden');
    buttonDecrease.classList.toggle('hidden');
    if (buttonOne.innerText === 'Hide') {
        buttonOne.innerText = 'Show';
    } else {
        buttonOne.innerText = 'Hide';
    }
    ++current;
    if (current % 2 === 0) {
        paragraph.classList.toggle('even-text');
    } 
    
}

buttonOne.onclick = onBatton;

let size = 18;
buttonIncrease.onclick = function() {
    size += 1;
    paragraph.style.fontSize = size + 'px';
}


buttonDecrease.onclick = function() {
    size -= 1;
    paragraph.style.fontSize = size + 'px';
}