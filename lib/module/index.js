import { NativeModules } from 'react-native';
const {
  PiPModule
} = NativeModules;
const enterPiPMode = () => {
  return new Promise((resolve, reject) => {
    if (PiPModule) {
      PiPModule.enterPiPMode().then(result => resolve(result)).catch(error => reject(error));
    } else {
      reject(new Error('PiPModule is not available.'));
    }
  });
};
export default {
  enterPiPMode
};
//# sourceMappingURL=index.js.map