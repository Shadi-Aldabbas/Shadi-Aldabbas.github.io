const express = require('express');
const { urlencoded } = require('express');

const app = express();

app.use(urlencoded({extended: true}));

app.get('', (req,res) => {
  res.sendFile(__dirname + '/SimpleAdder.html');
})

app.post('/', (req,res)=>{
  const first = req.body.first;
  const second = req.body.second;
  const operation = req.body.operation;

  res.send('the Answer is: ' + eval(first + operation + second));

})
app.listen(8000,(res)=>{
  console.log('8000 started');
})
