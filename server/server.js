'use strict'

const express = require('express');
const mongoose = require('mongoose');
const { json } = require('body-parser')

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/meantodo';

app.use(express.static('client'));
app.use(json());

const Task = mongoose.model('task', {
    author: String,
    task: String
})

app.get('/api/title', (req, res, err) => {
    Task
        .find()
        .then((tasks) => res.json({tasks}))
        .catch(err)
});

app.post('/api/title', (req, res, err) => {
    const tsk = req.body

    Task
        .create(tsk)
        .then((tsk) => res.json(tsk))
        .catch(err)
})

app.delete('/api/title/:objectId', (req, res) => {
    const idToDelete = req.params.objectId;
    Task
        .findByIdAndRemove(idToDelete, () => {})
})


mongoose.promise = Promise;
mongoose.connect(MONGODB_URL, () => {
    app.listen(PORT, () => {`Listening on port: ${PORT}`})
})
