const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = require('./config/connection');



const PORT = process.env.PORT || 3001;


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}!`);
  });
});
