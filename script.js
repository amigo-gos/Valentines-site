document.addEventListener('DOMContentLoaded', function () {
    const heart = document.getElementById('main-heart');
    const popup = document.getElementById('heart-popup');

    // Heart click to show hidden photos and message
    heart.addEventListener('click', function () {
        popup.style.display = 'block';
        startHeartAnimation();
    });

    function startHeartAnimation() {
        for (let i = 0; i < 50; i++) {
            const emoji = document.createElement('div');
            emoji.innerHTML = '🤍';
            emoji.classList.add('emoji');
            document.body.appendChild(emoji);

            // Randomize position and animation
            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.animationDuration = (Math.random() * 2 + 2) + 's';

            emoji.addEventListener('animationend', () => {
                emoji.remove();
            });
        }
    }
});