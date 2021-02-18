const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const urls = require('./routes/url.route');

app.use(cors());
app.use(bodyParser.json());

app.use('/url', urls)

const uri = require('./config/keys').mongoURI;
const PORT = process.env.PORT || 8080;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})