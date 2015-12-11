const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    res.send({ results: req.query.results, type: req.query.type, page: req.query.page });
});

app.listen(process.argv[2]);