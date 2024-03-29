require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json()); 
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Pinterest-like app backend!' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
