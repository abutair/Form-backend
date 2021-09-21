const server = require('./src/app');
const mongoose = require('mongoose');

require('dotenv').config();
const port = process.env.PORT || 5000;

// getting-started.js
mongoose
  .connect(`mongodb+srv://abutair:abutair12345@backend-form.8pvrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start(port);
  });
