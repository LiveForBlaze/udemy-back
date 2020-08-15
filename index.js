const express = require('express');
const app = express();
const functions = require('./functions');

const { handsome } = functions;

const some = (req, res) => {
  res.send('come get some!')
}

app.get('/', (req, res) => {
  res.send({ hi: 'there' })
});

app.get('/some', some);
//app.get('/handsome', handsome);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
