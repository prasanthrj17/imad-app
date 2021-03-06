var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
app.get("/",function (req,res)){
  res.sendFile(path.join(__dirname, 'u', 'index.html'));  
});

app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, 'u', 'Article one.html'));  

  
});

app.get('/ui/style.css', function (req, res) {
    res.send('Article two requested and will be served here');
  res.sendFile(path.join(__dirname, 'u', 'Article two.html'));  
});

app.get('/ui/madi.png', function (req, res) {
    res.send('Article three requested and will be served here');
  res.sendFile(path.join(__dirname, 'u', 'Article three .html'));  
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
