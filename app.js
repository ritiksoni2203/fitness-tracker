const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;
const cors = require('cors');
const { isAuthorized: checkAuth } = require('./middleware/checkAuth');

mongoose.connect("mongodb://localhost:27017/gym", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const authRouter = require('./routes/auth');
const goalRouter = require('./routes/goal');
const workoutRouter = require('./routes/workout');

app.use('/auth', authRouter);
app.use('/goals', checkAuth, goalRouter);
app.use('/workout',checkAuth, workoutRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});