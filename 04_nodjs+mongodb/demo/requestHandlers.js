// var exec = require("child_process").exec;
var querystring = require("querystring"),
    formidable = require("formidable"),
    fs = require("fs");

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
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        // '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="file" name="upload">' +
        '<input type="submit" value="Upload file" />'+
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

function upload(response, request){
    console.log("Request handler 'upload' was called.");

    var form = new formidable.IncomingForm();
    console.log("about to parse");

    form.parse(request, function(error, fields, files){
        console.log("parsing done");

        fs.renameSync(files.upload.path, "E:\\for_work_study\\my_study_notes\\nodjs\\demo\\tmp");
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("received image:<br/>");
        response.wriet("<img src='/show'/>");
        response.end();
    });

    // return "Hello upload";
};

function show(response){
    console.log("Request handler 'show' was called.");
    fs.readFile("E:\\for_work_study\\my_study_notes\\nodjs\\demo\\tmp\\test-icon.png", "binary", function(error, file){
        if(error){
            response.writeHead(500, {"Content-Type":"text/plain"});
            response.write(error + "\n");
            response.end();
        }else{
            response.writeHead(200, {"Content-Type":"image/png"});
            response.write(file, "binary");
            // console.log("test", file);
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;