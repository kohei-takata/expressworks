const express = require('express');
const app = express();
const crypto = require('crypto');

app.put('/message/:id', (req, res) => {
    const str = crypto.createHash('sha1').update(new Date().toDateString() + req.params.id).digest('hex');
    res.end(str);
});

app.listen(process.argv[2]);