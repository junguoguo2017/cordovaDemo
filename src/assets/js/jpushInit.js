document.addEventListener("deviceready",function(){
    //极光推送插件初始化
    window.plugins.jPushPlugin.init();
    if(device.platform=='iOS'){
        window.plugins.jPushPlugin.startJPushSDK()
    }
    document.addEventListener('jpush.receiveRegistrationId', function (event) {
        console.log('注册成功')
    }, false)

    window.plugins.jPushPlugin.setAlias({ 'sequence':5, 'alias':'5'  },function(data){
        //success
        //alert('success')
        console.log('success')
    },function(err){
        //error
        var err = JSON.stringify(err)
        console.log(err)
    })
}, false);
