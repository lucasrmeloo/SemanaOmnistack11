const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

// usando formato json para requisiçoes
app.use(express.json());
app.use(routes);

app.listen(3333);

//35:26