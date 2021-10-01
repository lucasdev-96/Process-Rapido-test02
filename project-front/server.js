const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, '.', 'build')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`tudo ok ${PORT}`);
});
