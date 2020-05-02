const express = require('express');

const app = express();

/* 中间件：

1是Access-Control-Allow-Origin    允许的域
2是Access-Control-Allow-Headers   允许的header类型


//allow custom header and CORS
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  if (req.method == 'OPTIONS') {
    res.send(200); /让options请求快速返回/
  }
  else {
    next();
  }
});



*/
app.use((req, resp, next) => {
  resp.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, resp) => {
  resp.status(200);
  resp.send('hello,express');
  resp.end();
});

app.get('/rest', (req, resp) => {
  resp.json({
    result: 1,
    msg: 'hello,express',
  });
});

app.listen(5000);
