const continueButton = document.getElementById('continue');
const themeAudio = new Audio ('./assets/theme.mp3');
const songButton = document.getElementById('song-button');


songButton.addEventListener('click', () => {
    themeAudio.play();
});

window.addEventListener('load', () => {
    themeAudio.play();
});

continueButton.addEventListener('click', () => {
    window.location.href = '/rules';
});
