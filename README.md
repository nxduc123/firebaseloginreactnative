# firebaseloginreactnative
BUGfix 01: lỗi TimeJS 
Firstly you have to find the following file in your project: libraries/Core/Timers/JSTimer;js
Open it and you just have to change this const MAX_TIMER_DURATION_MS, to increase above your duration, in your case, above 85000

BUGfix 02: 
install /Roboto_medium.ttf and add to App.js
await Expo.Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      });