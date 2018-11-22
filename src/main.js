// Import Vue
import Vue from 'vue'

// Import Framework7
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import Framework7 Vue
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import F7 Style
import Framework7CSS from 'framework7/css/framework7.css'

// Import F7 iOS Icons
import Framework7Icons from 'framework7-icons/css/framework7-icons.css'

// Import Material Icons
import MaterialIcons from 'material-design-icons/iconfont/material-icons.css'

// Import Fontawesome Theme Styles
import FontAwesome from 'font-awesome/css/font-awesome.css'

// Import App Custom Styles
// import AppStyles from './assets/sass/main.scss'

// Import App Component
import app from './main.vue'


// Import Vuex Storage
import store from './assets/vuex/storage.js'
import './assets/js/apphotUpdate'
/*import  './assets/js/jpushInit'*/
// Different F7-Vue plugin initialization with f7 v3.0
Framework7.use(Framework7Vue);

let VConsole = require('../node_modules/vconsole/dist/vconsole.min');
let vConsole = new VConsole();//初始化
Vue.use(vConsole);//设为全局
let onDeviceReady = function () {
    document.addEventListener("jpush.receiveRegistrationId", function (event) {
        console.log("receiveRegistrationId" + JSON.stringify(event));
    }, false);
    initJPush();
};
function initJPush() {
    if ('JPush' in window) {
        console.log('initialize JPush...');
        try {
            window.JPush.init();
            window.JPush.setDebugMode(true);
            window.setTimeout(() => {
                window.JPush.getRegistrationID((data) => {
                    console.log(data);
                    console.log('JPush initialize successful...');
                });
            }, 1000);
            if (device.platform != "Android") {
                window.JPush.setApplicationIconBadgeNumber(0);
            }
        } catch (exception) {
            console.log(exception);
        }
    } else {
        console.error('JPush is not exist...');
    }
}
document.addEventListener("deviceready", onDeviceReady, false);
// Init Vue App
export default new Vue({
  // Root Element
  el: '#app',
  store,
  render: c => c('app'),
  components: {
    app
  }
});
