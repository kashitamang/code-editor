const rulesButton = document.getElementById('rules');
const homeButton = document.getElementById('home');
const startOverButton = document.getElementById('start-over');
const loadAudio = new Audio ('/assets/load.mp3');

window.addEventListener('load', () => {
    loadAudio.play();
});

rulesButton.addEventListener('click', () => {
    window.location.href = '/rules';
});

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

startOverButton.addEventListener('click', () => {
    window.location.href = '/game';
});




document.addEventListener('keydown', event => {
    if (event.spaceKey) {
        alert("you pressed the space key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.enterKey === 'Enter') {
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

// document.addEventListener('keydown', event => {
//     if (event.code === 'ArrowLeft') {
//         alert("you pressed the left arrow key!");
//     }
// });

// document.addEventListener('keydown', event => {
//     if (event.code === 'ArrowRight') {
//         alert("you pressed the right arrow key!");
//     }
// });

// document.addEventListener('keydown', event => {
//     if (event.shiftKey) {
//         alert("you pressed the shift key!");
//     }
// });

document.addEventListener('keydown', event => {
    if (event.altKey) {
        alert("you pressed the alt key!");
    }
});

// document.addEventListener('keydown', event => {
//     if (event.ctrlKey) {
//         alert("you pressed the control key!");
//     }
// });

// document.addEventListener('keydown', event => {
//     if (event.metaKey) {
//         alert("you pressed the command key!");
//     }
// });

document.addEventListener('keyup', event => {
    if (event.shiftKey && event.metaKey) {
        alert("you pressed the shift key AND the command key!");
    }
});

document.addEventListener('keydown', event => {
    if (event.metaKey && event.code === 'KeyC') {
        alert("you commanded ⌘C to copy a line!");
    }
});

document.addEventListener('keydown', event => {
    if (event.metaKey && event.code === 'KeyV') {
        alert("you commanded ⌘V to paste a line!");
    }
});

document.addEventListener('keydown', event => {
    if (event.metaKey && event.code === 'KeyX') {
        alert("you commanded ⌘X to cut a line!");
    }
});

document.addEventListener('keydown', event => {
    if (event.metaKey && event.code === 'ArrowLeft') {
        alert("you commanded ⌘← to move to the beginning of a line!");
    }
});

document.addEventListener('keydown', event => {
    if (event.metaKey && event.code === 'ArrowRight') {
        alert("you commanded ⌘→ to move to the end of a line!");
    }
});

document.addEventListener('keydown', event => {
    if (event.metaKey && event.code === 'Slash') {
        alert("you commanded ⌘/ to comment out a line!");
    }
});

function findOS(){
    if (navigator.userAgentData.platform === 'macOS'){
        console.log('this is a MacOS');
    } else {
        (navigator.userAgentData.platform === 'Windows')
    } console.log('this is a Windows');
} 
