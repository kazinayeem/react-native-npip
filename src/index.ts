import { NativeModules } from 'react-native';


const { PiPModule } = NativeModules;


const enterPiPMode = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (PiPModule) {
      PiPModule.enterPiPMode()
        .then((result: string) => resolve(result))
        .catch((error: any) => reject(error));
    } else {
      reject(new Error('PiPModule is not available.'));
    }
  });
};


export default {
  enterPiPMode,
};
