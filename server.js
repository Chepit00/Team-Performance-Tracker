const listInquirer = require("./lib/inquirer");
const db = require('./db/db');

db.connect(err => {
    if (err)
    console.error("Couldn't connect to Database.", err);
    console.log('Connected to Tracker Database.');
    listInquirer();
});


