const express = require('express')
const cors = require('cors');
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(cors())

const routesApi = require('./routes/api');

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use("/api/v1", routesApi)

app.listen(PORT, async () => {
    console.log(`Server port ${PORT}`)
})