
const express = require('express')
const app = express()
const port = 3000


app.get('/',(req, res) => {
  res.send('Hello World')
})
app.get('/login', (req, res) => {
    res.send('Prashant Mishra')
  })
  app.get('/youtube', (req, res) =>{
    res.send('Hamara naam harsh hai')
  })
  
app.listen(port, () => {
    console.log('example app listningon port ${port}')
})