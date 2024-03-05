import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/Components/Footer.jsx.js");import __vite__cjsImport0_react_jsxDevRuntime from "/vendor/.vite-deps-react_jsx-dev-runtime.js__v--d472034d.js"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
    RefreshRuntime.register(type, "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Footer.jsx " + id);
  };
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import spotify from "/src/assets/icons/spotify.svg__import.js";
function Footer() {
  const goToSpotifyProfile = () => {
    chrome.tabs.create({ url: "https://open.spotify.com/user/31zg4v7g7z6p5z6z5v7z7z4" });
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "flex flex-row justify-between p-2 bottom-0 absolute w-full", children: [
    /* @__PURE__ */ jsxDEV("p", { className: "font-semibold", children: [
      "Created by ",
      /* @__PURE__ */ jsxDEV("a", { href: "https://github.com/Emad-Eldin-G", children: "Emad-Eldin-G" }, void 0, false, {
        fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Footer.jsx",
        lineNumber: 11,
        columnNumber: 49
      }, this)
    ] }, void 0, true, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Footer.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("img", { className: "hover:cursor-pointer hover:scale-105 transition-all ease-in-out", onClick: goToSpotifyProfile, src: spotify, alt: "spotify icon", width: 20 }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Footer.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Footer.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Footer.jsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
_c = Footer;
export default Footer;
var _c;
$RefreshReg$(_c, "Footer");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/Users/omda/Desktop/Programming/Projects/Extension/src/Components/Footer.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports)
        return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate(currentExports, nextExports);
      if (invalidateMessage)
        import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
