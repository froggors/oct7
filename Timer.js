    // Specify the start date
    const startDate = new Date('2023-10-06T06:20:00');

    function updateTimer() {
        const now = new Date();
        const elapsedTime = now - startDate;

        // Convert elapsed time to days, hours, minutes, and seconds
        const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
        const seconds = Math.floor((elapsedTime / 1000) % 60);

        // Display the result in the <p> element
        document.getElementById('timerdays').textContent =
            `${days}`;
        document.getElementById('timerhours').textContent =
            `${hours}`;
        document.getElementById('timerminutes').textContent =
            `${minutes}`;
        document.getElementById('timerseconds').textContent =
            `${seconds}`;
    }

    // Update the timer every second
    setInterval(updateTimer, 25);

    // Initialize the timer display immediately
    updateTimer();

    //random redirect
    //Ensure the document is fully loaded before running the script 
    