import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/App.jsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--354dea05.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/omda/Desktop/25Pomodoro/src/App.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import "/src/App.css.js";
import logo from "/src/assets/logo.png__import.js";
import clickSound from "/src/assets/sessionStarted.mp3__import.js";
import __vite__cjsImport6_react from "/vendor/.vite-deps-react.js__v--354dea05.js"; const useState = __vite__cjsImport6_react["useState"]; const useEffect = __vite__cjsImport6_react["useEffect"];
function App() {
  _s();
  const [time, setTimer] = useState("25:00");
  const [isRunning, setIsRunning] = useState(false);
  const [sessionOn, setSessionOn] = useState(false);
  var soundEffect = new Audio(chrome.runtime.getURL(clickSound));
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
    takeOverlayOff();
  };
  const takeOverlayOff = () => {
    document.querySelector(".overlay").style.display = "none";
  };
  const showOverlay = () => {
    document.querySelector(".overlay").style.display = "block";
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "wrapper", children: [
    /* @__PURE__ */ jsxDEV(
      "svg",
      {
        fill: "#000000",
        width: "25px",
        height: "25px",
        viewBox: "0 0 1920 1920",
        xmlns: "http://www.w3.org/2000/svg",
        className: "resetButton",
        onClick: showOverlay,
        children: /* @__PURE__ */ jsxDEV(
          "path",
          {
            d: "M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
          },
          void 0,
          false,
          {
            fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
            lineNumber: 79,
            columnNumber: 17
          },
          this
        )
      },
      void 0,
      false,
      {
        fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
        lineNumber: 75,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("img", { src: logo, className: "logo", alt: "Pomodoro logo", onClick: () => {
      window.open("http://stackoverflow.com", "_blank");
    } }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 85,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("h1", { children: "25Pomodoro" }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 89,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "timer", children: /* @__PURE__ */ jsxDEV("span", { children: time }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 92,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "card", children: /* @__PURE__ */ jsxDEV("button", { onClick: startTimer, className: "mainButton", children: "Start session" }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 96,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 95,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "note", children: "Stay tuned for our updates" }, void 0, false, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 98,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "overlay", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "overlay-message", children: [
        "Are you sure you ",
        /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
          fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
          lineNumber: 101,
          columnNumber: 67
        }, this),
        " want to reset your session?"
      ] }, void 0, true, {
        fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
        lineNumber: 101,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("section", { className: "buttonsOverlay", children: [
        /* @__PURE__ */ jsxDEV("button", { onClick: resetTimer, children: "Yes" }, void 0, false, {
          fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
          lineNumber: 103,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("button", { onClick: takeOverlayOff, children: "No" }, void 0, false, {
          fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
          lineNumber: 104,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
        lineNumber: 102,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
      lineNumber: 100,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/omda/Desktop/25Pomodoro/src/App.jsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
_s(App, "lCADB1/5e8s0tVRPpocPhvUUpzM=");
_c = App;
export default App;
var _c;
$RefreshReg$(_c, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/omda/Desktop/25Pomodoro/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
