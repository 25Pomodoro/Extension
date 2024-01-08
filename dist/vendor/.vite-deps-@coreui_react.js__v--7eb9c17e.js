import {
  require_react_dom
} from "/vendor/.vite-deps-chunk-MCEUSTYS.js__v--7eb9c17e.js";
import {
  __toESM,
  require_react
} from "/vendor/.vite-deps-chunk-S2TLTWWO.js__v--7eb9c17e.js";

// node_modules/@coreui/react/dist/index.es.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var propTypes = { exports: {} };
var reactIs = { exports: {} };
var reactIs_development = {};
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development)
    return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (true) {
    (function() {
      var hasSymbol = typeof Symbol === "function" && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
      var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
      var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
      var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
      var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
      var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
      function isValidElementType(type) {
        return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
      }
      function typeOf(object) {
        if (typeof object === "object" && object !== null) {
          var $$typeof = object.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;
              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;
                default:
                  var $$typeofType = type && type.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element2 = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }
      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }
      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }
      function isElement2(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }
      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }
      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.AsyncMode = AsyncMode;
      reactIs_development.ConcurrentMode = ConcurrentMode;
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element2;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement2;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf;
    })();
  }
  return reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs)
    return reactIs.exports;
  hasRequiredReactIs = 1;
  if (false) {
    reactIs.exports = requireReactIs_production_min();
  } else {
    reactIs.exports = requireReactIs_development();
  }
  return reactIs.exports;
}
var objectAssign;
var hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign)
    return objectAssign;
  hasRequiredObjectAssign = 1;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === void 0) {
      throw new TypeError("Object.assign cannot be called with null or undefined");
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
      var test1 = new String("abc");
      test1[5] = "de";
      if (Object.getOwnPropertyNames(test1)[0] === "5") {
        return false;
      }
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2["_" + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n];
      });
      if (order2.join("") !== "0123456789") {
        return false;
      }
      var test3 = {};
      "abcdefghijklmnopqrst".split("").forEach(function(letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
        return false;
      }
      return true;
    } catch (err) {
      return false;
    }
  }
  objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };
  return objectAssign;
}
var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ReactPropTypesSecret_1 = ReactPropTypesSecret;
  return ReactPropTypesSecret_1;
}
var has;
var hasRequiredHas;
function requireHas() {
  if (hasRequiredHas)
    return has;
  hasRequiredHas = 1;
  has = Function.call.bind(Object.prototype.hasOwnProperty);
  return has;
}
var checkPropTypes_1;
var hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes)
    return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var printWarning = function() {
  };
  if (true) {
    var ReactPropTypesSecret = requireReactPropTypesSecret();
    var loggedTypeFailures = {};
    var has2 = requireHas();
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (true) {
      for (var typeSpecName in typeSpecs) {
        if (has2(typeSpecs, typeSpecName)) {
          var error;
          try {
            if (typeof typeSpecs[typeSpecName] !== "function") {
              var err = Error(
                (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              err.name = "Invariant Violation";
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            );
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : "";
            printWarning(
              "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
            );
          }
        }
      }
    }
  }
  checkPropTypes.resetWarningCache = function() {
    if (true) {
      loggedTypeFailures = {};
    }
  };
  checkPropTypes_1 = checkPropTypes;
  return checkPropTypes_1;
}
var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers)
    return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var ReactIs = requireReactIs();
  var assign = requireObjectAssign();
  var ReactPropTypesSecret = requireReactPropTypesSecret();
  var has2 = requireHas();
  var checkPropTypes = requireCheckPropTypes();
  var printWarning = function() {
  };
  if (true) {
    printWarning = function(text) {
      var message = "Warning: " + text;
      if (typeof console !== "undefined") {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {
      }
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === "function") {
        return iteratorFn;
      }
    }
    var ANONYMOUS = "<<anonymous>>";
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker("array"),
      bigint: createPrimitiveTypeChecker("bigint"),
      bool: createPrimitiveTypeChecker("boolean"),
      func: createPrimitiveTypeChecker("function"),
      number: createPrimitiveTypeChecker("number"),
      object: createPrimitiveTypeChecker("object"),
      string: createPrimitiveTypeChecker("string"),
      symbol: createPrimitiveTypeChecker("symbol"),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
    function is(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === "object" ? data : {};
      this.stack = "";
    }
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      if (true) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            var err = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            err.name = "Invariant Violation";
            throw err;
          } else if (typeof console !== "undefined") {
            var cacheKey = componentName + ":" + propName;
            if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning(
                "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
            }
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          var preciseType = getPreciseType(propValue);
          return new PropTypeError(
            "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
            { expectedType }
          );
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!ReactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        if (true) {
          if (arguments.length > 1) {
            printWarning(
              "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
            );
          } else {
            printWarning("Invalid argument supplied to oneOf, expected an array.");
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === "symbol") {
            return String(value);
          }
          return value;
        });
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== "function") {
          return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
        }
        for (var key in propValue) {
          if (has2(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== "function") {
          printWarning(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
          );
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
          var checker2 = arrayOfTypeCheckers[i2];
          var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has2(checkerResult.data, "expectedType")) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError(
        (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
      );
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== "object") {
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
        }
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has2(shapeTypes, key) && typeof checker !== "function") {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case "number":
        case "string":
        case "undefined":
          return true;
        case "boolean":
          return !propValue;
        case "object":
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      if (propType === "symbol") {
        return true;
      }
      if (!propValue) {
        return false;
      }
      if (propValue["@@toStringTag"] === "Symbol") {
        return true;
      }
      if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return "array";
      }
      if (propValue instanceof RegExp) {
        return "object";
      }
      if (isSymbol(propType, propValue)) {
        return "symbol";
      }
      return propType;
    }
    function getPreciseType(propValue) {
      if (typeof propValue === "undefined" || propValue === null) {
        return "" + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === "object") {
        if (propValue instanceof Date) {
          return "date";
        } else if (propValue instanceof RegExp) {
          return "regexp";
        }
      }
      return propType;
    }
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case "array":
        case "object":
          return "an " + type;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + type;
        default:
          return type;
      }
    }
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };
  return factoryWithTypeCheckers;
}
if (true) {
  ReactIs = requireReactIs();
  throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  propTypes.exports = requireFactoryWithThrowingShims()();
}
var ReactIs;
var throwOnDirectAccess;
var propTypesExports = propTypes.exports;
var PropTypes = getDefaultExportFromCjs(propTypesExports);
var classnames = { exports: {} };
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
var classNames = getDefaultExportFromCjs(classnamesExports);
var CAccordionContext = (0, import_react.createContext)({});
var CAccordion = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, activeItemKey = _a.activeItemKey, _b = _a.alwaysOpen, alwaysOpen = _b === void 0 ? false : _b, className = _a.className, flush = _a.flush, rest = __rest(_a, ["children", "activeItemKey", "alwaysOpen", "className", "flush"]);
  var _c = (0, import_react.useState)(activeItemKey), _activeItemKey = _c[0], setActiveKey = _c[1];
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("accordion", { "accordion-flush": flush }, className) }, rest, { ref }),
    import_react.default.createElement(CAccordionContext.Provider, { value: { _activeItemKey, alwaysOpen, setActiveKey } }, children)
  );
});
CAccordion.propTypes = {
  alwaysOpen: PropTypes.bool,
  activeItemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  flush: PropTypes.bool
};
CAccordion.displayName = "CAccordion";
var CAccordionItemContext = (0, import_react.createContext)({});
var CAccordionItem = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, itemKey = _a.itemKey, rest = __rest(_a, ["children", "className", "itemKey"]);
  var _itemKey = (0, import_react.useRef)(itemKey !== null && itemKey !== void 0 ? itemKey : Math.random().toString(36).slice(2, 11));
  var _b = (0, import_react.useContext)(CAccordionContext), _activeItemKey = _b._activeItemKey, alwaysOpen = _b.alwaysOpen, setActiveKey = _b.setActiveKey;
  var _c = (0, import_react.useState)(Boolean(_activeItemKey === _itemKey.current)), visible = _c[0], setVisible = _c[1];
  (0, import_react.useEffect)(function() {
    !alwaysOpen && visible && setActiveKey(_itemKey.current);
  }, [visible]);
  (0, import_react.useEffect)(function() {
    setVisible(Boolean(_activeItemKey === _itemKey.current));
  }, [_activeItemKey]);
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("accordion-item", className) }, rest, { ref }),
    import_react.default.createElement(CAccordionItemContext.Provider, { value: { setVisible, visible } }, children)
  );
});
CAccordionItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  itemKey: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
CAccordionItem.displayName = "CAccordionItem";
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
function addClass(element, className) {
  if (element.classList)
    element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === "string")
      element.className = element.className + " " + className;
    else
      element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === "string") {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
  }
}
var config = {
  disabled: false
};
var timeoutsShape = true ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = true ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;
var TransitionGroupContext = import_react.default.createContext(null);
var forceReflow = function forceReflow2(node) {
  return node.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
          if (node)
            forceReflow(node);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      import_react.default.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : import_react.default.cloneElement(import_react.default.Children.only(children), childProps))
    );
  };
  return Transition2;
}(import_react.default.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === "undefined" ? PropTypes.any : function(propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener)
      pt = pt.isRequired;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return pt.apply(void 0, [props].concat(args));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;
var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return addClass(node, c);
  });
};
var removeClass = function removeClass2(node, classes) {
  return node && classes && classes.split(" ").forEach(function(c) {
    return removeClass$1(node, c);
  });
};
var CSSTransition = function(_React$Component) {
  _inheritsLoose(CSSTransition2, _React$Component);
  function CSSTransition2() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };
    _this.onEnter = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument[0], appearing = _this$resolveArgument[1];
      _this.removeClasses(node, "exit");
      _this.addClass(node, appearing ? "appear" : "enter", "base");
      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };
    _this.onEntering = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument2[0], appearing = _this$resolveArgument2[1];
      var type = appearing ? "appear" : "enter";
      _this.addClass(node, type, "active");
      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };
    _this.onEntered = function(maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing), node = _this$resolveArgument3[0], appearing = _this$resolveArgument3[1];
      var type = appearing ? "appear" : "enter";
      _this.removeClasses(node, type);
      _this.addClass(node, type, "done");
      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };
    _this.onExit = function(maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode), node = _this$resolveArgument4[0];
      _this.removeClasses(node, "appear");
      _this.removeClasses(node, "enter");
      _this.addClass(node, "exit", "base");
      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };
    _this.onExiting = function(maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode), node = _this$resolveArgument5[0];
      _this.addClass(node, "exit", "active");
      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };
    _this.onExited = function(maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode), node = _this$resolveArgument6[0];
      _this.removeClasses(node, "exit");
      _this.addClass(node, "exit", "done");
      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };
    _this.resolveArguments = function(maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] : [maybeNode, maybeAppearing];
    };
    _this.getClassNames = function(type) {
      var classNames2 = _this.props.classNames;
      var isStringClassNames = typeof classNames2 === "string";
      var prefix = isStringClassNames && classNames2 ? classNames2 + "-" : "";
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames2[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames2[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames2[type + "Done"];
      return {
        baseClassName,
        activeClassName,
        doneClassName
      };
    };
    return _this;
  }
  var _proto = CSSTransition2.prototype;
  _proto.addClass = function addClass2(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];
    var _this$getClassNames = this.getClassNames("enter"), doneClassName = _this$getClassNames.doneClassName;
    if (type === "appear" && phase === "done" && doneClassName) {
      className += " " + doneClassName;
    }
    if (phase === "active") {
      if (node)
        forceReflow(node);
    }
    if (className) {
      this.appliedClasses[type][phase] = className;
      _addClass(node, className);
    }
  };
  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type], baseClassName = _this$appliedClasses$.base, activeClassName = _this$appliedClasses$.active, doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};
    if (baseClassName) {
      removeClass(node, baseClassName);
    }
    if (activeClassName) {
      removeClass(node, activeClassName);
    }
    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };
  _proto.render = function render() {
    var _this$props = this.props;
    _this$props.classNames;
    var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);
    return import_react.default.createElement(Transition$1, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition2;
}(import_react.default.Component);
CSSTransition.defaultProps = {
  classNames: ""
};
CSSTransition.propTypes = true ? _extends({}, Transition$1.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : {};
var CSSTransition$1 = CSSTransition;
function useForkedRef() {
  var refs = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    refs[_i] = arguments[_i];
  }
  return (0, import_react.useMemo)(function() {
    if (refs.every(function(ref) {
      return ref == null;
    })) {
      return null;
    }
    return function(node) {
      refs.forEach(function(ref) {
        assignRef(ref, node);
      });
    };
  }, refs);
}
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (_a) {
      throw new Error('Cannot assign value "'.concat(value, '" to ref "').concat(ref, '"'));
    }
  }
}
function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
var arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
var hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }
  state.modifiersData[name] = data;
}
var offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = popperGenerator({
  defaultModifiers
});
var getTransitionDurationFromElement = function(element) {
  if (!element) {
    return 0;
  }
  var _a = window.getComputedStyle(element), transitionDuration = _a.transitionDuration, transitionDelay = _a.transitionDelay;
  var floatTransitionDuration = Number.parseFloat(transitionDuration);
  var floatTransitionDelay = Number.parseFloat(transitionDelay);
  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }
  transitionDuration = transitionDuration.split(",")[0];
  transitionDelay = transitionDelay.split(",")[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1e3;
};
var execute = function(callback) {
  if (typeof callback === "function") {
    callback();
  }
};
var triggerTransitionEnd = function(element) {
  element.dispatchEvent(new Event("transitionend"));
};
var executeAfterTransition = function(callback, transitionElement, waitForTransition) {
  if (waitForTransition === void 0) {
    waitForTransition = true;
  }
  if (!waitForTransition) {
    execute(callback);
    return;
  }
  var durationPadding = 5;
  var emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  var called = false;
  var handler = function(_a) {
    var target = _a.target;
    if (target !== transitionElement) {
      return;
    }
    called = true;
    transitionElement.removeEventListener("transitionend", handler);
    execute(callback);
  };
  transitionElement.addEventListener("transitionend", handler);
  setTimeout(function() {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
var isRTL = function(element) {
  if (typeof document !== "undefined" && document.documentElement.dir === "rtl") {
    return true;
  }
  if (element) {
    return element.closest('[dir="rtl"]') !== null;
  }
  return false;
};
var getRTLPlacement = function(placement, element) {
  switch (placement) {
    case "right": {
      return isRTL(element) ? "left" : "right";
    }
    case "left": {
      return isRTL(element) ? "right" : "left";
    }
    default: {
      return placement;
    }
  }
};
var isInViewport = function(element) {
  var rect = element.getBoundingClientRect();
  return Math.floor(rect.top) >= 0 && Math.floor(rect.left) >= 0 && Math.floor(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) && Math.floor(rect.right) <= (window.innerWidth || document.documentElement.clientWidth);
};
var usePopper = function() {
  var _popper = (0, import_react.useRef)();
  var el = (0, import_react.useRef)();
  var initPopper = function(reference2, popper2, options) {
    _popper.current = createPopper(reference2, popper2, options);
    el.current = popper2;
  };
  var destroyPopper = function() {
    var popperInstance = _popper.current;
    if (popperInstance && el.current) {
      executeAfterTransition(function() {
        popperInstance.destroy();
      }, el.current);
    }
    _popper.current = void 0;
  };
  return {
    popper: _popper.current,
    initPopper,
    destroyPopper
  };
};
var CCollapse = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, horizontal = _a.horizontal, onHide = _a.onHide, onShow = _a.onShow, visible = _a.visible, rest = __rest(_a, ["children", "className", "horizontal", "onHide", "onShow", "visible"]);
  var collapseRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, collapseRef);
  var _b = (0, import_react.useState)(), height = _b[0], setHeight = _b[1];
  var _c = (0, import_react.useState)(), width = _c[0], setWidth = _c[1];
  var onEntering = function() {
    onShow && onShow();
    if (horizontal) {
      collapseRef.current && setWidth(collapseRef.current.scrollWidth);
      return;
    }
    collapseRef.current && setHeight(collapseRef.current.scrollHeight);
  };
  var onEntered = function() {
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  var onExit = function() {
    if (horizontal) {
      collapseRef.current && setWidth(collapseRef.current.scrollWidth);
      return;
    }
    collapseRef.current && setHeight(collapseRef.current.scrollHeight);
  };
  var onExiting = function() {
    onHide && onHide();
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  var onExited = function() {
    if (horizontal) {
      setWidth(0);
      return;
    }
    setHeight(0);
  };
  return import_react.default.createElement(CSSTransition$1, { in: visible, nodeRef: collapseRef, onEntering, onEntered, onExit, onExiting, onExited, timeout: 350 }, function(state) {
    var currentHeight = height === 0 ? null : { height };
    var currentWidth = width === 0 ? null : { width };
    return import_react.default.createElement("div", __assign({ className: classNames(className, {
      "collapse-horizontal": horizontal,
      collapsing: state === "entering" || state === "exiting",
      "collapse show": state === "entered",
      collapse: state === "exited"
    }), style: __assign(__assign({}, currentHeight), currentWidth) }, rest, { ref: forkedRef }), children);
  });
});
CCollapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  visible: PropTypes.bool
};
CCollapse.displayName = "CCollapse";
var CAccordionBody = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var visible = (0, import_react.useContext)(CAccordionItemContext).visible;
  return import_react.default.createElement(
    CCollapse,
    { className: "accordion-collapse", visible },
    import_react.default.createElement("div", __assign({ className: classNames("accordion-body", className) }, rest, { ref }), children)
  );
});
CAccordionBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CAccordionBody.displayName = "CAccordionBody";
var CAccordionButton = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var _b = (0, import_react.useContext)(CAccordionItemContext), visible = _b.visible, setVisible = _b.setVisible;
  return import_react.default.createElement("button", __assign({ type: "button", className: classNames("accordion-button", { collapsed: !visible }, className), "aria-expanded": !visible, onClick: function() {
    return setVisible(!visible);
  } }, rest, { ref }), children);
});
CAccordionButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CAccordionButton.displayName = "CAccordionButton";
var CAccordionHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("accordion-header", className) }, rest, { ref }),
    import_react.default.createElement(CAccordionButton, null, children)
  );
});
CAccordionHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CAccordionHeader.displayName = "CAccordionHeader";
var CCloseButton = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, disabled = _a.disabled, white = _a.white, rest = __rest(_a, ["className", "disabled", "white"]);
  return import_react.default.createElement("button", __assign({ type: "button", className: classNames("btn", "btn-close", {
    "btn-close-white": white
  }, disabled, className), "aria-label": "Close", disabled }, rest, { ref }));
});
CCloseButton.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  white: PropTypes.bool
};
CCloseButton.displayName = "CCloseButton";
var colorPropType = PropTypes.oneOfType([
  PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "light"
  ]),
  PropTypes.string
]);
var fallbackPlacementsPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOf(["top", "bottom", "right", "left"]).isRequired),
  PropTypes.oneOf(["top", "bottom", "right", "left"])
]);
var placementPropType = PropTypes.oneOf([
  "auto",
  "auto-start",
  "auto-end",
  "top-end",
  "top",
  "top-start",
  "bottom-end",
  "bottom",
  "bottom-start",
  "right-start",
  "right",
  "right-end",
  "left-start",
  "left",
  "left-end"
]);
var shapePropType = PropTypes.oneOfType([
  PropTypes.oneOf([
    "rounded",
    "rounded-top",
    "rounded-end",
    "rounded-bottom",
    "rounded-start",
    "rounded-circle",
    "rounded-pill",
    "rounded-0",
    "rounded-1",
    "rounded-2",
    "rounded-3"
  ]),
  PropTypes.string
]);
var textColorsPropType = PropTypes.oneOfType([
  colorPropType,
  PropTypes.oneOf(["white", "muted"]),
  PropTypes.string
]);
var triggerPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.oneOf(["hover", "focus", "click"]).isRequired),
  PropTypes.oneOf(["hover", "focus", "click"])
]);
var CAlert = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? "primary" : _b, dismissible = _a.dismissible, variant = _a.variant, _c = _a.visible, visible = _c === void 0 ? true : _c, onClose = _a.onClose, rest = __rest(_a, ["children", "className", "color", "dismissible", "variant", "visible", "onClose"]);
  var alertRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, alertRef);
  var _d = (0, import_react.useState)(visible), _visible = _d[0], setVisible = _d[1];
  (0, import_react.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  return import_react.default.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: alertRef, onExit: onClose, timeout: 150, unmountOnExit: true }, function(state) {
    return import_react.default.createElement(
      "div",
      __assign({ className: classNames("alert", variant === "solid" ? "bg-".concat(color, " text-white") : "alert-".concat(color), {
        "alert-dismissible fade": dismissible,
        show: state === "entered"
      }, className), role: "alert" }, rest, { ref: forkedRef }),
      children,
      dismissible && import_react.default.createElement(CCloseButton, { onClick: function() {
        return setVisible(false);
      } })
    );
  });
});
CAlert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType.isRequired,
  dismissible: PropTypes.bool,
  onClose: PropTypes.func,
  variant: PropTypes.string,
  visible: PropTypes.bool
};
CAlert.displayName = "CAlert";
var CAlertHeading = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? "h4" : _b, rest = __rest(_a, ["children", "className", "component"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("alert-heading", className) }, rest, { ref }), children);
});
CAlertHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CAlertHeading.displayName = "CAlertHeading";
var CLink = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, active = _a.active, className = _a.className, _b = _a.component, Component = _b === void 0 ? "a" : _b, disabled = _a.disabled, rest = __rest(_a, ["children", "active", "className", "component", "disabled"]);
  return import_react.default.createElement(
    Component,
    __assign({
      // TODO: remove duplicated classes ex. `active active` in `<CListGroupItem>`
      className: classNames(className, { active, disabled })
    }, active && { "aria-current": "page" }, Component === "a" && disabled && { "aria-disabled": true, tabIndex: -1 }, (Component === "a" || Component === "button") && {
      onClick: function(event) {
        event.preventDefault;
        !disabled && rest.onClick && rest.onClick(event);
      }
    }, { disabled }, rest, { ref }),
    children
  );
});
CLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  disabled: PropTypes.bool
};
CLink.displayName = "CLink";
var CAlertLink = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement(CLink, __assign({ className: classNames("alert-link", className) }, rest, { ref }), children);
});
CAlertLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CAlertLink.displayName = "CAlertLink";
var CAvatar = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, shape = _a.shape, size = _a.size, src = _a.src, status = _a.status, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "shape", "size", "src", "status", "textColor"]);
  var statusClassName = status && classNames("avatar-status", "bg-".concat(status));
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("avatar", (_b = {}, _b["bg-".concat(color)] = color, _b["avatar-".concat(size)] = size, _b["text-".concat(textColor)] = textColor, _b), shape, className) }, rest, { ref }),
    src ? import_react.default.createElement("img", { src, className: "avatar-img" }) : children,
    status && import_react.default.createElement("span", { className: statusClassName })
  );
});
CAvatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  shape: shapePropType,
  size: PropTypes.string,
  src: PropTypes.string,
  status: PropTypes.string,
  textColor: textColorsPropType
};
CAvatar.displayName = "CAvatar";
var CBackdrop = (0, import_react.forwardRef)(function(_a, ref) {
  var _b = _a.className, className = _b === void 0 ? "modal-backdrop" : _b, visible = _a.visible, rest = __rest(_a, ["className", "visible"]);
  var backdropRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, backdropRef);
  return import_react.default.createElement(Transition$1, { in: visible, mountOnEnter: true, nodeRef: backdropRef, timeout: 150, unmountOnExit: true }, function(state) {
    return import_react.default.createElement("div", __assign({ className: classNames(className, "fade", {
      show: state === "entered"
    }) }, rest, { ref: forkedRef }));
  });
});
CBackdrop.propTypes = {
  className: PropTypes.string,
  visible: PropTypes.bool
};
CBackdrop.displayName = "CBackdrop";
var CBadge = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, _c = _a.component, Component = _c === void 0 ? "span" : _c, position = _a.position, shape = _a.shape, size = _a.size, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "component", "position", "shape", "size", "textColor"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("badge", (_b = {}, _b["bg-".concat(color)] = color, _b["position-absolute translate-middle"] = position, _b["top-0"] = position === null || position === void 0 ? void 0 : position.includes("top"), _b["top-100"] = position === null || position === void 0 ? void 0 : position.includes("bottom"), _b["start-100"] = position === null || position === void 0 ? void 0 : position.includes("end"), _b["start-0"] = position === null || position === void 0 ? void 0 : position.includes("start"), _b["badge-".concat(size)] = size, _b["text-".concat(textColor)] = textColor, _b), shape, className) }, rest, { ref }), children);
});
CBadge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.string,
  position: PropTypes.oneOf(["top-start", "top-end", "bottom-end", "bottom-start"]),
  shape: shapePropType,
  size: PropTypes.oneOf(["sm"]),
  textColor: textColorsPropType
};
CBadge.displayName = "CBadge";
var CBreadcrumb = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement(
    "nav",
    { "aria-label": "breadcrumb" },
    import_react.default.createElement("ol", __assign({ className: classNames("breadcrumb", className) }, rest, { ref }), children)
  );
});
CBreadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CBreadcrumb.displayName = "CBreadcrumb";
var CBreadcrumbItem = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, active = _a.active, className = _a.className, href = _a.href, rest = __rest(_a, ["children", "active", "className", "href"]);
  return import_react.default.createElement("li", __assign({ className: classNames("breadcrumb-item", {
    active
  }, className) }, active && { "aria-current": "page" }, rest, { ref }), href ? import_react.default.createElement(CLink, { href }, children) : children);
});
CBreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string
};
CBreadcrumbItem.displayName = "CBreadcrumbItem";
var CButton = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.component, component = _d === void 0 ? "button" : _d, shape = _a.shape, size = _a.size, _e = _a.type, type = _e === void 0 ? "button" : _e, variant = _a.variant, rest = __rest(_a, ["children", "className", "color", "component", "shape", "size", "type", "variant"]);
  return import_react.default.createElement(CLink, __assign({ component: rest.href ? "a" : component, type, className: classNames("btn", variant ? "btn-".concat(variant, "-").concat(color) : "btn-".concat(color), (_b = {}, _b["btn-".concat(size)] = size, _b), shape, className) }, rest, { ref }), children);
});
CButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.elementType,
  shape: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["outline", "ghost"])
};
CButton.displayName = "CButton";
var CButtonToolbar = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("btn-toolbar", className) }, rest, { ref }), children);
});
CButtonToolbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CButtonToolbar.displayName = "CButtonToolbar";
var CButtonGroup = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, size = _a.size, vertical = _a.vertical, rest = __rest(_a, ["children", "className", "size", "vertical"]);
  return import_react.default.createElement("div", __assign({ className: classNames(vertical ? "btn-group-vertical" : "btn-group", (_b = {}, _b["btn-group-".concat(size)] = size, _b), className) }, rest, { ref }), children);
});
CButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  vertical: PropTypes.bool
};
CButtonGroup.displayName = "CButtonGroup";
var CCallout = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react.default.createElement("div", __assign({ className: classNames("callout", (_b = {}, _b["callout-".concat(color)] = color, _b), className) }, rest, { ref }), children);
});
CCallout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CCallout.displayName = "CCallout";
var CCard = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "textColor"]);
  return import_react.default.createElement("div", __assign({ className: classNames("card", (_b = {}, _b["bg-".concat(color)] = color, _b["text-".concat(textColor)] = textColor, _b), className) }, rest, { ref }), children);
});
CCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  textColor: PropTypes.string
};
CCard.displayName = "CCard";
var CCardBody = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("card-body", className) }, rest, { ref }), children);
});
CCardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CCardBody.displayName = "CCardBody";
var CCardFooter = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("card-footer", className) }, rest, { ref }), children);
});
CCardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CCardFooter.displayName = "CCardFooter";
var CCardGroup = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("card-group", className) }, rest, { ref }), children);
});
CCardGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CCardGroup.displayName = "CCardGroup";
var CCardHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "div" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("card-header", className) }, rest, { ref }), children);
});
CCardHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CCardHeader.displayName = "CCardHeader";
var CCardImage = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? "img" : _b, orientation = _a.orientation, rest = __rest(_a, ["children", "className", "component", "orientation"]);
  return import_react.default.createElement(Component, __assign({ className: classNames(orientation ? "card-img-".concat(orientation) : "card-img", className) }, rest, { ref }), children);
});
CCardImage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  orientation: PropTypes.oneOf(["top", "bottom"])
};
CCardImage.displayName = "CCardImage";
var CCardImageOverlay = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("card-img-overlay", className) }, rest, { ref }), children);
});
CCardImageOverlay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CCardImageOverlay.displayName = "CCardImageOverlay";
var CCardLink = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement(CLink, __assign({ className: classNames("card-link", className) }, rest, { ref }), children);
});
CCardLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CCardLink.displayName = "CCardLink";
var CCardSubtitle = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "h6" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("card-subtitle", className) }, rest, { ref }), children);
});
CCardSubtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CCardSubtitle.displayName = "CCardSubtitle";
var CCardText = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "p" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("card-text", className) }, rest, { ref }), children);
});
CCardText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CCardText.displayName = "CCardText";
var CCardTitle = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "h5" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("card-title", className) }, rest, { ref }), children);
});
CCardTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CCardTitle.displayName = "CCardTitle";
var CCarouselContext = (0, import_react.createContext)({});
var CCarousel = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, className = _a.className, controls = _a.controls, dark = _a.dark, indicators = _a.indicators, _c = _a.interval, interval = _c === void 0 ? 5e3 : _c, onSlid = _a.onSlid, onSlide = _a.onSlide, _d = _a.pause, pause = _d === void 0 ? "hover" : _d, _e = _a.touch, touch = _e === void 0 ? true : _e, transition = _a.transition, _f = _a.wrap, wrap = _f === void 0 ? true : _f, rest = __rest(_a, ["children", "activeIndex", "className", "controls", "dark", "indicators", "interval", "onSlid", "onSlide", "pause", "touch", "transition", "wrap"]);
  var carouselRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, carouselRef);
  var data = (0, import_react.useRef)({}).current;
  var _g = (0, import_react.useState)(activeIndex), active = _g[0], setActive = _g[1];
  var _h = (0, import_react.useState)(false), animating = _h[0], setAnimating = _h[1];
  var _j = (0, import_react.useState)(), customInterval = _j[0], setCustomInterval = _j[1];
  var _k = (0, import_react.useState)("next"), direction = _k[0], setDirection = _k[1];
  var _l = (0, import_react.useState)(0), itemsNumber = _l[0], setItemsNumber = _l[1];
  var _m = (0, import_react.useState)(null), touchPosition = _m[0], setTouchPosition = _m[1];
  var _o = (0, import_react.useState)(), visible = _o[0], setVisible = _o[1];
  (0, import_react.useEffect)(function() {
    setItemsNumber(import_react.Children.toArray(children).length);
  });
  (0, import_react.useEffect)(function() {
    visible && cycle();
  }, [visible]);
  (0, import_react.useEffect)(function() {
    !animating && cycle();
    !animating && onSlid && onSlid(active, direction);
    animating && onSlide && onSlide(active, direction);
  }, [animating]);
  (0, import_react.useEffect)(function() {
    window.addEventListener("scroll", handleScroll);
    return function() {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  var cycle = function() {
    _pause();
    if (!wrap && active === itemsNumber - 1) {
      return;
    }
    if (typeof interval === "number") {
      data.timeout = setTimeout(function() {
        return nextItemWhenVisible();
      }, typeof customInterval === "number" ? customInterval : interval);
    }
  };
  var _pause = function() {
    return pause && data.timeout && clearTimeout(data.timeout);
  };
  var nextItemWhenVisible = function() {
    if (!document.hidden && carouselRef.current && isInViewport(carouselRef.current)) {
      if (animating) {
        return;
      }
      handleControlClick("next");
    }
  };
  var handleControlClick = function(direction2) {
    if (animating) {
      return;
    }
    setDirection(direction2);
    if (direction2 === "next") {
      active === itemsNumber - 1 ? setActive(0) : setActive(active + 1);
    } else {
      active === 0 ? setActive(itemsNumber - 1) : setActive(active - 1);
    }
  };
  var handleIndicatorClick = function(index) {
    if (active === index) {
      return;
    }
    if (active < index) {
      setDirection("next");
      setActive(index);
      return;
    }
    if (active > index) {
      setDirection("prev");
      setActive(index);
    }
  };
  var handleScroll = function() {
    if (!document.hidden && carouselRef.current && isInViewport(carouselRef.current)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  var handleTouchMove = function(e) {
    var touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    var currentTouch = e.touches[0].clientX;
    var diff = touchDown - currentTouch;
    if (diff > 5) {
      handleControlClick("next");
    }
    if (diff < -5) {
      handleControlClick("prev");
    }
    setTouchPosition(null);
  };
  var handleTouchStart = function(e) {
    var touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("carousel slide", {
      "carousel-dark": dark,
      "carousel-fade": transition === "crossfade"
    }, className), onMouseEnter: _pause, onMouseLeave: cycle }, touch && { onTouchStart: handleTouchStart, onTouchMove: handleTouchMove }, rest, { ref: forkedRef }),
    import_react.default.createElement(
      CCarouselContext.Provider,
      { value: {
        setAnimating,
        setCustomInterval
      } },
      indicators && import_react.default.createElement("ol", { className: "carousel-indicators" }, Array.from({ length: itemsNumber }, function(_, i) {
        return i;
      }).map(function(index) {
        return import_react.default.createElement("li", { key: "indicator".concat(index), onClick: function() {
          !animating && handleIndicatorClick(index);
        }, className: active === index ? "active" : "", "data-coreui-target": "" });
      })),
      import_react.default.createElement("div", { className: "carousel-inner" }, import_react.Children.map(children, function(child, index) {
        if (import_react.default.isValidElement(child)) {
          return import_react.default.cloneElement(child, {
            active: active === index ? true : false,
            direction,
            key: index
          });
        }
        return;
      })),
      controls && import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement(
          "button",
          { className: "carousel-control-prev", onClick: function() {
            return handleControlClick("prev");
          } },
          import_react.default.createElement("span", { className: "carousel-control-prev-icon", "aria-label": "prev" })
        ),
        import_react.default.createElement(
          "button",
          { className: "carousel-control-next", onClick: function() {
            return handleControlClick("next");
          } },
          import_react.default.createElement("span", { className: "carousel-control-next-icon", "aria-label": "next" })
        )
      )
    )
  );
});
CCarousel.propTypes = {
  activeIndex: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  controls: PropTypes.bool,
  dark: PropTypes.bool,
  indicators: PropTypes.bool,
  interval: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  onSlid: PropTypes.func,
  onSlide: PropTypes.func,
  pause: PropTypes.oneOf([false, "hover"]),
  touch: PropTypes.bool,
  transition: PropTypes.oneOf(["slide", "crossfade"]),
  wrap: PropTypes.bool
};
CCarousel.displayName = "CCarousel";
var CCarouselCaption = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, rest = __rest(_a, ["className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("carousel-caption", className) }, rest, { ref }));
});
CCarouselCaption.propTypes = {
  className: PropTypes.string
};
CCarouselCaption.displayName = "CCarouselCaption";
var CCarouselItem = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, active = _a.active, direction = _a.direction, _b = _a.interval, interval = _b === void 0 ? false : _b, rest = __rest(_a, ["children", "className", "active", "direction", "interval"]);
  var _c = (0, import_react.useContext)(CCarouselContext), setAnimating = _c.setAnimating, setCustomInterval = _c.setCustomInterval;
  var carouselItemRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, carouselItemRef);
  var prevActive = (0, import_react.useRef)();
  var _d = (0, import_react.useState)(), directionClassName = _d[0], setDirectionClassName = _d[1];
  var _e = (0, import_react.useState)(), orderClassName = _e[0], setOrderClassName = _e[1];
  var _f = (0, import_react.useState)(active && "active"), activeClassName = _f[0], setActiveClassName = _f[1];
  var _g = (0, import_react.useState)(0), count = _g[0], setCount = _g[1];
  (0, import_react.useEffect)(function() {
    if (active) {
      setCustomInterval(interval);
      if (count !== 0)
        setOrderClassName("carousel-item-".concat(direction));
    }
    if (prevActive.current && !active) {
      setActiveClassName("active");
    }
    if (active || prevActive.current) {
      setTimeout(function() {
        var _a2;
        if (count !== 0) {
          (_a2 = carouselItemRef.current) === null || _a2 === void 0 ? void 0 : _a2.offsetHeight;
          setDirectionClassName("carousel-item-".concat(direction === "next" ? "start" : "end"));
        }
      }, 0);
    }
    prevActive.current = active;
    if (count === 0)
      setCount(count + 1);
  }, [active]);
  (0, import_react.useEffect)(function() {
    var _a2, _b2;
    (_a2 = carouselItemRef.current) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("transitionstart", function() {
      active && setAnimating(true);
    });
    (_b2 = carouselItemRef.current) === null || _b2 === void 0 ? void 0 : _b2.addEventListener("transitionend", function() {
      active && setAnimating(false);
      setDirectionClassName("");
      setOrderClassName("");
      if (active) {
        setActiveClassName("active");
      }
      if (!active) {
        setActiveClassName("");
      }
    });
    return function() {
      var _a3, _b3;
      (_a3 = carouselItemRef.current) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("transitionstart", function() {
        active && setAnimating(true);
      });
      (_b3 = carouselItemRef.current) === null || _b3 === void 0 ? void 0 : _b3.removeEventListener("transitionend", function() {
        active && setAnimating(false);
        setDirectionClassName("");
        setOrderClassName("");
        if (active) {
          setActiveClassName("active");
        }
        if (!active) {
          setActiveClassName("");
        }
      });
    };
  });
  return import_react.default.createElement("div", __assign({ className: classNames("carousel-item", activeClassName, directionClassName, orderClassName, className), ref: forkedRef }, rest), children);
});
CCarouselItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  direction: PropTypes.string,
  interval: PropTypes.oneOfType([PropTypes.bool, PropTypes.number])
};
CCarouselItem.displayName = "CCarouselItem";
var getContainer = function(container) {
  if (container) {
    return typeof container === "function" ? container() : container;
  }
  return document.body;
};
var CConditionalPortal = function(_a) {
  var children = _a.children, container = _a.container, portal = _a.portal;
  var _b = (0, import_react.useState)(null), _container = _b[0], setContainer = _b[1];
  (0, import_react.useEffect)(function() {
    portal && setContainer(getContainer(container) || document.body);
  }, [container, portal]);
  return typeof window !== "undefined" && portal && _container ? (0, import_react_dom.createPortal)(children, _container) : import_react.default.createElement(import_react.default.Fragment, null, children);
};
CConditionalPortal.propTypes = {
  children: PropTypes.node,
  container: PropTypes.any,
  portal: PropTypes.bool
};
CConditionalPortal.displayName = "CConditionalPortal";
var getPlacement = function(placement, direction, alignment, isRTL2) {
  var _placement = placement;
  if (direction === "dropup") {
    _placement = isRTL2 ? "top-end" : "top-start";
  }
  if (direction === "dropup-center") {
    _placement = "top";
  }
  if (direction === "dropend") {
    _placement = isRTL2 ? "left-start" : "right-start";
  }
  if (direction === "dropstart") {
    _placement = isRTL2 ? "right-start" : "left-start";
  }
  if (alignment === "end") {
    _placement = isRTL2 ? "bottom-start" : "bottom-end";
  }
  return _placement;
};
var CDropdownContext = (0, import_react.createContext)({});
var CDropdown = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, alignment = _a.alignment, _c = _a.autoClose, autoClose = _c === void 0 ? true : _c, className = _a.className, container = _a.container, dark = _a.dark, direction = _a.direction, _d = _a.offset, offset2 = _d === void 0 ? [0, 2] : _d, onHide = _a.onHide, onShow = _a.onShow, _e = _a.placement, placement = _e === void 0 ? "bottom-start" : _e, _f = _a.popper, popper2 = _f === void 0 ? true : _f, _g = _a.portal, portal = _g === void 0 ? false : _g, _h = _a.variant, variant = _h === void 0 ? "btn-group" : _h, _j = _a.component, component = _j === void 0 ? "div" : _j, _k = _a.visible, visible = _k === void 0 ? false : _k, rest = __rest(_a, ["children", "alignment", "autoClose", "className", "container", "dark", "direction", "offset", "onHide", "onShow", "placement", "popper", "portal", "variant", "component", "visible"]);
  var dropdownRef = (0, import_react.useRef)(null);
  var dropdownToggleRef = (0, import_react.useRef)(null);
  var dropdownMenuRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, dropdownRef);
  var _l = (0, import_react.useState)(visible), _visible = _l[0], setVisible = _l[1];
  var _m = usePopper(), initPopper = _m.initPopper, destroyPopper = _m.destroyPopper;
  var Component = variant === "nav-item" ? "li" : component;
  if (typeof alignment === "object") {
    popper2 = false;
  }
  var contextValues = {
    alignment,
    container,
    dark,
    dropdownToggleRef,
    dropdownMenuRef,
    popper: popper2,
    portal,
    variant,
    visible: _visible,
    setVisible
  };
  var popperConfig = {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: offset2
        }
      }
    ],
    placement: getPlacement(placement, direction, alignment, isRTL(dropdownMenuRef.current))
  };
  (0, import_react.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  (0, import_react.useEffect)(function() {
    if (_visible && dropdownToggleRef.current && dropdownMenuRef.current) {
      popper2 && initPopper(dropdownToggleRef.current, dropdownMenuRef.current, popperConfig);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("keyup", handleKeyup);
      onShow && onShow();
    }
    return function() {
      popper2 && destroyPopper();
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("keyup", handleKeyup);
      onHide && onHide();
    };
  }, [_visible]);
  var handleKeyup = function(event) {
    if (autoClose === false) {
      return;
    }
    if (event.key === "Escape") {
      setVisible(false);
    }
  };
  var handleMouseUp = function(event) {
    if (!dropdownToggleRef.current || !dropdownMenuRef.current) {
      return;
    }
    if (dropdownToggleRef.current.contains(event.target)) {
      return;
    }
    if (autoClose === true || autoClose === "inside" && dropdownMenuRef.current.contains(event.target) || autoClose === "outside" && !dropdownMenuRef.current.contains(event.target)) {
      setTimeout(function() {
        return setVisible(false);
      }, 1);
      return;
    }
  };
  return import_react.default.createElement(CDropdownContext.Provider, { value: contextValues }, variant === "input-group" ? import_react.default.createElement(import_react.default.Fragment, null, children) : import_react.default.createElement(Component, __assign({ className: classNames(variant === "nav-item" ? "nav-item dropdown" : variant, (_b = {
    "dropdown-center": direction === "center",
    "dropup dropup-center": direction === "dropup-center"
  }, _b["".concat(direction)] = direction && direction !== "center" && direction !== "dropup-center", _b.show = _visible, _b), className) }, rest, { ref: forkedRef }), children));
});
var alignmentDirection = PropTypes.oneOf(["start", "end"]);
CDropdown.propTypes = {
  alignment: PropTypes.oneOfType([
    alignmentDirection,
    PropTypes.shape({ xs: alignmentDirection.isRequired }),
    PropTypes.shape({ sm: alignmentDirection.isRequired }),
    PropTypes.shape({ md: alignmentDirection.isRequired }),
    PropTypes.shape({ lg: alignmentDirection.isRequired }),
    PropTypes.shape({ xl: alignmentDirection.isRequired }),
    PropTypes.shape({ xxl: alignmentDirection.isRequired })
  ]),
  autoClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["inside", "outside"])
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  dark: PropTypes.bool,
  direction: PropTypes.oneOf(["center", "dropup", "dropup-center", "dropend", "dropstart"]),
  offset: PropTypes.any,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: placementPropType,
  popper: PropTypes.bool,
  portal: PropTypes.bool,
  variant: PropTypes.oneOf(["btn-group", "dropdown", "input-group", "nav-item"]),
  visible: PropTypes.bool
};
CDropdown.displayName = "CDropdown";
var CDropdownDivider = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, rest = __rest(_a, ["className"]);
  return import_react.default.createElement("hr", __assign({ className: classNames("dropdown-divider", className) }, rest, { ref }));
});
CDropdownDivider.propTypes = {
  className: PropTypes.string
};
CDropdownDivider.displayName = "CDropdownDivider";
var CDropdownHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? "h6" : _b, rest = __rest(_a, ["children", "className", "component"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("dropdown-header", className) }, rest, { ref }), children);
});
CDropdownHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CDropdownHeader.displayName = "CDropdownHeader";
var CDropdownItem = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, component = _b === void 0 ? "a" : _b, rest = __rest(_a, ["children", "className", "component"]);
  return import_react.default.createElement(CLink, __assign({ className: classNames("dropdown-item", className), component }, rest, { ref }), children);
});
CDropdownItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CDropdownItem.displayName = "CDropdownItem";
var CDropdownItemPlain = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? "span" : _b, rest = __rest(_a, ["children", "className", "component"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("dropdown-item-text", className) }, rest, { ref }), children);
});
CDropdownItemPlain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CDropdownItemPlain.displayName = "CDropdownItemPlain";
var alignmentClassNames = function(alignment) {
  var classNames2 = [];
  if (typeof alignment === "object") {
    Object.keys(alignment).map(function(key) {
      classNames2.push("dropdown-menu".concat(key === "xs" ? "" : "-".concat(key), "-").concat(alignment[key]));
    });
  }
  if (typeof alignment === "string") {
    classNames2.push("dropdown-menu-".concat(alignment));
  }
  return classNames2;
};
var CDropdownMenu = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? "ul" : _b, rest = __rest(_a, ["children", "className", "component"]);
  var _c = (0, import_react.useContext)(CDropdownContext), alignment = _c.alignment, container = _c.container, dark = _c.dark, dropdownMenuRef = _c.dropdownMenuRef, popper2 = _c.popper, portal = _c.portal, visible = _c.visible;
  var forkedRef = useForkedRef(ref, dropdownMenuRef);
  return import_react.default.createElement(
    CConditionalPortal,
    { container, portal: portal !== null && portal !== void 0 ? portal : false },
    import_react.default.createElement(Component, __assign({ className: classNames("dropdown-menu", {
      "dropdown-menu-dark": dark,
      show: visible
    }, alignment && alignmentClassNames(alignment), className), ref: forkedRef, role: "menu", "aria-hidden": !visible }, !popper2 && { "data-coreui-popper": "static" }, rest), Component === "ul" ? import_react.default.Children.map(children, function(child, index) {
      if (import_react.default.isValidElement(child)) {
        return import_react.default.createElement("li", { key: index }, import_react.default.cloneElement(child));
      }
      return;
    }) : children)
  );
});
CDropdownMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CDropdownMenu.displayName = "CDropdownMenu";
var CDropdownToggle = function(_a) {
  var children = _a.children, _b = _a.caret, caret = _b === void 0 ? true : _b, custom = _a.custom, className = _a.className, split = _a.split, _c = _a.trigger, trigger = _c === void 0 ? "click" : _c, rest = __rest(_a, ["children", "caret", "custom", "className", "split", "trigger"]);
  var _d = (0, import_react.useContext)(CDropdownContext), dropdownToggleRef = _d.dropdownToggleRef, variant = _d.variant, visible = _d.visible, setVisible = _d.setVisible;
  var triggers = __assign(__assign({}, (trigger === "click" || trigger.includes("click")) && {
    onClick: function(event) {
      event.preventDefault();
      setVisible(!visible);
    }
  }), (trigger === "focus" || trigger.includes("focus")) && {
    onFocus: function() {
      return setVisible(true);
    },
    onBlur: function() {
      return setVisible(false);
    }
  });
  var togglerProps = __assign({ className: classNames({
    "dropdown-toggle": caret,
    "dropdown-toggle-split": split,
    "nav-link": variant === "nav-item"
  }, className), "aria-expanded": visible }, !rest.disabled && __assign({}, triggers));
  var Toggler = function() {
    if (custom && import_react.default.isValidElement(children)) {
      return import_react.default.createElement(import_react.default.Fragment, null, import_react.default.cloneElement(children, __assign(__assign({ "aria-expanded": visible }, !rest.disabled && __assign({}, triggers)), { ref: dropdownToggleRef })));
    }
    if (variant === "nav-item") {
      return import_react.default.createElement("a", __assign({ href: "#" }, togglerProps, { ref: dropdownToggleRef }), children);
    }
    return import_react.default.createElement(
      CButton,
      __assign({ type: "button" }, togglerProps, { tabIndex: 0 }, rest, { ref: dropdownToggleRef }),
      children,
      split && import_react.default.createElement("span", { className: "visually-hidden" }, "Toggle Dropdown")
    );
  };
  return import_react.default.createElement(Toggler, null);
};
CDropdownToggle.propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  custom: PropTypes.bool,
  split: PropTypes.bool,
  trigger: triggerPropType
};
CDropdownToggle.displayName = "CDropdownToggle";
var CFooter = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, position = _a.position, rest = __rest(_a, ["children", "className", "position"]);
  return import_react.default.createElement("div", __assign({ className: classNames("footer", (_b = {}, _b["footer-".concat(position)] = position, _b), className) }, rest, { ref }), children);
});
CFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(["fixed", "sticky"])
};
CFooter.displayName = "CFooter";
var CForm = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, validated = _a.validated, rest = __rest(_a, ["children", "className", "validated"]);
  return import_react.default.createElement("form", __assign({ className: classNames({ "was-validated": validated }, className) || void 0 }, rest, { ref }), children);
});
CForm.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  validated: PropTypes.bool
};
CForm.displayName = "CForm";
var CFormFeedback = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, _c = _a.component, Component = _c === void 0 ? "div" : _c, invalid = _a.invalid, tooltip = _a.tooltip, valid = _a.valid, rest = __rest(_a, ["children", "className", "component", "invalid", "tooltip", "valid"]);
  return import_react.default.createElement(Component, __assign({ className: classNames((_b = {}, _b["invalid-".concat(tooltip ? "tooltip" : "feedback")] = invalid, _b["valid-".concat(tooltip ? "tooltip" : "feedback")] = valid, _b), className) }, rest, { ref }), children);
});
CFormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  invalid: PropTypes.bool,
  tooltip: PropTypes.bool,
  valid: PropTypes.bool
};
CFormFeedback.displayName = "CFormFeedback";
var CFormControlValidation = function(_a) {
  var describedby = _a.describedby, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, invalid = _a.invalid, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid;
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    feedback && (valid || invalid) && import_react.default.createElement(CFormFeedback, __assign({}, invalid && { id: describedby }, { invalid, tooltip: tooltipFeedback, valid }), feedback),
    feedbackInvalid && import_react.default.createElement(CFormFeedback, { id: describedby, invalid: true, tooltip: tooltipFeedback }, feedbackInvalid),
    feedbackValid && import_react.default.createElement(CFormFeedback, { valid: true, tooltip: tooltipFeedback }, feedbackValid)
  );
};
CFormControlValidation.propTypes = {
  describedby: PropTypes.string,
  feedback: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackValid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackInvalid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  invalid: PropTypes.bool,
  tooltipFeedback: PropTypes.bool,
  valid: PropTypes.bool
};
CFormControlValidation.displayName = "CFormControlValidation";
var CFormLabel = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, customClassName = _a.customClassName, rest = __rest(_a, ["children", "className", "customClassName"]);
  return import_react.default.createElement("label", __assign({ className: customClassName !== null && customClassName !== void 0 ? customClassName : classNames("form-label", className) }, rest, { ref }), children);
});
CFormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customClassName: PropTypes.string
};
CFormLabel.displayName = "CFormLabel";
var CFormCheck = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, button = _a.button, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingLabel = _a.floatingLabel, tooltipFeedback = _a.tooltipFeedback, hitArea = _a.hitArea, id = _a.id, indeterminate = _a.indeterminate, inline = _a.inline, invalid = _a.invalid, label = _a.label, reverse = _a.reverse, _b = _a.type, type = _b === void 0 ? "checkbox" : _b, valid = _a.valid, rest = __rest(_a, ["className", "button", "feedback", "feedbackInvalid", "feedbackValid", "floatingLabel", "tooltipFeedback", "hitArea", "id", "indeterminate", "inline", "invalid", "label", "reverse", "type", "valid"]);
  var inputRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, inputRef);
  (0, import_react.useEffect)(function() {
    if (inputRef.current && indeterminate) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, inputRef.current]);
  var FormControl = function() {
    return import_react.default.createElement("input", __assign({ type, className: classNames(button ? "btn-check" : "form-check-input", {
      "is-invalid": invalid,
      "is-valid": valid,
      "me-2": hitArea
    }), id }, rest, { ref: forkedRef }));
  };
  var FormValidation = function() {
    return import_react.default.createElement(CFormControlValidation, { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingLabel, invalid, tooltipFeedback, valid });
  };
  var FormLabel = function() {
    var _a2;
    return import_react.default.createElement(CFormLabel, __assign({ customClassName: classNames(button ? classNames("btn", button.variant ? "btn-".concat(button.variant, "-").concat(button.color) : "btn-".concat(button.color), (_a2 = {}, _a2["btn-".concat(button.size)] = button.size, _a2), "".concat(button.shape)) : "form-check-label") }, id && { htmlFor: id }), label);
  };
  var FormCheck = function() {
    if (button) {
      return import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement(FormControl, null),
        label && import_react.default.createElement(FormLabel, null),
        import_react.default.createElement(FormValidation, null)
      );
    }
    if (label) {
      return hitArea ? import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement(FormControl, null),
        import_react.default.createElement(CFormLabel, __assign({ customClassName: classNames("form-check-label stretched-link", className) }, id && { htmlFor: id }), label),
        import_react.default.createElement(FormValidation, null)
      ) : import_react.default.createElement(
        "div",
        { className: classNames("form-check", {
          "form-check-inline": inline,
          "form-check-reverse": reverse,
          "is-invalid": invalid,
          "is-valid": valid
        }, className) },
        import_react.default.createElement(FormControl, null),
        import_react.default.createElement(FormLabel, null),
        import_react.default.createElement(FormValidation, null)
      );
    }
    return import_react.default.createElement(FormControl, null);
  };
  return import_react.default.createElement(FormCheck, null);
});
CFormCheck.propTypes = __assign({ button: PropTypes.object, className: PropTypes.string, hitArea: PropTypes.oneOf(["full"]), id: PropTypes.string, indeterminate: PropTypes.bool, inline: PropTypes.bool, label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), reverse: PropTypes.bool, type: PropTypes.oneOf(["checkbox", "radio"]) }, CFormControlValidation.propTypes);
CFormCheck.displayName = "CFormCheck";
var CFormFloating = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("form-floating", className) }, rest, { ref }), children);
});
CFormFloating.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CFormFloating.displayName = "CFormFloating";
var CFormText = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? "div" : _b, rest = __rest(_a, ["children", "className", "component"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("form-text", className) }, rest, { ref }), children);
});
CFormText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CFormText.displayName = "CFormText";
var CFormControlWrapper = function(_a) {
  var children = _a.children, describedby = _a.describedby, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, id = _a.id, invalid = _a.invalid, label = _a.label, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid;
  var FormControlValidation = function() {
    return import_react.default.createElement(CFormControlValidation, { describedby, feedback, feedbackInvalid, feedbackValid, floatingLabel, invalid, tooltipFeedback, valid });
  };
  return floatingLabel ? import_react.default.createElement(
    CFormFloating,
    { className: floatingClassName },
    children,
    import_react.default.createElement(CFormLabel, { htmlFor: id }, label || floatingLabel),
    text && import_react.default.createElement(CFormText, { id: describedby }, text),
    import_react.default.createElement(FormControlValidation, null)
  ) : import_react.default.createElement(
    import_react.default.Fragment,
    null,
    label && import_react.default.createElement(CFormLabel, { htmlFor: id }, label),
    children,
    text && import_react.default.createElement(CFormText, { id: describedby }, text),
    import_react.default.createElement(FormControlValidation, null)
  );
};
CFormControlWrapper.propTypes = __assign({ children: PropTypes.node, floatingClassName: PropTypes.string, floatingLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]), label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]), text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]) }, CFormControlValidation.propTypes);
CFormControlWrapper.displayName = "CFormControlWrapper";
var CFormInput = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, _c = _a.delay, delay = _c === void 0 ? false : _c, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, id = _a.id, invalid = _a.invalid, label = _a.label, onChange = _a.onChange, plainText = _a.plainText, size = _a.size, text = _a.text, tooltipFeedback = _a.tooltipFeedback, _d = _a.type, type = _d === void 0 ? "text" : _d, valid = _a.valid, rest = __rest(_a, ["children", "className", "delay", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "id", "invalid", "label", "onChange", "plainText", "size", "text", "tooltipFeedback", "type", "valid"]);
  var _e = (0, import_react.useState)(), value = _e[0], setValue = _e[1];
  (0, import_react.useEffect)(function() {
    var timeOutId = setTimeout(function() {
      return value && onChange && onChange(value);
    }, typeof delay === "number" ? delay : 500);
    return function() {
      return clearTimeout(timeOutId);
    };
  }, [value]);
  return import_react.default.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    import_react.default.createElement("input", __assign({ className: classNames(plainText ? "form-control-plaintext" : "form-control", (_b = {}, _b["form-control-".concat(size)] = size, _b["form-control-color"] = type === "color", _b["is-invalid"] = invalid, _b["is-valid"] = valid, _b), className), id, type, onChange: function(event) {
      return delay ? setValue(event) : onChange && onChange(event);
    } }, rest, { ref }), children)
  );
});
CFormInput.propTypes = __assign({ className: PropTypes.string, id: PropTypes.string, delay: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]), plainText: PropTypes.bool, size: PropTypes.oneOf(["sm", "lg"]), type: PropTypes.oneOfType([PropTypes.oneOf(["color", "file", "text"]), PropTypes.string]) }, CFormControlWrapper.propTypes);
CFormInput.displayName = "CFormInput";
var CFormRange = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, label = _a.label, rest = __rest(_a, ["className", "label"]);
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    label && import_react.default.createElement(CFormLabel, { htmlFor: rest.id }, label),
    import_react.default.createElement("input", __assign({ type: "range", className: classNames("form-range", className) }, rest, { ref }))
  );
});
CFormRange.propTypes = {
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};
CFormRange.displayName = "CFormRange";
var CFormSelect = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, htmlSize = _a.htmlSize, id = _a.id, invalid = _a.invalid, label = _a.label, options = _a.options, size = _a.size, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid, rest = __rest(_a, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "htmlSize", "id", "invalid", "label", "options", "size", "text", "tooltipFeedback", "valid"]);
  return import_react.default.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    import_react.default.createElement("select", __assign({ id, className: classNames("form-select", (_b = {}, _b["form-select-".concat(size)] = size, _b["is-invalid"] = invalid, _b["is-valid"] = valid, _b), className), size: htmlSize }, rest, { ref }), options ? options.map(function(option, index) {
      return import_react.default.createElement("option", __assign({}, typeof option === "object" && option.disabled && { disabled: option.disabled }, typeof option === "object" && option.value !== void 0 && { value: option.value }, { key: index }), typeof option === "string" ? option : option.label);
    }) : children)
  );
});
CFormSelect.propTypes = __assign({ className: PropTypes.string, htmlSize: PropTypes.number, options: PropTypes.array }, CFormControlWrapper.propTypes);
CFormSelect.displayName = "CFormSelect";
var CFormSwitch = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var className = _a.className, id = _a.id, invalid = _a.invalid, label = _a.label, reverse = _a.reverse, size = _a.size, _c = _a.type, type = _c === void 0 ? "checkbox" : _c, valid = _a.valid, rest = __rest(_a, ["className", "id", "invalid", "label", "reverse", "size", "type", "valid"]);
  return import_react.default.createElement(
    "div",
    { className: classNames("form-check form-switch", (_b = {
      "form-check-reverse": reverse
    }, _b["form-switch-".concat(size)] = size, _b["is-invalid"] = invalid, _b["is-valid"] = valid, _b), className) },
    import_react.default.createElement("input", __assign({ type, className: classNames("form-check-input", {
      "is-invalid": invalid,
      "is-valid": valid
    }), id }, rest, { ref })),
    label && import_react.default.createElement(CFormLabel, __assign({ customClassName: "form-check-label" }, id && { htmlFor: id }), label)
  );
});
CFormSwitch.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  invalid: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  reverse: PropTypes.bool,
  size: PropTypes.oneOf(["lg", "xl"]),
  type: PropTypes.oneOf(["checkbox", "radio"]),
  valid: PropTypes.bool
};
CFormSwitch.displayName = "CFormSwitch";
var CFormTextarea = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, feedback = _a.feedback, feedbackInvalid = _a.feedbackInvalid, feedbackValid = _a.feedbackValid, floatingClassName = _a.floatingClassName, floatingLabel = _a.floatingLabel, id = _a.id, invalid = _a.invalid, label = _a.label, plainText = _a.plainText, text = _a.text, tooltipFeedback = _a.tooltipFeedback, valid = _a.valid, rest = __rest(_a, ["children", "className", "feedback", "feedbackInvalid", "feedbackValid", "floatingClassName", "floatingLabel", "id", "invalid", "label", "plainText", "text", "tooltipFeedback", "valid"]);
  return import_react.default.createElement(
    CFormControlWrapper,
    { describedby: rest["aria-describedby"], feedback, feedbackInvalid, feedbackValid, floatingClassName, floatingLabel, id, invalid, label, text, tooltipFeedback, valid },
    import_react.default.createElement("textarea", __assign({ className: classNames(plainText ? "form-control-plaintext" : "form-control", {
      "is-invalid": invalid,
      "is-valid": valid
    }, className), id }, rest, { ref }), children)
  );
});
CFormTextarea.propTypes = __assign({ className: PropTypes.string, id: PropTypes.string, plainText: PropTypes.bool }, CFormControlWrapper.propTypes);
CFormTextarea.displayName = "CFormTextarea";
var CInputGroup = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, size = _a.size, rest = __rest(_a, ["children", "className", "size"]);
  return import_react.default.createElement("div", __assign({ className: classNames("input-group", (_b = {}, _b["input-group-".concat(size)] = size, _b), className) }, rest, { ref }), children);
});
CInputGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"])
};
CInputGroup.displayName = "CInputGroup";
var CInputGroupText = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? "span" : _b, rest = __rest(_a, ["children", "className", "component"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("input-group-text", className) }, rest, { ref }), children);
});
CInputGroupText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CInputGroupText.displayName = "CInputGroupText";
var BREAKPOINTS$3 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CCol = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS$3.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "number" || typeof breakpoint === "string") {
      repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
    }
    if (typeof breakpoint === "boolean") {
      repsonsiveClassNames.push("col".concat(infix));
    }
    if (breakpoint && typeof breakpoint === "object") {
      if (typeof breakpoint.span === "number" || typeof breakpoint.span === "string") {
        repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint.span));
      }
      if (typeof breakpoint.span === "boolean") {
        repsonsiveClassNames.push("col".concat(infix));
      }
      if (typeof breakpoint.order === "number" || typeof breakpoint.order === "string") {
        repsonsiveClassNames.push("order".concat(infix, "-").concat(breakpoint.order));
      }
      if (typeof breakpoint.offset === "number") {
        repsonsiveClassNames.push("offset".concat(infix, "-").concat(breakpoint.offset));
      }
    }
  });
  return import_react.default.createElement("div", __assign({ className: classNames(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "col", className) }, rest, { ref }), children);
});
var span = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
  PropTypes.oneOf(["auto"])
]);
var col = PropTypes.oneOfType([
  span,
  PropTypes.shape({
    span,
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    order: PropTypes.oneOfType([
      PropTypes.oneOf(["first", "last"]),
      PropTypes.number,
      PropTypes.string
    ])
  })
]);
CCol.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: col,
  sm: col,
  md: col,
  lg: col,
  xl: col,
  xxl: col
};
CCol.displayName = "CCol";
var BREAKPOINTS$2 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "fluid"
];
var CContainer = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS$2.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    breakpoint && repsonsiveClassNames.push("container-".concat(bp2));
  });
  return import_react.default.createElement("div", __assign({ className: classNames(repsonsiveClassNames.length > 0 ? repsonsiveClassNames : "container", className) }, rest, { ref }), children);
});
CContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  xxl: PropTypes.bool,
  fluid: PropTypes.bool
};
CContainer.displayName = "CContainer";
var BREAKPOINTS$1 = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CRow = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS$1.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "object") {
      if (breakpoint.cols) {
        repsonsiveClassNames.push("row-cols".concat(infix, "-").concat(breakpoint.cols));
      }
      if (typeof breakpoint.gutter === "number") {
        repsonsiveClassNames.push("g".concat(infix, "-").concat(breakpoint.gutter));
      }
      if (typeof breakpoint.gutterX === "number") {
        repsonsiveClassNames.push("gx".concat(infix, "-").concat(breakpoint.gutterX));
      }
      if (typeof breakpoint.gutterY === "number") {
        repsonsiveClassNames.push("gy".concat(infix, "-").concat(breakpoint.gutterY));
      }
    }
  });
  return import_react.default.createElement("div", { className: classNames("row", repsonsiveClassNames, className), ref }, children);
});
var bp = PropTypes.shape({
  cols: PropTypes.oneOfType([PropTypes.oneOf(["auto"]), PropTypes.number, PropTypes.string]),
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutterX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gutterY: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});
CRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: bp,
  sm: bp,
  md: bp,
  lg: bp,
  xl: bp,
  xxl: bp
};
CRow.displayName = "CRow";
var CHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, container = _a.container, position = _a.position, rest = __rest(_a, ["children", "className", "container", "position"]);
  return import_react.default.createElement("div", __assign({ className: classNames("header", (_b = {}, _b["header-".concat(position)] = position, _b), className) }, rest, { ref }), container ? import_react.default.createElement("div", { className: typeof container === "string" ? "container-".concat(container) : "container" }, children) : import_react.default.createElement(import_react.default.Fragment, null, children));
});
CHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
      "fluid"
    ])
  ]),
  position: PropTypes.oneOf(["fixed", "sticky"])
};
CHeader.displayName = "CHeader";
var CHeaderBrand = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "a" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("header-brand", className) }, rest, { ref }), children);
});
CHeaderBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CHeaderBrand.displayName = "CHeaderBrand";
var CHeaderDivider = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, rest = __rest(_a, ["className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("header-divider", className) }, rest, { ref }));
});
CHeaderDivider.propTypes = {
  className: PropTypes.string
};
CHeaderDivider.displayName = "CHeaderDivider";
var CHeaderNav = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("header-nav", className), role: "navigation" }, rest, { ref }), children);
});
CHeaderNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CHeaderNav.displayName = "CHeaderNav";
var CHeaderText = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("span", __assign({ className: classNames("header-text", className) }, rest, { ref }), children);
});
CHeaderText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CHeaderText.displayName = "CHeaderText";
var CHeaderToggler = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("button", __assign({ type: "button", className: classNames("header-toggler", className) }, rest, { ref }), children !== null && children !== void 0 ? children : import_react.default.createElement("span", { className: "header-toggler-icon" }));
});
CHeaderToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CHeaderToggler.displayName = "CHeaderToggler";
var CImage = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var align = _a.align, className = _a.className, fluid = _a.fluid, rounded = _a.rounded, thumbnail = _a.thumbnail, rest = __rest(_a, ["align", "className", "fluid", "rounded", "thumbnail"]);
  return import_react.default.createElement("img", __assign({ className: classNames((_b = {}, _b["float-".concat(align)] = align && (align === "start" || align === "end"), _b["d-block mx-auto"] = align && align === "center", _b["img-fluid"] = fluid, _b.rounded = rounded, _b["img-thumbnail"] = thumbnail, _b), className) || void 0 }, rest, { ref }));
});
CImage.propTypes = {
  align: PropTypes.oneOf(["start", "center", "end"]),
  className: PropTypes.string,
  fluid: PropTypes.bool,
  rounded: PropTypes.bool,
  thumbnail: PropTypes.bool
};
CImage.displayName = "CImage";
var CListGroup = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, _c = _a.component, Component = _c === void 0 ? "ul" : _c, flush = _a.flush, layout = _a.layout;
  return import_react.default.createElement(Component, { className: classNames("list-group", (_b = {
    "list-group-flush": flush
  }, _b["list-group-".concat(layout)] = layout, _b), className), ref }, children);
});
CListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  flush: PropTypes.bool,
  layout: PropTypes.oneOf([
    "horizontal",
    "horizontal-sm",
    "horizontal-md",
    "horizontal-lg",
    "horizontal-xl",
    "horizontal-xxl"
  ])
};
CListGroup.displayName = "CListGroup";
var CListGroupItem = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, className = _a.className, disabled = _a.disabled, color = _a.color, _c = _a.component, component = _c === void 0 ? "li" : _c, rest = __rest(_a, ["children", "active", "className", "disabled", "color", "component"]);
  var Component = component === "a" || component === "button" ? CLink : component;
  rest = __assign(__assign(__assign(__assign({}, (component === "a" || component === "button") && {
    active,
    disabled,
    component,
    ref
  }), active && { "aria-current": true }), disabled && { "aria-disabled": true }), rest);
  return import_react.default.createElement(Component, __assign({ className: classNames("list-group-item", (_b = {}, _b["list-group-item-".concat(color)] = color, _b["list-group-item-action"] = component === "a" || component === "button", _b.active = active, _b.disabled = disabled, _b), className) }, rest), children);
});
CListGroupItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.elementType,
  disabled: PropTypes.bool
};
CListGroupItem.displayName = "CListGroupItem";
var CModalContent = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("modal-content", className) }, rest, { ref }), children);
});
CModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CModalContent.displayName = "CModalContent";
var CModalDialog = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, alignment = _a.alignment, className = _a.className, fullscreen = _a.fullscreen, scrollable = _a.scrollable, size = _a.size, rest = __rest(_a, ["children", "alignment", "className", "fullscreen", "scrollable", "size"]);
  return import_react.default.createElement("div", __assign({ className: classNames("modal-dialog", (_b = {
    "modal-dialog-centered": alignment === "center"
  }, _b[typeof fullscreen === "boolean" ? "modal-fullscreen" : "modal-fullscreen-".concat(fullscreen, "-down")] = fullscreen, _b["modal-dialog-scrollable"] = scrollable, _b["modal-".concat(size)] = size, _b), className) }, rest, { ref }), children);
});
CModalDialog.propTypes = {
  alignment: PropTypes.oneOf(["top", "center"]),
  children: PropTypes.node,
  className: PropTypes.string,
  fullscreen: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  scrollable: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg", "xl"])
};
CModalDialog.displayName = "CModalDialog";
var CModalContext = (0, import_react.createContext)({});
var CModal = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, alignment = _a.alignment, _b = _a.backdrop, backdrop = _b === void 0 ? true : _b, className = _a.className, _c = _a.duration, duration = _c === void 0 ? 150 : _c, _d = _a.focus, focus = _d === void 0 ? true : _d, fullscreen = _a.fullscreen, _e = _a.keyboard, keyboard = _e === void 0 ? true : _e, onClose = _a.onClose, onClosePrevented = _a.onClosePrevented, onShow = _a.onShow, _f = _a.portal, portal = _f === void 0 ? true : _f, scrollable = _a.scrollable, size = _a.size, _g = _a.transition, transition = _g === void 0 ? true : _g, _h = _a.unmountOnClose, unmountOnClose = _h === void 0 ? true : _h, visible = _a.visible, rest = __rest(_a, ["children", "alignment", "backdrop", "className", "duration", "focus", "fullscreen", "keyboard", "onClose", "onClosePrevented", "onShow", "portal", "scrollable", "size", "transition", "unmountOnClose", "visible"]);
  var activeElementRef = (0, import_react.useRef)(null);
  var modalRef = (0, import_react.useRef)(null);
  var modalContentRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, modalRef);
  var _j = (0, import_react.useState)(visible), _visible = _j[0], setVisible = _j[1];
  var _k = (0, import_react.useState)(false), staticBackdrop = _k[0], setStaticBackdrop = _k[1];
  var contextValues = {
    visible: _visible,
    setVisible
  };
  (0, import_react.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  (0, import_react.useEffect)(function() {
    var _a2;
    if (_visible) {
      activeElementRef.current = document.activeElement;
      document.addEventListener("mouseup", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      (_a2 = activeElementRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }
    return function() {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [_visible]);
  var handleDismiss = function() {
    if (backdrop === "static") {
      return setStaticBackdrop(true);
    }
    setVisible(false);
    return onClose && onClose();
  };
  (0, import_react.useLayoutEffect)(function() {
    onClosePrevented && onClosePrevented();
    setTimeout(function() {
      return setStaticBackdrop(false);
    }, duration);
  }, [staticBackdrop]);
  (0, import_react.useLayoutEffect)(function() {
    if (_visible) {
      document.body.classList.add("modal-open");
      if (backdrop) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "0px";
      }
      setTimeout(function() {
        var _a2;
        focus && ((_a2 = modalRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus());
      }, transition ? duration : 0);
    } else {
      document.body.classList.remove("modal-open");
      if (backdrop) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
      }
    }
    return function() {
      document.body.classList.remove("modal-open");
      if (backdrop) {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("padding-right");
      }
    };
  }, [_visible]);
  var handleClickOutside = function(event) {
    if (modalRef.current && modalRef.current == event.target) {
      handleDismiss();
    }
  };
  var handleKeyDown = function(event) {
    if (event.key === "Escape" && keyboard) {
      handleDismiss();
    }
  };
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: modalRef, onEnter: onShow, onExit: onClose, unmountOnExit: unmountOnClose, timeout: transition ? duration : 0 }, function(state) {
      return import_react.default.createElement(
        CConditionalPortal,
        { portal },
        import_react.default.createElement(
          CModalContext.Provider,
          { value: contextValues },
          import_react.default.createElement(
            "div",
            __assign({ className: classNames("modal", {
              "modal-static": staticBackdrop,
              fade: transition,
              show: state === "entered"
            }, className), tabIndex: -1 }, _visible ? { "aria-modal": true, role: "dialog" } : { "aria-hidden": "true" }, { style: __assign({}, state !== "exited" && { display: "block" }) }, rest, { ref: forkedRef }),
            import_react.default.createElement(
              CModalDialog,
              { alignment, fullscreen, scrollable, size },
              import_react.default.createElement(CModalContent, { ref: modalContentRef }, children)
            )
          )
        )
      );
    }),
    backdrop && import_react.default.createElement(
      CConditionalPortal,
      { portal },
      import_react.default.createElement(CBackdrop, { visible: _visible })
    )
  );
});
CModal.propTypes = {
  alignment: PropTypes.oneOf(["top", "center"]),
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
  children: PropTypes.node,
  className: PropTypes.string,
  duration: PropTypes.number,
  focus: PropTypes.bool,
  fullscreen: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  keyboard: PropTypes.bool,
  onClose: PropTypes.func,
  onClosePrevented: PropTypes.func,
  onShow: PropTypes.func,
  portal: PropTypes.bool,
  scrollable: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  transition: PropTypes.bool,
  unmountOnClose: PropTypes.bool,
  visible: PropTypes.bool
};
CModal.displayName = "CModal";
var CModalBody = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("modal-body", className) }, rest, { ref }), children);
});
CModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CModalBody.displayName = "CModalBody";
var CModalFooter = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("modal-footer", className) }, rest, { ref }), children);
});
CModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CModalFooter.displayName = "CModalFooter";
var CModalHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, _b = _a.closeButton, closeButton = _b === void 0 ? true : _b, rest = __rest(_a, ["children", "className", "closeButton"]);
  var setVisible = (0, import_react.useContext)(CModalContext).setVisible;
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("modal-header", className) }, rest, { ref }),
    children,
    closeButton && import_react.default.createElement(CCloseButton, { onClick: function() {
      return setVisible(false);
    } })
  );
});
CModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool
};
CModalHeader.displayName = "CModalHeader";
var CModalTitle = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "h5" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("modal-title", className) }, rest, { ref }), children);
});
CModalTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CModalTitle.displayName = "CModalTitle";
var CNav = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, _c = _a.component, Component = _c === void 0 ? "ul" : _c, layout = _a.layout, variant = _a.variant, rest = __rest(_a, ["children", "className", "component", "layout", "variant"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("nav", (_b = {}, _b["nav-".concat(layout)] = layout, _b["nav-".concat(variant)] = variant, _b), className), role: "navigation" }, rest, { ref }), children);
});
CNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  layout: PropTypes.oneOf(["fill", "justified"]),
  variant: PropTypes.oneOf(["tabs", "pills"])
};
CNav.displayName = "CNav";
var CNavGroupItems = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("ul", __assign({ className: classNames("nav-group-items", className) }, rest, { ref }), children);
});
CNavGroupItems.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CNavGroupItems.displayName = "CNavGroupItems";
var CNavContext = (0, import_react.createContext)({});
var CSidebarNav = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  var _b = (0, import_react.useState)(""), visibleGroup = _b[0], setVisibleGroup = _b[1];
  var CNavContextValues = {
    visibleGroup,
    setVisibleGroup
  };
  return import_react.default.createElement(
    "ul",
    __assign({ className: classNames("sidebar-nav", className), ref }, rest),
    import_react.default.createElement(CNavContext.Provider, { value: CNavContextValues }, import_react.default.Children.map(children, function(child, index) {
      if (import_react.default.isValidElement(child)) {
        return import_react.default.cloneElement(child, {
          key: index,
          idx: "".concat(index)
        });
      }
      return;
    }))
  );
});
CSidebarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarNav.displayName = "CSidebarNav";
var isInVisibleGroup = function(el1, el2) {
  var array1 = el1.toString().split(".");
  var array2 = el2.toString().split(".");
  return array2.every(function(item, index) {
    return item === array1[index];
  });
};
var CNavGroup = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, compact = _a.compact, idx = _a.idx, toggler = _a.toggler, visible = _a.visible, rest = __rest(_a, ["children", "className", "compact", "idx", "toggler", "visible"]);
  var _b = (0, import_react.useState)(), height = _b[0], setHeight = _b[1];
  var navItemsRef = (0, import_react.useRef)(null);
  var _c = (0, import_react.useContext)(CNavContext), visibleGroup = _c.visibleGroup, setVisibleGroup = _c.setVisibleGroup;
  var _d = (0, import_react.useState)(Boolean(visible || idx && visibleGroup && isInVisibleGroup(visibleGroup, idx))), _visible = _d[0], setVisible = _d[1];
  (0, import_react.useEffect)(function() {
    setVisible(Boolean(idx && visibleGroup && isInVisibleGroup(visibleGroup, idx)));
  }, [visibleGroup]);
  var handleTogglerOnCLick = function(event) {
    event.preventDefault();
    setVisibleGroup(_visible ? (idx === null || idx === void 0 ? void 0 : idx.toString().includes(".")) ? idx.slice(0, idx.lastIndexOf(".")) : "" : idx);
    setVisible(!_visible);
  };
  var style = {
    height: 0
  };
  var onEntering = function() {
    navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
  };
  var onEntered = function() {
    setHeight("auto");
  };
  var onExit = function() {
    navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
  };
  var onExiting = function() {
    var _a2;
    (_a2 = navItemsRef.current) === null || _a2 === void 0 ? void 0 : _a2.offsetHeight;
    setHeight(0);
  };
  var onExited = function() {
    setHeight(0);
  };
  var transitionStyles = {
    entering: { display: "block", height },
    entered: { display: "block", height },
    exiting: { display: "block", height },
    exited: { height }
  };
  return import_react.default.createElement(
    "li",
    __assign({ className: classNames("nav-group", { show: _visible }, className) }, rest, { ref }),
    toggler && import_react.default.createElement("a", { className: "nav-link nav-group-toggle", onClick: function(event) {
      return handleTogglerOnCLick(event);
    } }, toggler),
    import_react.default.createElement(Transition$1, { in: _visible, nodeRef: navItemsRef, onEntering, onEntered, onExit, onExiting, onExited, timeout: 300 }, function(state) {
      return import_react.default.createElement("ul", { className: classNames("nav-group-items", {
        compact
      }), style: __assign(__assign({}, style), transitionStyles[state]), ref: navItemsRef }, import_react.default.Children.map(children, function(child, index) {
        if (import_react.default.isValidElement(child)) {
          return import_react.default.cloneElement(child, {
            key: index,
            idx: "".concat(idx, ".").concat(index)
          });
        }
        return;
      }));
    })
  );
});
CNavGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  compact: PropTypes.bool,
  idx: PropTypes.string,
  toggler: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  visible: PropTypes.bool
};
CNavGroup.displayName = "CNavGroup";
var CNavLink = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, idx = _a.idx, rest = __rest(_a, ["children", "className", "idx"]);
  var navLinkRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, navLinkRef);
  var setVisibleGroup = (0, import_react.useContext)(CNavContext).setVisibleGroup;
  (0, import_react.useEffect)(function() {
    var _a2;
    rest.active = (_a2 = navLinkRef.current) === null || _a2 === void 0 ? void 0 : _a2.classList.contains("active");
    idx && rest.active && setVisibleGroup(idx);
  }, [rest.active, className]);
  return import_react.default.createElement(CLink, __assign({ className: classNames("nav-link", className) }, rest, { ref: forkedRef }), children);
});
CNavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  idx: PropTypes.string
};
CNavLink.displayName = "CNavLink";
var CNavItem = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("li", { className: classNames("nav-item", className), ref }, rest.href || rest.to ? import_react.default.createElement(CNavLink, __assign({ className }, rest), children) : children);
});
CNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CNavItem.displayName = "CNavItem";
var CNavTitle = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("li", __assign({ className: classNames("nav-title", className) }, rest, { ref }), children);
});
CNavTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CNavTitle.displayName = "CNavTitle";
var CNavbar = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, colorScheme = _a.colorScheme, _c = _a.component, Component = _c === void 0 ? "nav" : _c, container = _a.container, expand = _a.expand, placement = _a.placement, rest = __rest(_a, ["children", "className", "color", "colorScheme", "component", "container", "expand", "placement"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("navbar", (_b = {}, _b["bg-".concat(color)] = color, _b["navbar-".concat(colorScheme)] = colorScheme, _b[typeof expand === "boolean" ? "navbar-expand" : "navbar-expand-".concat(expand)] = expand, _b), placement, className) }, rest, { ref }), container ? import_react.default.createElement("div", { className: typeof container === "string" ? "container-".concat(container) : "container" }, children) : import_react.default.createElement(import_react.default.Fragment, null, children));
});
CNavbar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  colorScheme: PropTypes.oneOf(["dark", "light"]),
  component: PropTypes.elementType,
  container: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
      "fluid"
    ])
  ]),
  expand: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  placement: PropTypes.oneOf(["fixed-top", "fixed-bottom", "sticky-top"])
};
CNavbar.displayName = "CNavbar";
var CNavbarBrand = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, component = _a.component, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  var Component = component !== null && component !== void 0 ? component : rest.href ? "a" : "span";
  return import_react.default.createElement(Component, __assign({ className: classNames("navbar-brand", className) }, rest, { ref }), children);
});
CNavbarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CNavbarBrand.displayName = "CNavbarBrand";
var CNavbarNav = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "ul" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("navbar-nav", className), role: "navigation" }, rest, { ref }), children);
});
CNavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CNavbarNav.displayName = "CNavbarNav";
var CNavbarText = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("span", __assign({ className: classNames("navbar-text", className) }, rest, { ref }), children);
});
CNavbarText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CNavbarText.displayName = "CNavbarText";
var CNavbarToggler = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("button", __assign({ type: "button", className: classNames("navbar-toggler", className) }, rest, { ref }), children !== null && children !== void 0 ? children : import_react.default.createElement("span", { className: "navbar-toggler-icon" }));
});
CNavbarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CNavbarToggler.displayName = "CNavbarToggler";
var COffcanvas = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.backdrop, backdrop = _b === void 0 ? true : _b, className = _a.className, _c = _a.keyboard, keyboard = _c === void 0 ? true : _c, onHide = _a.onHide, onShow = _a.onShow, placement = _a.placement, _d = _a.portal, portal = _d === void 0 ? false : _d, _e = _a.responsive, responsive = _e === void 0 ? true : _e, _f = _a.scroll, scroll = _f === void 0 ? false : _f, _g = _a.visible, visible = _g === void 0 ? false : _g, rest = __rest(_a, ["children", "backdrop", "className", "keyboard", "onHide", "onShow", "placement", "portal", "responsive", "scroll", "visible"]);
  var _h = (0, import_react.useState)(visible), _visible = _h[0], setVisible = _h[1];
  var offcanvasRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, offcanvasRef);
  (0, import_react.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  (0, import_react.useEffect)(function() {
    if (_visible && !scroll) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
      return;
    }
    if (!scroll) {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
    }
  }, [_visible]);
  var handleDismiss = function() {
    setVisible(false);
  };
  var handleBackdropDismiss = function() {
    if (backdrop !== "static") {
      setVisible(false);
    }
  };
  var handleKeyDown = function(event) {
    if (event.key === "Escape" && keyboard) {
      return handleDismiss();
    }
  };
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement(Transition$1, { in: _visible, nodeRef: offcanvasRef, onEnter: onShow, onEntered: function() {
      var _a2;
      return (_a2 = offcanvasRef.current) === null || _a2 === void 0 ? void 0 : _a2.focus();
    }, onExit: onHide, timeout: 300 }, function(state) {
      var _a2;
      return import_react.default.createElement(
        CConditionalPortal,
        { portal },
        import_react.default.createElement("div", __assign({ className: classNames((_a2 = {}, _a2["offcanvas".concat(typeof responsive === "string" ? "-" + responsive : "")] = responsive, _a2["offcanvas-".concat(placement)] = placement, _a2.showing = state === "entering", _a2.show = state === "entered", _a2["show hiding"] = state === "exiting", _a2), className), role: "dialog", tabIndex: -1, onKeyDown: handleKeyDown }, rest, { ref: forkedRef }), children)
      );
    }),
    backdrop && import_react.default.createElement(
      CConditionalPortal,
      { portal },
      import_react.default.createElement(CBackdrop, { className: "offcanvas-backdrop", onClick: handleBackdropDismiss, visible: _visible })
    )
  );
});
COffcanvas.propTypes = {
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
  children: PropTypes.node,
  className: PropTypes.string,
  keyboard: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: PropTypes.oneOf(["start", "end", "top", "bottom"]).isRequired,
  portal: PropTypes.bool,
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  scroll: PropTypes.bool,
  visible: PropTypes.bool
};
COffcanvas.displayName = "COffcanvas";
var COffcanvasBody = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("offcanvas-body", className) }, rest, { ref }), children);
});
COffcanvasBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
COffcanvasBody.displayName = "COffcanvasBody";
var COffcanvasHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("offcanvas-header", className) }, rest, { ref }), children);
});
COffcanvasHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
COffcanvasHeader.displayName = "COffcanvasHeader";
var COffcanvasTitle = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.component, Component = _b === void 0 ? "h5" : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
  return import_react.default.createElement(Component, __assign({ className: classNames("offcanvas-title", className) }, rest, { ref }), children);
});
COffcanvasTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
COffcanvasTitle.displayName = "COffcanvasTitle";
var CPagination = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, align = _a.align, className = _a.className, size = _a.size, rest = __rest(_a, ["children", "align", "className", "size"]);
  return import_react.default.createElement(
    "nav",
    __assign({ ref }, rest),
    import_react.default.createElement("ul", { className: classNames("pagination", (_b = {}, _b["justify-content-".concat(align)] = align, _b["pagination-".concat(size)] = size, _b), className) }, children)
  );
});
CPagination.propTypes = {
  align: PropTypes.oneOf(["start", "center", "end"]),
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"])
};
CPagination.displayName = "CPagination";
var CPaginationItem = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, component = _a.component, rest = __rest(_a, ["children", "className", "component"]);
  var Component = component !== null && component !== void 0 ? component : rest.active ? "span" : "a";
  return import_react.default.createElement("li", __assign({ className: classNames("page-item", {
    active: rest.active,
    disabled: rest.disabled
  }, className) }, rest.active && { "aria-current": "page" }), Component === "a" ? import_react.default.createElement(CLink, __assign({ className: "page-link", component: Component }, rest, { ref }), children) : import_react.default.createElement(Component, { className: "page-link", ref }, children));
});
CPaginationItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType
};
CPaginationItem.displayName = "CPaginationItem";
var BREAKPOINTS = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
var CPlaceholder = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, animation = _a.animation, className = _a.className, color = _a.color, _c = _a.component, Component = _c === void 0 ? "span" : _c, size = _a.size, rest = __rest(_a, ["children", "animation", "className", "color", "component", "size"]);
  var repsonsiveClassNames = [];
  BREAKPOINTS.forEach(function(bp2) {
    var breakpoint = rest[bp2];
    delete rest[bp2];
    var infix = bp2 === "xs" ? "" : "-".concat(bp2);
    if (typeof breakpoint === "number") {
      repsonsiveClassNames.push("col".concat(infix, "-").concat(breakpoint));
    }
    if (typeof breakpoint === "boolean") {
      repsonsiveClassNames.push("col".concat(infix));
    }
  });
  return import_react.default.createElement(Component, __assign({ className: classNames(animation ? "placeholder-".concat(animation) : "placeholder", (_b = {}, _b["bg-".concat(color)] = color, _b["placeholder-".concat(size)] = size, _b), repsonsiveClassNames, className) }, rest, { ref }), children);
});
CPlaceholder.propTypes = {
  animation: PropTypes.oneOf(["glow", "wave"]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.elementType,
  size: PropTypes.oneOf(["xs", "sm", "lg"])
};
CPlaceholder.displayName = "CPlaceholder";
var CProgressStackedContext = (0, import_react.createContext)({});
var CProgressStacked = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("progress-stacked", className), ref }, rest),
    import_react.default.createElement(CProgressStackedContext.Provider, { value: {
      stacked: true
    } }, children)
  );
});
CProgressStacked.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CProgressStacked.displayName = "CProgressStacked";
var CProgressBar = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, animated = _a.animated, className = _a.className, color = _a.color, _c = _a.value, value = _c === void 0 ? 0 : _c, variant = _a.variant, rest = __rest(_a, ["children", "animated", "className", "color", "value", "variant"]);
  var stacked = (0, import_react.useContext)(CProgressStackedContext).stacked;
  return import_react.default.createElement("div", __assign({ className: classNames("progress-bar", (_b = {}, _b["bg-".concat(color)] = color, _b["progress-bar-".concat(variant)] = variant, _b["progress-bar-animated"] = animated, _b), className) }, !stacked && { style: { width: "".concat(value, "%") } }, rest, { ref }), children);
});
CProgressBar.propTypes = {
  animated: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  value: PropTypes.number,
  variant: PropTypes.oneOf(["striped"])
};
CProgressBar.displayName = "CProgressBar";
var CProgress = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, height = _a.height, progressBarClassName = _a.progressBarClassName, thin = _a.thin, value = _a.value, white = _a.white, rest = __rest(_a, ["children", "className", "height", "progressBarClassName", "thin", "value", "white"]);
  var stacked = (0, import_react.useContext)(CProgressStackedContext).stacked;
  return import_react.default.createElement("div", __assign({ className: classNames("progress", {
    "progress-thin": thin,
    "progress-white": white
  }, className) }, value !== void 0 && {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, { style: __assign(__assign({}, height ? { height: "".concat(height, "px") } : {}), stacked ? { width: "".concat(value, "%") } : {}), ref }), import_react.default.Children.toArray(children).some(
    // @ts-expect-error displayName is set in the CProgressBar component
    function(child) {
      return child.type && child.type.displayName === "CProgressBar";
    }
  ) ? import_react.default.Children.map(children, function(child) {
    if (import_react.default.isValidElement(child) && child.type.displayName === "CProgressBar") {
      return import_react.default.cloneElement(child, __assign(__assign({}, value && { value }), rest));
    }
    return;
  }) : import_react.default.createElement(CProgressBar, __assign({}, progressBarClassName && { className: progressBarClassName }, { value }, rest), children));
});
CProgress.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.number,
  progressBarClassName: PropTypes.string,
  thin: PropTypes.bool,
  value: PropTypes.number,
  white: PropTypes.bool
};
CProgress.displayName = "CProgress";
var CPopover = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.animation, animation = _b === void 0 ? true : _b, className = _a.className, container = _a.container, content = _a.content, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.fallbackPlacements, fallbackPlacements = _d === void 0 ? ["top", "right", "bottom", "left"] : _d, _e = _a.offset, offset2 = _e === void 0 ? [0, 8] : _e, onHide = _a.onHide;
  _a.onShow;
  var _f = _a.placement, placement = _f === void 0 ? "top" : _f, title = _a.title, _g = _a.trigger, trigger = _g === void 0 ? "click" : _g, visible = _a.visible, rest = __rest(_a, ["children", "animation", "className", "container", "content", "delay", "fallbackPlacements", "offset", "onHide", "onShow", "placement", "title", "trigger", "visible"]);
  var popoverRef = (0, import_react.useRef)(null);
  var togglerRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, popoverRef);
  var uID = (0, import_react.useRef)("popover".concat(Math.floor(Math.random() * 1e6)));
  var _h = usePopper(), initPopper = _h.initPopper, destroyPopper = _h.destroyPopper;
  var _j = (0, import_react.useState)(visible), _visible = _j[0], setVisible = _j[1];
  var _delay = typeof delay === "number" ? { show: delay, hide: delay } : delay;
  var popperConfig = {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: ".popover-arrow"
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements
        }
      },
      {
        name: "offset",
        options: {
          offset: offset2
        }
      }
    ],
    placement: getRTLPlacement(placement, togglerRef.current)
  };
  (0, import_react.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  var toggleVisible = function(visible2) {
    if (visible2) {
      setTimeout(function() {
        return setVisible(true);
      }, _delay.show);
      return;
    }
    setTimeout(function() {
      return setVisible(false);
    }, _delay.hide);
  };
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.cloneElement(children, __assign(__assign(__assign(__assign(__assign({}, _visible && {
      "aria-describedby": uID.current
    }), { ref: togglerRef }), (trigger === "click" || trigger.includes("click")) && {
      onClick: function() {
        return toggleVisible(!_visible);
      }
    }), (trigger === "focus" || trigger.includes("focus")) && {
      onFocus: function() {
        return toggleVisible(true);
      },
      onBlur: function() {
        return toggleVisible(false);
      }
    }), (trigger === "hover" || trigger.includes("hover")) && {
      onMouseEnter: function() {
        return toggleVisible(true);
      },
      onMouseLeave: function() {
        return toggleVisible(false);
      }
    })),
    import_react.default.createElement(
      CConditionalPortal,
      { container, portal: true },
      import_react.default.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: popoverRef, onEnter: function() {
        if (togglerRef.current && popoverRef.current) {
          initPopper(togglerRef.current, popoverRef.current, popperConfig);
        }
      }, onEntering: function() {
        if (togglerRef.current && popoverRef.current) {
          popoverRef.current.style.display = "initial";
        }
      }, onExit: onHide, onExited: function() {
        destroyPopper();
      }, timeout: {
        enter: 0,
        exit: popoverRef.current ? getTransitionDurationFromElement(popoverRef.current) + 50 : 200
      }, unmountOnExit: true }, function(state) {
        return import_react.default.createElement(
          "div",
          __assign({ className: classNames("popover", "bs-popover-auto", {
            fade: animation,
            show: state === "entered"
          }, className), id: uID.current, ref: forkedRef, role: "tooltip", style: {
            display: "none"
          } }, rest),
          import_react.default.createElement("div", { className: "popover-arrow" }),
          import_react.default.createElement("div", { className: "popover-header" }, title),
          import_react.default.createElement("div", { className: "popover-body" }, content)
        );
      })
    )
  );
});
CPopover.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  container: PropTypes.any,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number.isRequired,
      hide: PropTypes.number.isRequired
    })
  ]),
  fallbackPlacements: fallbackPlacementsPropType,
  offset: PropTypes.any,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: PropTypes.oneOf(["auto", "top", "right", "bottom", "left"]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  trigger: triggerPropType,
  visible: PropTypes.bool
};
CPopover.displayName = "CPopover";
var isOnMobile = function(element) {
  return Boolean(getComputedStyle(element).getPropertyValue("--cui-is-mobile"));
};
var CSidebar = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, narrow = _a.narrow, onHide = _a.onHide, onShow = _a.onShow, onVisibleChange = _a.onVisibleChange, overlaid = _a.overlaid, position = _a.position, size = _a.size, unfoldable = _a.unfoldable, visible = _a.visible, rest = __rest(_a, ["children", "className", "narrow", "onHide", "onShow", "onVisibleChange", "overlaid", "position", "size", "unfoldable", "visible"]);
  var sidebarRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, sidebarRef);
  var _c = (0, import_react.useState)(false), mobile = _c[0], setMobile = _c[1];
  var _d = (0, import_react.useState)(visible), _visible = _d[0], setVisible = _d[1];
  var _e = (0, import_react.useState)(), inViewport = _e[0], setInViewport = _e[1];
  (0, import_react.useEffect)(function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    setVisible(visible);
  }, [visible]);
  (0, import_react.useEffect)(function() {
    inViewport !== void 0 && onVisibleChange && onVisibleChange(inViewport);
    !inViewport && onHide && onHide();
    inViewport && onShow && onShow();
  }, [inViewport]);
  (0, import_react.useEffect)(function() {
    mobile && visible && setVisible(false);
  }, [mobile]);
  (0, import_react.useEffect)(function() {
    var _a2, _b2;
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    window.addEventListener("resize", handleResize);
    window.addEventListener("mouseup", handleClickOutside);
    window.addEventListener("keyup", handleKeyup);
    (_a2 = sidebarRef.current) === null || _a2 === void 0 ? void 0 : _a2.addEventListener("mouseup", handleOnClick);
    (_b2 = sidebarRef.current) === null || _b2 === void 0 ? void 0 : _b2.addEventListener("transitionend", function() {
      sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
    });
    return function() {
      var _a3, _b3;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mouseup", handleClickOutside);
      window.removeEventListener("keyup", handleKeyup);
      (_a3 = sidebarRef.current) === null || _a3 === void 0 ? void 0 : _a3.removeEventListener("mouseup", handleOnClick);
      (_b3 = sidebarRef.current) === null || _b3 === void 0 ? void 0 : _b3.removeEventListener("transitionend", function() {
        sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
      });
    };
  });
  var handleHide = function() {
    setVisible(false);
  };
  var handleResize = function() {
    sidebarRef.current && setMobile(isOnMobile(sidebarRef.current));
    sidebarRef.current && setInViewport(isInViewport(sidebarRef.current));
  };
  var handleKeyup = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleClickOutside = function(event) {
    if (mobile && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleHide();
    }
  };
  var handleOnClick = function(event) {
    var target = event.target;
    target && target.classList.contains("nav-link") && !target.classList.contains("nav-group-toggle") && mobile && handleHide();
  };
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.createElement("div", __assign({ className: classNames("sidebar", (_b = {
      "sidebar-narrow": narrow,
      "sidebar-overlaid": overlaid
    }, _b["sidebar-".concat(position)] = position, _b["sidebar-".concat(size)] = size, _b["sidebar-narrow-unfoldable"] = unfoldable, _b.show = _visible === true && mobile, _b.hide = _visible === false && !mobile, _b), className) }, rest, { ref: forkedRef }), children),
    typeof window !== "undefined" && mobile && (0, import_react_dom.createPortal)(import_react.default.createElement(CBackdrop, { className: "sidebar-backdrop", visible: _visible }), document.body)
  );
});
CSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  narrow: PropTypes.bool,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  onVisibleChange: PropTypes.func,
  overlaid: PropTypes.bool,
  position: PropTypes.oneOf(["fixed", "sticky"]),
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  unfoldable: PropTypes.bool,
  visible: PropTypes.bool
};
CSidebar.displayName = "CSidebar";
var CSidebarBrand = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("sidebar-brand", className), ref }, rest), children);
});
CSidebarBrand.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarBrand.displayName = "CSidebarBrand";
var CSidebarFooter = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("sidebar-footer", className), ref }, rest), children);
});
CSidebarFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarFooter.displayName = "CSidebarFooter";
var CSidebarToggler = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("button", __assign({ className: classNames("sidebar-toggler", className), ref }, rest), children);
});
CSidebarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarToggler.displayName = "CSidebarToggler";
var CSidebarHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("sidebar-header", className), ref }, rest), children);
});
CSidebarHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CSidebarHeader.displayName = "CSidebarHeader";
var CSpinner = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var className = _a.className, color = _a.color, _c = _a.component, Component = _c === void 0 ? "div" : _c, size = _a.size, _d = _a.variant, variant = _d === void 0 ? "border" : _d, _e = _a.visuallyHiddenLabel, visuallyHiddenLabel = _e === void 0 ? "Loading..." : _e, rest = __rest(_a, ["className", "color", "component", "size", "variant", "visuallyHiddenLabel"]);
  return import_react.default.createElement(
    Component,
    __assign({ className: classNames("spinner-".concat(variant), (_b = {}, _b["spinner-".concat(variant, "-").concat(size)] = size, _b["text-".concat(color)] = color, _b), className), role: "status" }, rest, { ref }),
    import_react.default.createElement("span", { className: "visually-hidden" }, visuallyHiddenLabel)
  );
});
CSpinner.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  component: PropTypes.string,
  size: PropTypes.oneOf(["sm"]),
  variant: PropTypes.oneOf(["border", "grow"]),
  visuallyHiddenLabel: PropTypes.string
};
CSpinner.displayName = "CSpinner";
var CTableHead = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react.default.createElement("thead", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableHead.displayName = "CTableHead";
var CTableHeaderCell = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react.default.createElement("th", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableHeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableHeaderCell.displayName = "CTableHeaderCell";
var CTableBody = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react.default.createElement("tbody", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableBody.displayName = "CTableBody";
var CTableDataCell = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
  var Component = rest.scope ? "th" : "td";
  return import_react.default.createElement(Component, __assign({ className: classNames((_b = {}, _b["align-".concat(align)] = align, _b["table-active"] = active, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableDataCell.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(["bottom", "middle", "top"]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableDataCell.displayName = "CTableDataCell";
var CTableRow = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
  return import_react.default.createElement("tr", __assign({ className: classNames((_b = {}, _b["align-".concat(align)] = align, _b["table-active"] = active, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableRow.propTypes = {
  active: PropTypes.bool,
  align: PropTypes.oneOf(["bottom", "middle", "top"]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableRow.displayName = "CTableRow";
var CTableFoot = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
  return import_react.default.createElement("tfoot", __assign({ className: classNames((_b = {}, _b["table-".concat(color)] = color, _b), className) || void 0 }, rest, { ref }), children);
});
CTableFoot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType
};
CTableFoot.displayName = "CTableFoot";
var CTableCaption = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, props = __rest(_a, ["children"]);
  return import_react.default.createElement("caption", __assign({}, props, { ref }), children);
});
CTableCaption.propTypes = {
  children: PropTypes.node
};
CTableCaption.displayName = "CTableCaption";
var CTableResponsiveWrapper = function(_a) {
  var children = _a.children, responsive = _a.responsive, rest = __rest(_a, ["children", "responsive"]);
  return responsive ? import_react.default.createElement("div", __assign({ className: typeof responsive === "boolean" ? "table-responsive" : "table-responsive-".concat(responsive) }, rest), children) : import_react.default.createElement(import_react.default.Fragment, null, children);
};
CTableResponsiveWrapper.propTypes = {
  children: PropTypes.node,
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ])
};
CTableResponsiveWrapper.displayName = "CTableResponsiveWrapper";
var pretifyName = function(name) {
  return name.replace(/[-_.]/g, " ").replace(/ +/g, " ").replace(/([a-z0-9])([A-Z])/g, "$1 $2").split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
};
var getColumnLabel = function(column) {
  var _a;
  return typeof column === "object" ? (_a = column.label) !== null && _a !== void 0 ? _a : pretifyName(column.key) : pretifyName(column);
};
var getColumnNames = function(columns, items) {
  return columns ? columns.map(function(column) {
    return typeof column === "object" ? column.key : column;
  }) : items && getColumnNamesFromItems(items);
};
var getColumnNamesFromItems = function(items) {
  return Object.keys(items[0] || {}).filter(function(el) {
    return el.charAt(0) !== "_";
  });
};
var CTable = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var children = _a.children, align = _a.align, borderColor = _a.borderColor, bordered = _a.bordered, borderless = _a.borderless, caption = _a.caption, captionTop = _a.captionTop, className = _a.className, color = _a.color, columns = _a.columns, footer = _a.footer, hover = _a.hover, items = _a.items, responsive = _a.responsive, small = _a.small, striped = _a.striped, stripedColumns = _a.stripedColumns, tableFootProps = _a.tableFootProps, tableHeadProps = _a.tableHeadProps, rest = __rest(_a, ["children", "align", "borderColor", "bordered", "borderless", "caption", "captionTop", "className", "color", "columns", "footer", "hover", "items", "responsive", "small", "striped", "stripedColumns", "tableFootProps", "tableHeadProps"]);
  var columnNames = (0, import_react.useMemo)(function() {
    return getColumnNames(columns, items);
  }, [columns, items]);
  return import_react.default.createElement(
    CTableResponsiveWrapper,
    { responsive },
    import_react.default.createElement(
      "table",
      __assign({ className: classNames("table", (_b = {}, _b["align-".concat(align)] = align, _b["border-".concat(borderColor)] = borderColor, _b["caption-top"] = captionTop || caption === "top", _b["table-bordered"] = bordered, _b["table-borderless"] = borderless, _b["table-".concat(color)] = color, _b["table-hover"] = hover, _b["table-sm"] = small, _b["table-striped"] = striped, _b["table-striped-columns"] = stripedColumns, _b), className) }, rest, { ref }),
      (caption && caption !== "top" || captionTop) && import_react.default.createElement(CTableCaption, null, caption || captionTop),
      columns && import_react.default.createElement(
        CTableHead,
        __assign({}, tableHeadProps),
        import_react.default.createElement(CTableRow, null, columns.map(function(column, index) {
          return import_react.default.createElement(CTableHeaderCell, __assign({}, column._props && __assign({}, column._props), column._style && { style: __assign({}, column._style) }, { key: index }), getColumnLabel(column));
        }))
      ),
      items && import_react.default.createElement(CTableBody, null, items.map(function(item, index) {
        return import_react.default.createElement(CTableRow, __assign({}, item._props && __assign({}, item._props), { key: index }), columnNames && columnNames.map(function(colName, index2) {
          return item[colName] !== void 0 ? import_react.default.createElement(CTableDataCell, __assign({}, item._cellProps && __assign(__assign({}, item._cellProps["all"] && __assign({}, item._cellProps["all"])), item._cellProps[colName] && __assign({}, item._cellProps[colName])), { key: index2 }), item[colName]) : null;
        }));
      })),
      children,
      footer && import_react.default.createElement(
        CTableFoot,
        __assign({}, tableFootProps),
        import_react.default.createElement(CTableRow, null, footer.map(function(item, index) {
          return import_react.default.createElement(CTableDataCell, __assign({}, typeof item === "object" && item._props && __assign({}, item._props), { key: index }), typeof item === "object" ? item.label : item);
        }))
      )
    )
  );
});
CTable.propTypes = {
  align: PropTypes.oneOf(["bottom", "middle", "top"]),
  borderColor: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(["top"])]),
  captionTop: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  columns: PropTypes.array,
  footer: PropTypes.array,
  hover: PropTypes.bool,
  items: PropTypes.array,
  responsive: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])
  ]),
  small: PropTypes.bool,
  striped: PropTypes.bool,
  stripedColumns: PropTypes.bool,
  tableFootProps: PropTypes.shape(__assign({}, CTableFoot.propTypes)),
  tableHeadProps: PropTypes.shape(__assign({}, CTableHead.propTypes))
};
CTable.displayName = "CTable";
var CTabContent = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("tab-content", className) }, rest, { ref }), children);
});
CTabContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CTabContent.displayName = "CTabContent";
var CTabPane = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, onHide = _a.onHide, onShow = _a.onShow, visible = _a.visible, rest = __rest(_a, ["children", "className", "onHide", "onShow", "visible"]);
  var tabPaneRef = (0, import_react.useRef)();
  var forkedRef = useForkedRef(ref, tabPaneRef);
  return import_react.default.createElement(Transition$1, { in: visible, nodeRef: tabPaneRef, onEnter: onShow, onExit: onHide, timeout: 150 }, function(state) {
    return import_react.default.createElement("div", __assign({ className: classNames("tab-pane", "fade", {
      active: visible,
      show: state === "entered"
    }, className) }, rest, { ref: forkedRef }), children);
  });
});
CTabPane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  visible: PropTypes.bool
};
CTabPane.displayName = "CTabPane";
var CToastContext = (0, import_react.createContext)({});
var CToast = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.animation, animation = _b === void 0 ? true : _b, _c = _a.autohide, autohide = _c === void 0 ? true : _c, className = _a.className, color = _a.color, _d = _a.delay, delay = _d === void 0 ? 5e3 : _d, index = _a.index, key = _a.key, _e = _a.visible, visible = _e === void 0 ? false : _e, onClose = _a.onClose, onShow = _a.onShow, rest = __rest(_a, ["children", "animation", "autohide", "className", "color", "delay", "index", "key", "visible", "onClose", "onShow"]);
  var toastRef = (0, import_react.useRef)();
  var forkedRef = useForkedRef(ref, toastRef);
  var _f = (0, import_react.useState)(false), _visible = _f[0], setVisible = _f[1];
  var timeout2 = (0, import_react.useRef)();
  (0, import_react.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  var contextValues = {
    visible: _visible,
    setVisible
  };
  (0, import_react.useEffect)(function() {
    return function() {
      return clearTimeout(timeout2.current);
    };
  }, []);
  (0, import_react.useEffect)(function() {
    _autohide();
  }, [_visible]);
  var _autohide = function() {
    if (autohide) {
      clearTimeout(timeout2.current);
      timeout2.current = window.setTimeout(function() {
        setVisible(false);
      }, delay);
    }
  };
  return import_react.default.createElement(Transition$1, { in: _visible, nodeRef: toastRef, onEnter: function() {
    return onShow && onShow(index !== null && index !== void 0 ? index : null);
  }, onExited: function() {
    return onClose && onClose(index !== null && index !== void 0 ? index : null);
  }, timeout: 250, unmountOnExit: true }, function(state) {
    var _a2;
    return import_react.default.createElement(
      CToastContext.Provider,
      { value: contextValues },
      import_react.default.createElement("div", __assign({ className: classNames("toast", (_a2 = {
        fade: animation
      }, _a2["bg-".concat(color)] = color, _a2["border-0"] = color, _a2["show showing"] = state === "entering" || state === "exiting", _a2.show = state === "entered", _a2), className), "aria-live": "assertive", "aria-atomic": "true", role: "alert", onMouseEnter: function() {
        return clearTimeout(timeout2.current);
      }, onMouseLeave: function() {
        return _autohide();
      } }, rest, { key, ref: forkedRef }), children)
    );
  });
});
CToast.propTypes = {
  animation: PropTypes.bool,
  autohide: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: colorPropType,
  delay: PropTypes.number,
  index: PropTypes.number,
  key: PropTypes.number,
  onClose: PropTypes.func,
  onShow: PropTypes.func,
  visible: PropTypes.bool
};
CToast.displayName = "CToast";
var CToastBody = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
  return import_react.default.createElement("div", __assign({ className: classNames("toast-body", className) }, rest, { ref }), children);
});
CToastBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CToastBody.displayName = "CToastBody";
var CToastClose = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, Component = _a.component, rest = __rest(_a, ["children", "component"]);
  var setVisible = (0, import_react.useContext)(CToastContext).setVisible;
  return Component ? import_react.default.createElement(Component, __assign({ onClick: function() {
    return setVisible(false);
  } }, rest, { ref }), children) : import_react.default.createElement(CCloseButton, __assign({ onClick: function() {
    return setVisible(false);
  } }, rest, { ref }));
});
CToastClose.propTypes = __assign(__assign({}, CCloseButton.propTypes), { component: PropTypes.elementType });
CToastClose.displayName = "CToastClose";
var CToastHeader = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, closeButton = _a.closeButton, rest = __rest(_a, ["children", "className", "closeButton"]);
  return import_react.default.createElement(
    "div",
    __assign({ className: classNames("toast-header", className) }, rest, { ref }),
    children,
    closeButton && import_react.default.createElement(CToastClose, null)
  );
});
CToastHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeButton: PropTypes.bool
};
CToastHeader.displayName = "CToastHeader";
var CToaster = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, className = _a.className, placement = _a.placement, push = _a.push, rest = __rest(_a, ["children", "className", "placement", "push"]);
  var _b = (0, import_react.useState)([]), toasts = _b[0], setToasts = _b[1];
  var index = (0, import_react.useRef)(0);
  (0, import_react.useEffect)(function() {
    index.current++;
    push && addToast(push);
  }, [push]);
  var addToast = function(push2) {
    setToasts(function(state) {
      return __spreadArray(__spreadArray([], state, true), [
        import_react.default.cloneElement(push2, {
          index: index.current,
          key: index.current,
          onClose: function(index2) {
            return setToasts(function(state2) {
              return state2.filter(function(i) {
                return i.props.index !== index2;
              });
            });
          }
        })
      ], false);
    });
  };
  return import_react.default.createElement(CConditionalPortal, { portal: typeof placement === "string" }, toasts.length > 0 || children ? import_react.default.createElement(
    "div",
    __assign({ className: classNames("toaster toast-container p-3", {
      "position-fixed": placement,
      "top-0": placement && placement.includes("top"),
      "top-50 translate-middle-y": placement && placement.includes("middle"),
      "bottom-0": placement && placement.includes("bottom"),
      "start-0": placement && placement.includes("start"),
      "start-50 translate-middle-x": placement && placement.includes("center"),
      "end-0": placement && placement.includes("end")
    }, className) }, rest, { ref }),
    children,
    toasts.map(function(toast) {
      return import_react.default.cloneElement(toast, { visible: true });
    })
  ) : null);
});
CToaster.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  placement: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "top-start",
      "top-center",
      "top-end",
      "middle-start",
      "middle-center",
      "middle-end",
      "bottom-start",
      "bottom-center",
      "bottom-end"
    ])
  ]),
  push: PropTypes.any
};
CToaster.displayName = "CToaster";
var CTooltip = (0, import_react.forwardRef)(function(_a, ref) {
  var children = _a.children, _b = _a.animation, animation = _b === void 0 ? true : _b, className = _a.className, container = _a.container, content = _a.content, _c = _a.delay, delay = _c === void 0 ? 0 : _c, _d = _a.fallbackPlacements, fallbackPlacements = _d === void 0 ? ["top", "right", "bottom", "left"] : _d, _e = _a.offset, offset2 = _e === void 0 ? [0, 6] : _e, onHide = _a.onHide;
  _a.onShow;
  var _f = _a.placement, placement = _f === void 0 ? "top" : _f, _g = _a.trigger, trigger = _g === void 0 ? ["hover", "focus"] : _g, visible = _a.visible, rest = __rest(_a, ["children", "animation", "className", "container", "content", "delay", "fallbackPlacements", "offset", "onHide", "onShow", "placement", "trigger", "visible"]);
  var tooltipRef = (0, import_react.useRef)(null);
  var togglerRef = (0, import_react.useRef)(null);
  var forkedRef = useForkedRef(ref, tooltipRef);
  var uID = (0, import_react.useRef)("tooltip".concat(Math.floor(Math.random() * 1e6)));
  var _h = usePopper(), initPopper = _h.initPopper, destroyPopper = _h.destroyPopper;
  var _j = (0, import_react.useState)(visible), _visible = _j[0], setVisible = _j[1];
  var _delay = typeof delay === "number" ? { show: delay, hide: delay } : delay;
  var popperConfig = {
    modifiers: [
      {
        name: "arrow",
        options: {
          element: ".tooltip-arrow"
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements
        }
      },
      {
        name: "offset",
        options: {
          offset: offset2
        }
      }
    ],
    placement: getRTLPlacement(placement, togglerRef.current)
  };
  (0, import_react.useEffect)(function() {
    setVisible(visible);
  }, [visible]);
  var toggleVisible = function(visible2) {
    if (visible2) {
      setTimeout(function() {
        return setVisible(true);
      }, _delay.show);
      return;
    }
    setTimeout(function() {
      return setVisible(false);
    }, _delay.hide);
  };
  return import_react.default.createElement(
    import_react.default.Fragment,
    null,
    import_react.default.cloneElement(children, __assign(__assign(__assign(__assign(__assign({}, _visible && {
      "aria-describedby": uID.current
    }), { ref: togglerRef }), (trigger === "click" || trigger.includes("click")) && {
      onClick: function() {
        return toggleVisible(!_visible);
      }
    }), (trigger === "focus" || trigger.includes("focus")) && {
      onFocus: function() {
        return toggleVisible(true);
      },
      onBlur: function() {
        return toggleVisible(false);
      }
    }), (trigger === "hover" || trigger.includes("hover")) && {
      onMouseEnter: function() {
        return toggleVisible(true);
      },
      onMouseLeave: function() {
        return toggleVisible(false);
      }
    })),
    import_react.default.createElement(
      CConditionalPortal,
      { container, portal: true },
      import_react.default.createElement(Transition$1, { in: _visible, mountOnEnter: true, nodeRef: tooltipRef, onEnter: function() {
        if (togglerRef.current && tooltipRef.current) {
          initPopper(togglerRef.current, tooltipRef.current, popperConfig);
        }
      }, onEntering: function() {
        if (togglerRef.current && tooltipRef.current) {
          tooltipRef.current.style.display = "initial";
        }
      }, onExit: onHide, onExited: function() {
        destroyPopper();
      }, timeout: {
        enter: 0,
        exit: tooltipRef.current ? getTransitionDurationFromElement(tooltipRef.current) + 50 : 200
      }, unmountOnExit: true }, function(state) {
        return import_react.default.createElement(
          "div",
          __assign({ className: classNames("tooltip", "bs-tooltip-auto", {
            fade: animation,
            show: state === "entered"
          }, className), id: uID.current, ref: forkedRef, role: "tooltip", style: {
            display: "none"
          } }, rest),
          import_react.default.createElement("div", { className: "tooltip-arrow" }),
          import_react.default.createElement("div", { className: "tooltip-inner" }, content)
        );
      })
    )
  );
});
CTooltip.propTypes = {
  animation: PropTypes.bool,
  children: PropTypes.node,
  container: PropTypes.any,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  delay: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      show: PropTypes.number.isRequired,
      hide: PropTypes.number.isRequired
    })
  ]),
  fallbackPlacements: fallbackPlacementsPropType,
  offset: PropTypes.any,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  placement: PropTypes.oneOf(["auto", "top", "right", "bottom", "left"]),
  trigger: triggerPropType,
  visible: PropTypes.bool
};
CTooltip.displayName = "CTooltip";
var CWidgetStatsA = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var action = _a.action, chart = _a.chart, className = _a.className, color = _a.color, title = _a.title, value = _a.value, rest = __rest(_a, ["action", "chart", "className", "color", "title", "value"]);
  return import_react.default.createElement(
    CCard,
    __assign({ className: classNames((_b = {}, _b["bg-".concat(color)] = color, _b["text-high-emphasis-inverse"] = color, _b), className) }, rest, { ref }),
    import_react.default.createElement(
      CCardBody,
      { className: "pb-0 d-flex justify-content-between align-items-start" },
      import_react.default.createElement(
        "div",
        null,
        value && import_react.default.createElement("div", { className: "fs-4 fw-semibold" }, value),
        title && import_react.default.createElement("div", null, title)
      ),
      action
    ),
    chart
  );
});
CWidgetStatsA.propTypes = {
  action: PropTypes.node,
  chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  color: colorPropType,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number])
};
CWidgetStatsA.displayName = "CWidgetStatsA";
var CWidgetStatsB = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, color = _a.color, inverse = _a.inverse, progress = _a.progress, text = _a.text, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "inverse", "progress", "text", "title", "value"]);
  return import_react.default.createElement(
    CCard,
    __assign({ className, color }, inverse && { textColor: "high-emphasis-inverse" }, rest, { ref }),
    import_react.default.createElement(
      CCardBody,
      null,
      value && import_react.default.createElement("div", { className: "fs-4 fw-semibold" }, value),
      title && import_react.default.createElement("div", null, title),
      import_react.default.createElement(CProgress, __assign({ className: "my-2", height: 4 }, inverse && { white: true }, progress)),
      text && import_react.default.createElement("small", { className: inverse ? "text-medium-emphasis-inverse" : "text-medium-emphasis" }, text)
    )
  );
});
CWidgetStatsB.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  inverse: PropTypes.bool,
  progress: PropTypes.object,
  text: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number])
};
CWidgetStatsB.displayName = "CWidgetCWidgetStatsB";
var CWidgetStatsC = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, color = _a.color, icon = _a.icon, inverse = _a.inverse, progress = _a.progress, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "icon", "inverse", "progress", "title", "value"]);
  return import_react.default.createElement(
    CCard,
    __assign({ className, color }, inverse && { textColor: "high-emphasis-inverse" }, rest, { ref }),
    import_react.default.createElement(
      CCardBody,
      null,
      icon && import_react.default.createElement("div", { className: "text-medium-emphasis".concat(inverse ? "-inverse" : "", " text-end mb-4") }, icon),
      value && import_react.default.createElement("div", { className: "text-high-emphasis".concat(inverse ? "-inverse" : "", " fs-4 fw-semibold") }, value),
      title && import_react.default.createElement("div", { className: inverse ? "text-medium-emphasis-inverse" : "text-medium-emphasis" }, title),
      import_react.default.createElement(CProgress, __assign({ className: "mt-3 mb-0", height: 4 }, inverse && { white: true }, progress))
    )
  );
});
CWidgetStatsC.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  inverse: PropTypes.bool,
  progress: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number])
};
CWidgetStatsC.displayName = "CWidgetStatsCWidgetStatsC";
var CWidgetStatsD = (0, import_react.forwardRef)(function(_a, ref) {
  var _b;
  var className = _a.className, chart = _a.chart, color = _a.color, icon = _a.icon, values = _a.values, rest = __rest(_a, ["className", "chart", "color", "icon", "values"]);
  return import_react.default.createElement(
    CCard,
    __assign({ className }, rest, { ref }),
    import_react.default.createElement(
      CCardHeader,
      { className: classNames("position-relative d-flex justify-content-center align-items-center", (_b = {}, _b["bg-".concat(color)] = color, _b)) },
      icon,
      chart
    ),
    import_react.default.createElement(CCardBody, { className: "row text-center" }, values && values.map(function(value, index) {
      return import_react.default.createElement(
        import_react.default.Fragment,
        { key: index },
        index % 2 !== 0 && import_react.default.createElement("div", { className: "vr" }),
        import_react.default.createElement(
          CCol,
          null,
          import_react.default.createElement("div", { className: "fs-5 fw-semibold" }, value.value),
          import_react.default.createElement("div", { className: "text-uppercase text-medium-emphasis small" }, value.title)
        )
      );
    }))
  );
});
CWidgetStatsD.propTypes = {
  chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  color: colorPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  values: PropTypes.arrayOf(PropTypes.any)
};
CWidgetStatsD.displayName = "CWidgetStatsD";
var CWidgetStatsE = (0, import_react.forwardRef)(function(_a, ref) {
  var chart = _a.chart, className = _a.className, title = _a.title, value = _a.value, rest = __rest(_a, ["chart", "className", "title", "value"]);
  return import_react.default.createElement(
    CCard,
    __assign({ className: classNames(className) }, rest, { ref }),
    import_react.default.createElement(
      CCardBody,
      { className: "text-center" },
      title && import_react.default.createElement("div", { className: "text-medium-emphasis small text-uppercase fw-semibold" }, title),
      value && import_react.default.createElement("div", { className: "fs-6 fw-semibold py-3" }, value),
      chart
    )
  );
});
CWidgetStatsE.propTypes = {
  children: PropTypes.node,
  chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number])
};
CWidgetStatsE.displayName = "CWidgetStatsE";
var CWidgetStatsF = (0, import_react.forwardRef)(function(_a, ref) {
  var className = _a.className, color = _a.color, footer = _a.footer, icon = _a.icon, _b = _a.padding, padding = _b === void 0 ? true : _b, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "footer", "icon", "padding", "title", "value"]);
  return import_react.default.createElement(
    CCard,
    __assign({ className }, rest, { ref }),
    import_react.default.createElement(
      CCardBody,
      { className: "d-flex align-items-center ".concat(padding === false && "p-0") },
      import_react.default.createElement("div", { className: "me-3 text-white bg-".concat(color, " ").concat(padding ? "p-3" : "p-4") }, icon),
      import_react.default.createElement(
        "div",
        null,
        import_react.default.createElement("div", { className: "fs-6 fw-semibold text-".concat(color) }, value),
        import_react.default.createElement("div", { className: "text-medium-emphasis text-uppercase fw-semibold small" }, title)
      )
    ),
    footer && import_react.default.createElement(CCardFooter, null, footer)
  );
});
CWidgetStatsF.propTypes = {
  className: PropTypes.string,
  color: colorPropType,
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  padding: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number])
};
CWidgetStatsF.displayName = "CWidgetStatsF";
export {
  CAccordion,
  CAccordionBody,
  CAccordionButton,
  CAccordionHeader,
  CAccordionItem,
  CAlert,
  CAlertHeading,
  CAlertLink,
  CAvatar,
  CBackdrop,
  CBadge,
  CBreadcrumb,
  CBreadcrumbItem,
  CButton,
  CButtonGroup,
  CButtonToolbar,
  CCallout,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardImageOverlay,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCloseButton,
  CCol,
  CCollapse,
  CConditionalPortal,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownItemPlain,
  CDropdownMenu,
  CDropdownToggle,
  CFooter,
  CForm,
  CFormCheck,
  CFormControlValidation,
  CFormControlWrapper,
  CFormFeedback,
  CFormFloating,
  CFormInput,
  CFormLabel,
  CFormRange,
  CFormSelect,
  CFormSwitch,
  CFormText,
  CFormTextarea,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderText,
  CHeaderToggler,
  CImage,
  CInputGroup,
  CInputGroupText,
  CLink,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalContent,
  CModalDialog,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CNav,
  CNavGroup,
  CNavGroupItems,
  CNavItem,
  CNavLink,
  CNavTitle,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarText,
  CNavbarToggler,
  COffcanvas,
  COffcanvasBody,
  COffcanvasHeader,
  COffcanvasTitle,
  CPagination,
  CPaginationItem,
  CPlaceholder,
  CPopover,
  CProgress,
  CProgressBar,
  CProgressStacked,
  CRow,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
  CSpinner,
  CTabContent,
  CTabPane,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CToast,
  CToastBody,
  CToastClose,
  CToastHeader,
  CToaster,
  CTooltip,
  CWidgetStatsA,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsD,
  CWidgetStatsE,
  CWidgetStatsF,
  useForkedRef,
  usePopper
};
/*! Bundled license information:

@coreui/react/dist/index.es.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@coreui/react/dist/index.es.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

@coreui/react/dist/index.es.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=@coreui_react.js.map