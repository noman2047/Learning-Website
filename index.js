const express = require('express')
const app = express();
const cors=require('cors');
const port = process.env.PORT || 5000;

const allTopics = require('./Data/topicId.json')
const allTopicsDetails = require('./Data/topicNameDetails.json')

app.use(cors())

app.get('/',(req,res)=>{
  res.send('Topic List.');
});

app.get('/course-details',(req,res)=>{
  res.send(allTopicsDetails);
})

app.get('/course-topic',(req,res)=>{
  res.send(allTopics);
})

app.listen(port, ()=>{
  console.log('Topic details.',port);
})