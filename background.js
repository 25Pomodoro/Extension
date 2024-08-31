let timerInterval;
let timeRemaining = 1500; // 25 minutes in seconds
let isRunning = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "startTimer") {
        if (!isRunning) {
            isRunning = true;
            timerInterval = setInterval(() => {
                timeRemaining -= 1;

                if (timeRemaining <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    timeRemaining = 0;
                }

                chrome.storage.local.set({ timeRemaining, isRunning });
            }, 1000);
        }
        sendResponse({ success: true });

    } else if (request.action === "stopTimer") {
        clearInterval(timerInterval);
        isRunning = false;
        chrome.storage.local.set({ timeRemaining, isRunning });
        sendResponse({ success: true });

    } else if (request.action === "resetTimer") {
        clearInterval(timerInterval);
        timeRemaining = 1500; // 25 minutes in seconds
        isRunning = false;
        chrome.storage.local.set({ timeRemaining, isRunning });
        sendResponse({ success: true });

    } else if (request.action === "getTimerStatus") {
        sendResponse({ timeRemaining, isRunning });
    }
});
