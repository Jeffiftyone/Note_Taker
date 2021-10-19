const notes = require('express').Router();
const { readFromFile, readAndAppend, deleteRecord } = require('../helpers/fsUtils');

// GET Route for retrieving all the tips
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new UX/UI tip
notes.post('/', (req, res) => {
  console.log(req.body);

  const { title, text, id } = req.body;

  if (req.body) {
    const newRecord = {
      title,
      text,
      id
    };

    readAndAppend(newRecord, './db/db.json');
    res.json(`New record added successfully 🚀`);
  } else {
    res.error('Error in adding new record');
  }
});

notes.delete('/:id', (req, res) => {
  console.log(req.params.id.split(':'));
  let delId = req.params.id.split(':')[1];

  deleteRecord(delId, './db/db.json');
  res.json(`Record deleted successfully 🚀`);

});

  notes.post('/post', (req, res) => {
    console.log(req.body);
    sortRecords(req.body,'./db/db.json');
    res.json(`Records posted successfully 🚀`);
  });


module.exports = notes;