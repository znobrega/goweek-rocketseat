const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//const ejs = require('ejs')

const app = express()

const port = process.env.PORT || 3000

mongoose.connect('mongodb://carlosnobrega:twitter123@ds157493.mlab.com:57493/twitter-copy-znobrega',
     {
     useNewUrlParser: true 
    }
)

app.set('view engine', 'ejs')

app.use(require('./routes'))

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } 
    else {
        console.log('Server is running...')
    }
})

