var express = require('express');
//var bodyParser = require('body-parser');

const app = express();
const getArea = require('./area.js');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.route('/getArea')
.get(function (req, res) {
    var x = parseInt(req.query.side1);
    var y = parseInt(req.query.side2);
    var arrayToPass = [x,y];

    r = getArea(arrayToPass);

    if (r != -1){
        res.json({area : r});
        res.status = 200;        
    }
    else{
        res.status(400).send({"area" : r});
    }
    });
/*
.get(function (req, res){
      //parse query params
      var x = parseInt(req.query.side1);
      var y = parseInt(req.query.side2);
      var arrayToPass = [x,y];

      //call getArea and check the result
      var r = getArea(arrayToPass);

      if(r != -1){
        res.json({ area : r });
        res.status = 200;
      }
      else{
        res.status(400).send({ "area" : r });
      }

});
*/

// abilita /getArea?side1=3&side2=5 senza /api
app.get('/getArea', function (req, res){
      //parse query params
      var x = parseInt(req.query.side1);
      var y = parseInt(req.query.side2);
      var arrayToPass = [x,y];

      //call getArea and check the result
      var r = getArea(arrayToPass);

      if(r >= 0){
        res.json({ area : r });
        res.status = 200;
      }
      else{
        res.status(400).send({ "area" : r });
      }

});


app.use(function (req, res, next) {
    // do logging
    console.log('Something is happening.');
    //Enabling CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE');
        return res.status(200).json({});
    }
    // make sure we go to the next routes
    next();
});

// register our router on /api
app.use('/api', router);

// handle invalid requests and internal error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({ error: { message: err.message } });
});


app.listen(port);
console.log('Magic happens on port ' + port);