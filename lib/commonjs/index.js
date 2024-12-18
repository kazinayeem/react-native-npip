"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const {
  PiPModule
} = _reactNative.NativeModules;
const enterPiPMode = () => {
  return new Promise((resolve, reject) => {
    if (PiPModule) {
      PiPModule.enterPiPMode().then(result => resolve(result)).catch(error => reject(error));
    } else {
      reject(new Error('PiPModule is not available.'));
    }
  });
};
var _default = exports.default = {
  enterPiPMode
};
//# sourceMappingURL=index.js.map