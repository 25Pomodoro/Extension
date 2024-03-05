import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/Components/Timer.jsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--d472034d.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
import __vite__cjsImport3_react from "/vendor/.vite-deps-react.js__v--d472034d.js"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import { startTimer, resetTimer, sessionOn, time } from "/src/background.jsx.js";
function Timer() {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center mt-8 gap-3", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "", children: /* @__PURE__ */ jsxDEV("h1", { className: "font-bold text-4xl select-none cursor-default", children: time }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center items-center gap-3", children: [
      /* @__PURE__ */ jsxDEV("button", { className: "p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400", id: "button-1", onClick: startTimer, children: "Start session" }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
        lineNumber: 13,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("button", { className: "p-4 bg-gray-100 rounded-md w-5/12 drop-shadow-xl shadow-teal-400", id: "button-2", onClick: resetTimer, hidden: !sessionOn, children: "Reset session" }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
        lineNumber: 14,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Timer.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
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
