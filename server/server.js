// server/index.js or server/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import User from './models/User.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://test:AYONGHOSHAJOYGHOSH@cluster0.ofvbbrk.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.post("/api/users", async (req, res) => {
  try {
    // console.log("Incoming body:", req.body);
    const user = new User(req.body);
    await user.save();
    // console.log("User saved to DB:", user);
    res.status(201).json(user);
  } catch (error) {
    console.error("Save failed:", error);
    res.status(500).json({ error: "Server error" });
  }
});


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
