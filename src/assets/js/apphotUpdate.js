
var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        /*document.getElementById('myFetchBtn').addEventListener('click', app.checkForUpdate);*/
        app.checkForUpdate()
    },

    checkForUpdate: function() {
        chcp.fetchUpdate(this.fetchUpdateCallback);
    },

    fetchUpdateCallback: function(error, data) {
        if (error) {
            console.log('错误代码: ' + error.code);
            console.log(error.description);
            return;
        }
        console.log('正则更新');

        chcp.installUpdate(this.installationCallback);
    },

    installationCallback: function(error) {
        if (error) {
            console.log('更新失败错误码 ' + error.code);
            console.log(error.description);
        } else {
            console.log('更新完成!');
        }
    }
};
app.initialize();
