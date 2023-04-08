const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// init app
const app = express();
// db URL, ⚠️ use an environment variable for this
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/books';
<<<<<<< Updated upstream
// get Port from .environment variable or use 5000
const PORT = process.env.PORT || 5000;
=======
// get Port from .environment variable or use 4002
const PORT = process.env.PORT || 4002;
>>>>>>> Stashed changes
// routes
const bookRoute = require('./routes/book');
const userRoutes = require('./routes/user');

// log
app.use(morgan('dev'));
// use cross origin access
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use routes
app.use('/books', bookRoute);
app.use('/api/user', userRoutes);

mongoose.Promise = global.Promise;
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log('Database connected'),
    (error) => console.log('Database error: ' + error)
  );

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).json({ error: err.message });
});

app.listen(PORT, () => console.log(`App listening on port:${PORT}`));
