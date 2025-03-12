const time = document.getElementById("time")
const startTimer = document.getElementById("startTimer")
const stopTimer = document.getElementById("stopTimer")
const resetTimer = document.getElementById("resetTimer")

let currentTime = 0
let currentTimerThread = null

startTimer.addEventListener("click", function() {
    if (currentTimerThread) {
        return
    }
    currentTimerThread = setInterval(() => {time.innerHTML=++currentTime}, 100)
    currentTimerThread
})

stopTimer.addEventListener("click", function() {
    clearInterval(currentTimerThread)
    currentTimerThread = null
})

resetTimer.addEventListener("click", function() {
    clearInterval(currentTimerThread)
    currentTimerThread = null
    currentTime = 0
    time.innerHTML = 0
})