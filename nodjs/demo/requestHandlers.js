// var exec = require("child_process").exec;
var querystring = require("querystring");

function start(response){
    console.log("Request handler 'start' was called.");

    // function sleep(milliseconds){
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliseconds);
    // }
    //
    // sleep(10000);
    //
    // return "Hello Start";

    // var content = "empty";

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html;'+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    // exec("ls-lah",
    //     function(error, stdout, stderr){
    //     response.writeHead(200, {"Content-Type":"text/html"});
    //     response.write(stdout);
    //     response.end();
    // });

    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();

    // return content;
};

function upload(response, postData){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("You've sent: " + querystring.parse(postData).text);
    response.end();
    // return "Hello upload";
};

exports.start = start;
exports.upload = upload;