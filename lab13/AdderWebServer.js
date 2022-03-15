const express = require('express');
const { urlencoded } = require('express');

const app = express();

app.use(urlencoded({extended: true}));

app.get('', (req,res) => {
  res.sendFile(__dirname + '/SimpleAdder.html');
})

app.post('/', (req,res)=>{
  const n1 = req.body.first;
  const n2 = req.body.second;
  const operation = req.body.operation;

  console.log('the answer is: ' + eval(n1 + operation + n2));
  res.send('the answer is: ' + eval(n1 + operation + n2));

})
app.listen(3000,(res)=>{
  console.log('3000 started');
})
