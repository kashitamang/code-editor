// const promptElement = document.getElementById('prompt-element');
// const scoreSpan = document.getElementById('score-span');

// //keeps track of user state 
// let points = 0;

console.log('hello from game.js');
//tells program when user is ready to play

document.addEventListener('keydown', event => {
    if (event.code === 'Space') {
        alert("you pressed the space key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
        alert("you pressed the Enter key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'ArrowDown') {
        alert("you pressed the down arrow key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'ArrowUp') {
        alert("you pressed the up arrow key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'ArrowLeft') {
        alert("you pressed the left arrow key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'ArrowRight') {
        alert("you pressed the right arrow key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.shiftKey) {
        alert("you pressed the shift key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.altKey) {
        alert("you pressed the alt key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.ctrlKey) {
        alert("you pressed the control key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.metaKey) {
        alert("you pressed the command key!");
    }
});

// document.addEventListener ('keyup', event)
// function startGame(){
// //set the player points to 0
//     points = 0;


//     showCommandPrompt(1);
// }

// //shows the user the command they need to execute
// function showCommandPrompt(showCommandPromptIndex) {
//     const commandPrompt = commandPrompts.find(commandPrompt => 
//         commandPrompt.id === commandPromptIndex)
//     promptElement.innerText = commandPrompt.text
// }

// //listens to the use trying to execute the command
// function tryCommand(command) {

// }


// const commandPrompts = [
//     {
//         id: 1, 
//         text: 'lets start simple...pretend you are a cursor navigating a simple html file: cut a line',
//     },
//     {
//         id: 2,
//         text: 'good! now paste a line',
//     },
//     {
//         id: 3,
//         text: 'great, now lets try something harder: jump to the beginning of a line',
//     },
//     {
//         id: 4,
//         text: 'can you use that same method to jump to the end of a line?',
//     },
//     {
//         id: 5,
//         text: 'look at you go! now lets comment out a whole line',
//     },
// ]

// startGame();