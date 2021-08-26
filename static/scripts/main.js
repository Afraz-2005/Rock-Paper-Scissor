//global variables
let gamePoints = 0;
let ComputerGamePoints = 0;
let winOrLose = 0;
let myComputerElements = ['Rock', 'Paper', 'Scissor'];

//selectors
var p1 = document.querySelector(".p-1");
var p2 = document.querySelector(".p-2");
var p3 = document.querySelector(".p-3");

var c1 = document.querySelector(".c-1");
var c2 = document.querySelector(".c-2");
var c3 = document.querySelector(".c-1");

var h3 = document.querySelector(".h3");

//event listeners
p1.addEventListener('click', player1Click);
p2.addEventListener('click', player2Click);
p3.addEventListener('click', player3Click);

function ViewFinalScore() {
    gamePoints;
    ComputerGamePoints;

    if (gamePointsIncreement(gamePoints) > compPointIncreement(ComputerGamePoints)) {
        h3.innerHTML = 'YOU WIN!';
        setTimeout(() => {
            alert('Reset Game');
        }, 2000)
        setTimeout(() => {
            document.location.reload();
        },4000)
    }
    if (gamePointsIncreement(gamePoints) < compPointIncreement(ComputerGamePoints)) {
        h3.innerHTML = 'YOU LOST';
        setTimeout(() => {
            alert('Reset Game');
        }, 2000)        
        setTimeout(() => {
            document.location.reload();
        },4000)
    }
    if (gamePointsIncreement(gamePoints) == compPointIncreement(ComputerGamePoints)) {
        h3.innerHTML = 'ITS A DRAW';
        setTimeout(() => {
            alert('Reset Game');
        }, 2000)
        setTimeout(() => {
            document.location.reload();
        },4000)
    }
    console.log(`game point ${gamePoints}`);
    console.log(`computer point ${ComputerGamePoints}`);

}


function player1Click() {
    myComputerElements;
    let compRand = myComputerElements[Math.floor(Math.random() * myComputerElements.length)];

    if (compRand == 'Scissor') {
        alert(`the computer picked ${compRand}. You win :)`);
        gamePointsIncreement(gamePoints++);    
    }
    if (compRand == 'Rock') {
        alert(`the computer picked ${compRand}. Its a Draw`);
        gamePointsIncreement(gamePoints++);    
        compPointIncreement(ComputerGamePoints++);
    }
    if (compRand == 'Paper') {
        alert(`the computer picked ${compRand}. You Lost :(`);
        compPointIncreement(ComputerGamePoints++);
    }
    displayScore(++winOrLose);
}

function player2Click() {
    myComputerElements;
    gamePoints;
    let compRand = myComputerElements[Math.floor(Math.random() * myComputerElements.length)];

    if (compRand == 'Paper') {
        alert(`the computer picked ${compRand}. Its a Draw`);
        gamePointsIncreement(gamePoints++);     
        compPointIncreement(ComputerGamePoints++);
    }
    if (compRand == 'Scissor') {
        alert(`the computer picked ${compRand}. You lost :(`);
        compPointIncreement(ComputerGamePoints++);
    }
    if (compRand == 'Rock') {
        alert(`the computer picked ${compRand}. You win :)`);
        gamePointsIncreement(gamePoints++);
    }
    displayScore(++winOrLose);
}

function player3Click() {
    myComputerElements;
    let compRand = myComputerElements[Math.floor(Math.random() * myComputerElements.length)];

    if (compRand == 'Rock') {
        alert(`the computer picked ${compRand}. You Lost :(`);
        compPointIncreement(ComputerGamePoints++);
    }
    if (compRand == 'Paper') {
        alert(`the computer picked ${compRand}. You Win :)`);
        gamePointsIncreement(gamePoints++);
    }
    if (compRand == 'Scissor') {
        alert(`the computer picked ${compRand}. Its a Draw)`);
        gamePointsIncreement(gamePoints++);    
        compPointIncreement(ComputerGamePoints++);
    }
    displayScore(++winOrLose);
}

function gamePointsIncreement(gamePoints) {
    gamePoints = gamePoints;
    return gamePoints;
}
function compPointIncreement(ComputerGamePoints) {
    ComputerGamePoints = ComputerGamePoints;
    return ComputerGamePoints;
}

winOrLose;
function displayScore(winOrLose) {
    winOrLose = winOrLose;
    ++winOrLose;
    if (winOrLose > 3){
        // console.log(winOrLose);
        ViewFinalScore();
    }
}
