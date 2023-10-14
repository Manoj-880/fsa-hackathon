const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(bodyparser.json());
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`server running on ${PORT}`));

mongoose.connect('mongodb://127.0.0.1:27017/hackathon').then(console.log('DB connected')).catch((err) => console.log(err));

const filePath = path.join(__dirname, "logs", "request.log");
const Stream = fs.createWriteStream(filePath, {flags: 'a'});
app.use(morgan("tiny", {stream: Stream}));

//Controllers
const productRoutes = require("./Routes/productsRoutes");

//Routes
app.use('/products', productRoutes);