'use strict'

const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static('client'))


app.get('/', (req, res) => {
    res.send('index.html')
})

app.listen(PORT)