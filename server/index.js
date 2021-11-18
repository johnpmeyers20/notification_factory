const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json(data = [
    {
      name: 'Anna',
      telephone: '9173455445',
      email: 'john.meyers@mfa.gov.hu'
    },
    {
      name: 'Dzsoni',
      telephone: '3476965676',
      email: 'johnpmeyers20@yahoo.com'
    }
  ]);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


