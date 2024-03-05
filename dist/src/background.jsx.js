import __vite__cjsImport0_react from "/vendor/.vite-deps-react.js__v--d472034d.js"; const useEffect = __vite__cjsImport0_react["useEffect"]; const useState = __vite__cjsImport0_react["useState"];
import clickSound from "/src/assets/sounds/sessionStarted.mp3__import.js";
const [time, setTimer] = useState("25:00");
const [isRunning, setIsRunning] = useState(false);
const [sessionOn, setSessionOn] = useState(false);
let soundEffect = new Audio(chrome.runtime.getURL(clickSound));
useEffect(() => {
  let timer;
  if (isRunning) {
    const [minutes, seconds] = time.split(":").map(Number);
    timer = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        setIsRunning(false);
      } else {
        const newSeconds = seconds === 0 ? 59 : seconds - 1;
        const newMinutes = seconds === 0 ? minutes - 1 : minutes;
        const newTime = `${newMinutes}:${newSeconds}`;
        setTimer(newTime);
      }
    }, 1e3);
  }
  return () => clearInterval(timer);
}, [isRunning, time, sessionOn]);
const startTimer = () => {
  if (!sessionOn) {
    soundEffect.play();
  }
  setSessionOn(true);
  if (!isRunning) {
    document.getElementById("button-1").innerHTML = "Pause session";
    setIsRunning(true);
  } else {
    document.getElementById("button-1").innerHTML = "Continue session";
    clearInterval();
    setIsRunning(false);
  }
};
const resetTimer = () => {
  clearInterval();
  setIsRunning(false);
  setTimer("25:00");
  setSessionOn(false);
  document.getElementById("button-1").innerHTML = "Start session";
};
export { startTimer, resetTimer, sessionOn, time };
