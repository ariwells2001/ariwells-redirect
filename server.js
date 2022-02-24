const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.get("/aqararesponse", function (req, res) { console.log("aqararesponse");
 console.log(req.query.code);
 console.log(req.query.state);
 authCode = req.query.code;
 authState = req.query.state;
 let result = { message: 'Success', authCode: authCode, authState: authState }
 console.log("result: ", result);
 res.json(result);

});


app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
