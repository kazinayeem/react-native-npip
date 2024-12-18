# react-native-npip

A lightweight React Native module to enable **Picture-in-Picture (PiP)** mode for Android devices. This module allows your React Native app to trigger PiP mode seamlessly.

---

## 🚀 Features

- Enable **Picture-in-Picture (PiP)** mode with a single function call.
- Works on Android 8.0 (API level 26) and higher.
- Lightweight and easy to integrate.

---

## 📦 Installation

Install the library using npm or yarn:

```bash
npm install react-native-npip
# OR
yarn add react-native-npip


import PiP from 'react-native-npip';

// Enable Picture-in-Picture Mode
const enablePiP = () => {
  PiP.enterPiPMode()
    .then((message) => {
      console.log(message); // "PiP mode entered successfully"
    })
    .catch((error) => {
    }


🛠 Setup
For Android
Add the following configuration to your AndroidManifest.xml:


<activity
    android:name=".MainActivity"
    android:supportsPictureInPicture="true"
    android:configChanges="screenSize|smallestScreenSize|screenLayout|orientation" />




---

### **How to Use This README**
1. Save this content in your project root as `README.md`.
2. Replace `yourusername` with your GitHub username or repository URL where applicable.
3. Share this README with your npm package.

Let me know if you need further help to customize or publish this! 🚀😊
