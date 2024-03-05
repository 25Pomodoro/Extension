import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/Components/Timer.jsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--3797271c.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import RefreshRuntime from "/vendor/react-refresh.js";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    RefreshRuntime.register(type, "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--3797271c.js"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import clickSound from "/src/assets/sounds/sessionStarted.mp3__import.js";
function Timer() {
  _s();
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
    if (sessionOn) {
      document.querySelector(".resetButton").style.display = "block";
    } else {
      document.querySelector(".resetButton").style.display = "none";
    }
    return () => clearInterval(timer);
  }, [isRunning, time, sessionOn]);
  const startTimer = () => {
    if (!sessionOn) {
      soundEffect.play();
    }
    setSessionOn(true);
    if (!isRunning) {
      document.querySelector(".mainButton").innerHTML = "Pause session";
      setIsRunning(true);
    } else {
      document.querySelector(".mainButton").innerHTML = "Continue session";
      clearInterval();
      setIsRunning(false);
    }
  };
  const resetTimer = () => {
    clearInterval();
    setIsRunning(false);
    setTimer("25:00");
    setSessionOn(false);
    document.querySelector(".mainButton").innerHTML = "Start session";
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "hover:scale-105", children: /* @__PURE__ */ jsxDEV("h1", { className: "font-bold text-2xl", children: time }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
      lineNumber: 65,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: [
      /* @__PURE__ */ jsxDEV("button", { className: "border-2 border-gray-500  bg-gray-50 rounded-md", onClick: startTimer, children: "Start session" }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "resetButton rounded-md", onClick: resetTimer, children: "Reset session" }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
        lineNumber: 70,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}
_s(Timer, "lCADB1/5e8s0tVRPpocPhvUUpzM=");
_c = Timer;
export default Timer;
var _c;
$RefreshReg$(_c, "Timer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
