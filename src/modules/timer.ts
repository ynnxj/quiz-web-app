export let quizTime = 0;
export let userTime: number | undefined;
let timerInterval: number | undefined;


/**
 * This function will start the timer, counting up.
 * Allows only one timer to run at a time.
 */
export function startTimer() {
    // Check if there is a timer already running and stop it.
     if (timerInterval) {
        clearInterval(timerInterval);
     }

     // Start a new timer and update it every second
     timerInterval = setInterval(() => {
        if (quizTime === 0) {
            quizTime = 1;
            updateTimerDisplay();
        } else {
            quizTime += 1;
        }
        updateTimerDisplay();
    }, 1000)
}

/**
 * This function will stop the timer.
 * Will reset the timer.
 * @returns userTime to be displayed when the quiz is done in Quiz Results.
 */
export function stopTimer() {
    clearInterval(timerInterval);
    userTime = quizTime;
    quizTime = 0;
    updateTimerDisplay();
    displayFinalUserTime();
    return userTime;
}

/**
 * Function for displaying the count up in minutes and seconds.
 */
export function updateTimerDisplay() {
    const countUpTimer = document.querySelector('#count-up-timer') as HTMLElement;
    let minutes = Math.floor(quizTime/60);
    let seconds = quizTime % 60;
    countUpTimer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * Will display users final time.
 */
export function displayFinalUserTime() {
    if (userTime === undefined) {
        return; // If userTime is not defined, do nothing
    }
    let minutes = Math.floor(userTime / 60);
    let seconds = userTime % 60;
    const displayTime = document.querySelector<HTMLElement>('#display-time');
    if (displayTime) {
        displayTime.innerHTML = `Din sluttid blev ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}