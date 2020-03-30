const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * Linha super importante para definir o uso do json para as requests da api
 */
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);