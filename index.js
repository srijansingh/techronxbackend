const port = process.env.PORT || 8082;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoute = require("./route/auth");
const adminRoute = require("./route/admin");
const userRoute = require("./route/consumer")

const app = express();

app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Routes
app.use('/auth', authRoute);
app.use('/api', adminRoute);
app.use('/user', userRoute);
app.get('/', (req, res) => res.send('Techronx Server'))

// Routes End


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message : message, data: data})
})

mongoose.connect(
    'mongodb+srv://techronx:techronx@techronx-xp7dx.mongodb.net/techronx?retryWrites=true&w=majority'
).then(result => {
    app.listen(port, () => {
        console.log("Server running at "+port);
    })
})
.catch(err => console.log(err))
