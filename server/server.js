'use strict'

const express = require('express');

const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static('client'))

app.get('/api/title', (req, res) => {
    res.send({tasks: [
        {
            "task": "buy a sponge."
        },
        {
            "task": "buy noodles"
        }
    ]})
});


app.listen(PORT)