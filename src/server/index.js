const express = require('express');
const app = express();
const initialData = require('./default-data.json');

app.use(express.static('dist'));
// app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/', (request, response, next) => {
  response.json(initialData);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
