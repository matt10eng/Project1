const express = require("express")
const app = express();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/paper.html');
});

app.get('/style2.css', function (req, res){
    res.sendFile(__dirname + '/style2.css');
});

app.get('/text.css', function (req, res){
    res.sendFile(__dirname + '/text.css');
});


app.listen(3753, function () {
    console.log('Example page listening on port 3753!')
}); 