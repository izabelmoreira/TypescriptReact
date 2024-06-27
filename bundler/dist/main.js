(() => {
  var __webpack_modules__ = {
    './src/index.js': (
      __unused_webpack_module,
      __unused_webpack_exports,
      __webpack_require__
    ) => {
      eval(
        'const message = __webpack_require__(/*! ./message */ "./src/message.js")\r\n\r\nconsole.log(message);\n\n//# sourceURL=webpack://bundler/./src/index.js?'
      );
    },

    './src/message.js': () => {
      eval('\n\n//# sourceURL=webpack://bundler/./src/message.js?');
    },
  };
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  var __webpack_exports__ = __webpack_require__('./src/index.js');
})();
