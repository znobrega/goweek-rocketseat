const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://carlosnobrega:twitter123@ds157493.mlab.com:57493/twitter-copy-znobrega',
     {
     useNewUrlParser: true 
    }
);

app.set('view engine', 'ejs');

app.use((req, res, next) => {
    req.io = io;
    return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(port, (err) => {
    if(err) {
        console.log(err);
    }  
    else {
        console.log('Server is running on port: ' + port);
    }
});

