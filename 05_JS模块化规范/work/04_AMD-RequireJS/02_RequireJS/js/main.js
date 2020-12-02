(function(){

    requirejs.config({
        baseUrl: 'js/', //基本路径， 出发点在根目录
        paths:{ //配置路径
            dataService: './modules/dataService',
            alerter: './modules/alerter'
        }
    })

    requirejs(['alerter'], function(alerter){
        alerter.showMsg();
    })
})();