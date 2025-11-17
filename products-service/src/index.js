const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

app.get('/', (req, res) => res.send('Products Service OK'));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Products service running on ${PORT}`));
