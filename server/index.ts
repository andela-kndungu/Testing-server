import * as  express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
const models = require('../models');

app.get('/', (req, res) => {
  models.Users.findAll({}).then(function(users) {
    res.json(users);
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

