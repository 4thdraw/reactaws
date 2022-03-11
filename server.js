var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('localhost:8080/ 글자노출하게됨');
})
app.get('/:id', function(req, res){
  res.send('localhost:8080/ 호스팅주소다음의 아이디'+req.method.id);
})


app.listen(8080, function(){
  console.log('서버구동확인콘솔에서')
});
