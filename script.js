document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById("timer");

    const countdownEndTime = new Date("2025-12-31T23:59:59").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = countdownEndTime - now;

        if (timeRemaining <= 0) {
            timerElement.textContent = "Promo Berakhir";
            clearInterval(countdownInterval);
            return;
        }

        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
