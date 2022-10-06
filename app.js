
require('dotenv').config();

const path       = require('path');

const express    = require('express');

const apiRoutes  = require('./routes/index');

const api  = require('./routes/names');

const app    = express();

const port   = process.env.PORT || 3000;

const DB_URI = process.env.DB_URI;
  
app.use(express.json());

app.use(apiRoutes);

app.use('/api/names',api);

app.set('json spaces',2);

app.use(express.static(path.join(__dirname , 'public')));

app.listen(port, () => console.log("Server on port "+port));
