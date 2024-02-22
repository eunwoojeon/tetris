const express = require('express'); // express 라이브러리 첨부
const app = express(); // express 객체 생성

app.use(express.static('static'))
app.listen(8080, function(){ // port 번호, 실행할 함수
    console.log('listening on 8080');
}); // 서버 오픈(localhost:8080)

app.get('/', function(req, res){
    //res.send('홈페이지');
    res.sendFile(__dirname + '/index.html'); // __dirname : 현재 파일이 위치한 폴더의 절대경로
});