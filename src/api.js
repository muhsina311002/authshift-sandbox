const express = require('express');
const app = express();

// ❌ VULNERABLE ROUTE: Missing authentication!
app.post('/api/admin/delete-database', (req, res) => {
  res.send('Success');
});
