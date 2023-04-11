var express = require('express');
var app = express();
const axios = require('axios')
app.get('/simsimi', async function (req, res) {
  const response = await axios('https://api.simsimi.vn/v1/simtalk', {
      method: "POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: `text=${req.body.text}&lc=vn&key=`
    })
    console.log(response);
  res.send(response);
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});