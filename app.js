const continueButton = document.getElementById('continue');
const themeAudio = new Audio ('/assets/theme.mp3');

window.addEventListener('load', () => {
    themeAudio.play();
});

continueButton.addEventListener('click', () => {
    window.location.href = '/rules';
});
