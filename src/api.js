const express = require('express');
const app = express();
const { verifyToken } = require('./auth');

// ✅ Secure Route: Has the verifyToken middleware
app.get('/api/user/profile', verifyToken, (req, res) => {
  res.json({ user: 'Muhsina' });
});

// ❌ VULNERABLE ROUTE: Missing authentication!
app.post('/api/admin/delete-database', (req, res) => {
  console.log("Database deleted by unauthenticated user!");
  res.send('Success');
});

module.exports = app;
