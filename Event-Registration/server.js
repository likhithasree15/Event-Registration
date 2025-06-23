const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static frontend files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
  const { name, email, phone, event } = req.body;

  if (!name || !email || !phone || !event) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Handle registration logic (save to DB or memory)
  console.log('New registration:', req.body);

  res.json({ message: 'Registration successful' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
