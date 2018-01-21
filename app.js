/* eslint-disable */

const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates


var locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermoine'}
  ]
}

const people = [
  {name: 'Full'},
  {name: 'Stacker'},
  {name: 'Class'}
];


nunjucks.render('index.html', locals, (err, output) => {
  console.log(output)
});

// app.use((req, res, next) => {
//   console.log(req.method, req.path, res.statusCode)
//   next()
// })

// app.use(/^[/][a-z]+/, (req, res, next) => {
//   console.log('You reached the sub page')
// })

app.use(volleyball)

app.get('/', (req, res) => {
  res.render('index', { title: 'Fullstack', people: people });
  // res.send('Welcome!')
})

app.get('/news', (req, res) => {
  res.send('This is the news page')
})

app.listen(3000);
