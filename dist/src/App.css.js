import { createHotContext as __vite__createHotContext } from "/vendor/vite-client.js";import.meta.hot = __vite__createHotContext("/src/App.css.js");import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from "/vendor/vite-client.js"
const __vite__id = "/Users/omda/Desktop/Programming/Extension/src/App.css"
const __vite__css = ".wrapper {\n    width:100%;\n    height:100%;\n}\n\n.resetButton {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 5px;\n    animation-fill-mode: both;\n}\n.resetButton:hover {\n    animation: rotate 2s linear infinite;\n    cursor: pointer;\n}\n@keyframes rotate {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n.logo {\n  height: 8em;\n  padding: 1.2em;\n  will-change: filter;\n  transition:  300ms;\n}\n\n.logo:hover {\n    filter: drop-shadow(0 0 1em darkred);\n    cursor: pointer;\n}\n\n.card {\n    padding: 2em;\n    border: none;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n.card button{\n    padding: 1em;\n    margin: 2px;\n    border: none;\n    border-radius: 5px;\n    max-width: 100px;\n\n    font-size: 15px;\n\n}\n.card button:hover{\n    background-color: #f5f5f5;\n    cursor: pointer;\n}\n\n\n.note {\n  color: #888;\n}\n\n.timer span {\n    font-size: 2em;\n    font-weight: bold;\n    color: darkred;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Old versions of Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n}\n\n.overlay {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    backdrop-filter: blur(10px);\n\n\n    background-color:rgba(0, 0, 0, 0.65);\n    text-align: center;\n    align-content: center;\n    display: none;\n}\n\n.overlay p {\n    font-size: 1.5em;\n    font-weight: bold;\n    color: white;\n    margin-top: 40%;\n}\n.buttonsOverlay{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.buttonsOverlay button{\n    width: 50px;\n    margin: 3px;\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n\n    font-size: 13px;\n\n}\n.buttonsOverlay button:hover{\n    background-color: #f5f5f5;\n    cursor: pointer;\n}\n"
__vite__updateStyle(__vite__id, __vite__css)
import.meta.hot.accept()
import.meta.hot.prune(() => __vite__removeStyle(__vite__id))