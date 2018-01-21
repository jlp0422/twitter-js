/* eslint-disable */

const express = require('express');
const app = express(); // creates an instance of an express application

app.get('/', (req, res) => {
  res.send('Welcome!')
})

app.listen(3000)
