import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/Components/Data.jsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--d472034d.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import spotify from "/src/assets/icons/spotify.svg__import.js";
import profile from "/src/assets/icons/profile.svg__import.js";
import tasks from "/src/assets/icons/tasks.svg__import.js";
import theme from "/src/assets/icons/theme.svg__import.js";
function Data() {
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center items-center gap-3", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-semibold", children: "Welcome Emad" }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
        lineNumber: 10,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-md font-semibold", children: "Let's get productive 🚀" }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
        lineNumber: 11,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "flex flex-row w-8/12 justify-center items-center gap-5", children: [
      /* @__PURE__ */ jsxDEV("img", { className: "hover:scale-110 hover:cursor-pointer ease-in-out transition-all", src: profile, alt: "profile icon", width: 50 }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("img", { className: "hover:scale-110 hover:cursor-pointer ease-in-out transition-all", src: tasks, alt: "tasks icon", width: 50 }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("img", { className: "hover:scale-110 hover:cursor-pointer ease-in-out transition-all", src: theme, alt: "theme icon", width: 50 }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
        lineNumber: 17,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
_c = Data;
export default Data;
var _c;
$RefreshReg$(_c, "Data");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Data.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
