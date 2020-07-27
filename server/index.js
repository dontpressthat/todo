const express = require('express');
const bodyParser = require('body-parser');
const { getAllTasks, addTask, changeChecked } = require('../database');

const port = 3001;
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/todo', (req, res) => {
    getAllTasks()
        .then((results) => res.status(200).json(results))
        .catch((err) => {
            throw err;
        });
});

app.post('/api/todo', (req, res) => {
    const data = req.body.params.task;
    addTask(data)
        .then((results) => res.status(200).json(results))
        .catch((err) => {
            throw err;
        });
});

app.put('/api/todo', (req, res) => {
  changeChecked(req.body.params)
    .then((results) => res.status(200).json(results))
    .catch((err) => {
      throw err;
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});