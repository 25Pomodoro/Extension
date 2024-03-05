import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/Components/Actions.jsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--ba9d7161.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Actions.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import Timer from "/src/Components/Timer.jsx.js";
function Actions() {
  return /* @__PURE__ */ jsxDEV("div", { className: "actions", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "mainButton", onClick: startTimer, children: "Start session" }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Actions.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "resetButton", onClick: resetTimer, children: "Reset" }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Actions.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Actions.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
_c = Actions;
export default Actions;
var _c;
$RefreshReg$(_c, "Actions");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Actions.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
