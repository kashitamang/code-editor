const continueButton = document.getElementById('continue');
const loadAudio = new Audio ('/assets/load.mp3');
const homeButton = document.getElementById('home');

window.addEventListener('load', () => {
    loadAudio.play();
});

continueButton.addEventListener('click', () => {
    window.location.href = '/game';
});

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});