const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log('Request received at', new Date().toString(), req.method, req.url);
  next();
});

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/student', (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
