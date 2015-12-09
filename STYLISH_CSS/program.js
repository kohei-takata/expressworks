const express = require('express');
const path = require('path');
const app = express();
const dir = process.argv[3];

app.use(require('stylus').middleware(dir));
app.use(express.static(dir || path.join(__dirname, 'public')));

app.listen(process.argv[2]);