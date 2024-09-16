function fiveMinutesPassedNotification() {
  chrome.notifications.create("Five Minutes Passed", {
    type: "basic",
    iconUrl: "public/assets/logos/logo.png",
    title: "25Pomodoro time notification",
    message: "You have 5 minutes left!",
    requireInteraction: true,
  });
}

export default fiveMinutesPassedNotification;
