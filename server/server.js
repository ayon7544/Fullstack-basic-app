import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/basicapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
