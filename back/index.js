import express from "express";
const app = express();
const routes = require('./routes');

require('dotenv').config();

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`))
