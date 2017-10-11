const app = require('./app');
const mongoose = require('mongoose');
const { PORT, DB_CONNECTION_STRING } = require('./config');

mongoose.Promise = global.Promise;

mongoose.connect(DB_CONNECTION_STRING, { useMongoClient: true })
  .then(() => {
    app.listen(PORT, err => {
      if (!err) 
        console.log(`Server run on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log('DB connection error..');
  });