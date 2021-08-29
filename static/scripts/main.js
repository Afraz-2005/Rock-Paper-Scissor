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
var score = document.querySelector(".score");
var scorec = document.querySelector(".scoreC");
var inputBox = document.querySelector(".inputBox");
var submitForm = document.querySelector(".submit");

//event listeners
p1.addEventListener('click', player1Click);
p2.addEventListener('click', player2Click);
p3.addEventListener('click', player3Click);
submitForm.addEventListener('click', submitFormValidate);

//function for viewing the final result
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

//FUNCTIONS TO REACT ON PLAYER CLICK --

function player1Click() {
    myComputerElements;
    let compRand = myComputerElements[Math.floor(Math.random() * myComputerElements.length)];

    if (compRand == 'Scissor') {
        alert(`the computer picked ${compRand}. You win :)`);
        gamePointsIncreement(gamePoints++);    
        score.innerHTML = gamePoints;
    }
    if (compRand == 'Rock') {
        alert(`the computer picked ${compRand}. Its a Draw`);
        gamePointsIncreement(gamePoints++);    
        compPointIncreement(ComputerGamePoints++);
        score.innerHTML = gamePoints;
        scorec.innerHTML = ComputerGamePoints;
    }
    if (compRand == 'Paper') {
        alert(`the computer picked ${compRand}. You Lost :(`);
        compPointIncreement(ComputerGamePoints++);
        scorec.innerHTML = ComputerGamePoints;
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
        score.innerHTML = gamePoints;
        scorec.innerHTML = ComputerGamePoints;
    }
    if (compRand == 'Scissor') {
        alert(`the computer picked ${compRand}. You lost :(`);
        compPointIncreement(ComputerGamePoints++);
        scorec.innerHTML = ComputerGamePoints;
    }
    if (compRand == 'Rock') {
        alert(`the computer picked ${compRand}. You win :)`);
        gamePointsIncreement(gamePoints++);
        score.innerHTML = gamePoints;
    }
    displayScore(++winOrLose);
}

function player3Click() {
    myComputerElements;
    let compRand = myComputerElements[Math.floor(Math.random() * myComputerElements.length)];

    if (compRand == 'Rock') {
        alert(`the computer picked ${compRand}. You Lost :(`);
        compPointIncreement(ComputerGamePoints++);
        scorec.innerHTML = ComputerGamePoints;
    }
    if (compRand == 'Paper') {
        alert(`the computer picked ${compRand}. You Win :)`);
        gamePointsIncreement(gamePoints++);
        score.innerHTML = gamePoints;
    }
    if (compRand == 'Scissor') {
        alert(`the computer picked ${compRand}. Its a Draw)`);
        gamePointsIncreement(gamePoints++);    
        compPointIncreement(ComputerGamePoints++);
        scorec.innerHTML = ComputerGamePoints;
        score.innerHTML = gamePoints;
    }
    displayScore(++winOrLose);
}

// function to set game points
function gamePointsIncreement(gamePoints) {
    gamePoints = gamePoints;
    return gamePoints;
}
function compPointIncreement(ComputerGamePoints) {
    ComputerGamePoints = ComputerGamePoints;
    return ComputerGamePoints;
}

//input checker Input should be >= 3
function submitFormValidate() {
    winOrLose;
    if (inputBox.value < 3 ) {
        alert("Number of rounds should be greater than or equal to 3");
    }
    else{
        displayScore(winOrLose);
    }
}

//Display score on condition
winOrLose;
inputBox;
function displayScore(winOrLose) {
    inputBox;
    winOrLose = winOrLose;
    ++winOrLose;

    if (winOrLose > inputBox.value){
        console.log(winOrLose);
        console.log(inputBox.value);
        ViewFinalScore();
    }
}
