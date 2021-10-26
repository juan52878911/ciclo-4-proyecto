import express from 'express'; 
import morgan from 'morgan'; 
import cors from 'cors'; 
import path from 'path';

const app=express();

const mongoose = require('mongoose'); 
const uri = 'mongodb+srv://grupo1:mintic@cluster0.rjupr.mongodb.net/Clientes?retryWrites=true&w=majority';

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

//configurar las rutas

// app.get('/', function (req,res){

//     res.send('Hola mundo');

// });
app.use('/api', require('./routes/usuario'));
// app.use('/api', require('./routes/cotizacion'));

const history = require('connect-history-api-fallback'); 
app.use(history()); 
app.use(express.static(path.join(__dirname, 'public')));

//Puerto


app.set('puerto', process.env.PORT || 3100); 
app.listen(app.get('puerto'), function () { 
    console.log('Example app listening on port'+ app.get('puerto')); 
});

const servidor= app.listen(6000,()=>console.log("servidor corriendo"))