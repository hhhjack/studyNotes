var exec = require("child_process").exec;

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
    exec("ls-lah",
        function(error, stdout, stderr){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });

    // return content;
};

function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello Upload");
    response.end();
    // return "Hello upload";
};

exports.start = start;
exports.upload = upload;