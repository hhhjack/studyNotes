/*
var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

var multer = require('multer');

var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
}

var uploadFolder = './upload/';

createFolder(uploadFolder);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname )
    }
  })
  
var upload = multer({ storage: storage })

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json())

app.get('/', function(req, res){
    // var responseObject = req.method;
    // console.dir(req.params);
    console.dir(req.query);
    res.send("you requested to see a profile page  " + req.query.name);
});

app.get('/form/:name', function(req, res){
    // var person = req.params.name;
    var data = { age: 18, hobbie:['eating', 'fighting']};
    res.render('form', {data: data});
    // res.sendFile(__dirname + './form.html');
});
app.get('/about', function(req, res){
    res.render('about');
});

app.post('/', function (req, res){
    console.dir(req.body);
    res.send("Post");
});

app.post('/upload', upload.single('logo'), function (req, res){
    console.dir(req.file);
    res.send({ 'rec_code' : 0 });
});

app.listen(3000);

*/

var express = require('express');

var app = express();

var indexRouter = require('./routers/index');
var userRouter = require('./routers/users');

app.use('/', indexRouter);
app.use('/users', userRouter);

// app.use(express.static('public'));

// app.use(function(req, res, next){
//     console.log("first middleware");
//     next();
//     console.log("first middleware after");
// });
// app.use('/home',function(req, res, next){
//     console.log("second middleware");
//     res.send('ok');
// });

app.get('/users', function (req, res, next){
    res.send('users');
});
app.get('/', function (req, res, next){
    res.send('root');
});

app.listen(3000);
console.log('listening to port 3000');

