const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const allTopics = require('./')

app.get('/',(req,res)=>{
  res.send('Topic List.');
});

app.listen(port, ()=>{
  console.log('Topic details.',port);
})