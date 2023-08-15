const express = require('express');
const cors = require("cors");

const app = express();
app.use(cors());
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/virtualdars', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDBga ulanish hosil qilindi...');
  })
  .catch((err) => {
    console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
  });
mongoose.set('useFindAndModify', false);
app.use(express.json());

app.use('/api/fighters', require('./routes/fighter'))
app.use('/api/events', require('./routes/events'))

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port}chi portni eshitishni boshladim...`);
});