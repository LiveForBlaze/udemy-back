const express = require('express');
const { welcome } = require('./modules');

const app = express();

app.get('/', welcome);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
