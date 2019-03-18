const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const bc = require('./controllers/books_controller')

app.use(bodyParser.json());

app.get('/api/books', bc.read)
app.post('/api/books', bc.create)

const PORT = 4000;
app.listen(PORT, () => console.log(`cats meowing on ${PORT}`))