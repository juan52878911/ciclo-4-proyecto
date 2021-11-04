import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app=express();

const mongoose = require('mongoose'); 
require('dotenv').config()

const uri = process.env.URI;

const options = {useNewUrlParser: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) } 
);

//middleware
app.use(morgan('tiny'));

app.use(cors());

//heroku
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json()); 
//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }))
//app.use(express.static(path.join(__dirname, 'public')));

//middleware
import valideToken from './routes/validate-token'

//configurar las rutas

app.use('/api', require('./routes/User'));
app.use('/api', valideToken, require('./routes/ChatRoute'));
app.use('/api', valideToken, require('./routes/ModifyUser'));
// app.use('/api', require('./routes/cotizacion'));

const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//Puerto


app.set('puerto', process.env.PORT || 3100); 
app.listen(app.get('puerto'), function () { 
    console.log('Entra al servidor: localhost:'+ app.get('puerto')); 
});

const servidor= app.listen(6000,()=>console.log("servidor corriendo"))