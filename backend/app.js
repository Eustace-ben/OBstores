const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();
const app = express();
const db = require('./database/database');
const cookieParser = require('cookie-parser');
//const morgan = require('morgan')
const PORT = process.env.PORT || 4000;



//CONFIGURE CORS 
const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true
  }
  app.use(cors(corsOptions));

//static page
app.use(express.static('public'))

//middlewares
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));
app.use(cookieParser())


//configuring routes
app.use('/', require('./routes/route'))
app.use('/user', require('./routes/auth'));





app.listen(PORT, ()=>{
    console.log('Application running on port 3500');
});