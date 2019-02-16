const express = require('express')
const app = express() 

app.all('*', (req, res) => {
    console.log('worked')
})

app.get('/', (req, res) => {
    console.log('hello word')
    res.send('xin chao')
})

app.get('/ty', (req, res) => {
    console.log('ty')
    res.send('ty')
})

app.listen(5000, () => {
    console.log('sever duowc bat')
})