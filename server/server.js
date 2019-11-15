require('newrelic');
const express = require('express');
const cors = require('cors');
const model = require('../database/index');

const port = 3004;
const app = express();

app.use(require('morgan')('dev'));

app.use(cors());
app.use('/listing/:id', express.static('public'));

app.get('/listings', (req, res) => {
  model.Listings.find({listingID: Math.ceil(Math.random()*10000000)})
  .then(data => res.send(data));
});
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening to port ${[port]}`);
});
