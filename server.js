const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); 

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the backend 👋" });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received contact:", name, email, message);
  res.json({ status: 'Message received' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
