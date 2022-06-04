console.clear();
let inputNum = document.getElementById('inputnum');
let textChng = document.getElementById('changetext');
let Secret = document.getElementById('secret');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
console.log(score);
let randomNum = Math.trunc(Math.random() * 20) + 1;
let Score = 20;

function Reset() {
    document.body.classList.replace("bg-green-600", "bg-slate-900");
    Score = 20;
    randomNum = Math.trunc(Math.random() * 20) + 1;
    Secret.textContent = '?';
    textChng.textContent = 'Start Guessing...';
    score.textContent = Score;
    inputNum.value = null;
}

function getInput() {
    if (Secret.textContent == '?') {
        let num = parseInt(inputNum.value);
        if (num > randomNum) {
            textChng.textContent = 'Too high...';
            score.textContent = --Score;
        } else if (num < randomNum) {
            textChng.textContent = 'Too Low...';
            score.textContent = --Score;
        } else {
            textChng.textContent = 'Correct';
            if (highScore.textContent < score.textContent)
                highScore.textContent = score.textContent;
            Secret.textContent = randomNum;
            document.body.classList.replace("bg-slate-900", "bg-green-600");
        }
    }
}
console.log(textChng);