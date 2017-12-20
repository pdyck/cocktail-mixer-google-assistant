const express = require('express');
const bodyParser = require('body-parser');
const handle = require('./handler');

const app = express();
app.use(bodyParser.json());

app.post('/google', handle);

app.listen(3000, () => console.log('listening on port 5000'));
