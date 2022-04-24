const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var PORT = 3001;

app.use(bodyParser.json());
app.post("/aqararesponse", function (req, res) { console.log("aqararesponse");
 console.log(req.body);
 console.log(req.body.code);
 console.log(req.body.state);
 authCode = req.body.code;
 authState = req.body.state;
 let result = { message: 'Success', 'authCode': authCode, 'authState': authState }
 console.log("result: ", result);
 res.json(result);

});


app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
