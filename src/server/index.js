const express = require('express');
const app = express();
const initialData = require('./default-data.json');


const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};

app.use(allowCrossDomain);

app.use(express.static('dist'));

app.get('/', (request, response, next) => {
  response.json(initialData);
});

app.get('/backend/channels', (request, response, next) => {
  response.json(initialData);
});

app.get('/backend/messages/channel', (request, response, next) => {
  response.json(initialData);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
