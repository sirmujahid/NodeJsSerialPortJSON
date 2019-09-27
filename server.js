var express = require('express')
var app = express();
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var cors = require('cors');
app.use(cors());

app.listen('8081', '127.0.0.1');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
port.on("open", ()=> {});

app.get('/', cors(), (req, res, next) =>{
    parser.on('data', data =>{
    res.json({"Temp": data})})});
